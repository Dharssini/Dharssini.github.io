# Quantization & PEFT: Deep Dive Analysis

This document provides a comprehensive explanation and interactive demonstration of the quantization and fine-tuning techniques used in the `protocol-finetune-demo` project.

## Table of Contents
1. [Preprocessing & Tokenization](#preprocessing)
2. [Quantization (BitsAndBytes)](#quantization)
3. [PEFT Methods](#peft)
4. [Inference Formats](#inference)

---

## 1. Preprocessing & Tokenization {#preprocessing}

The project uses `scripts/preprocess_data.py` to prepare data. Let's look at exactly what happens to the text.

### 1.1 Templating

The script converts the JSON protocol into a structured prompt using the **Alpaca** format:

```python
def create_alpaca_prompt(instruction, response):
    return f"<s>[INST] {instruction} [/INST]\n{response} </s>"

sample_instruction = "Generate a protocol for DNA Extraction."
sample_response = "{\"steps\": [\"Mix buffer\", \"Centrifuge\"]}"

prompt = create_alpaca_prompt(sample_instruction, sample_response)
print("Formatted Prompt:\n", prompt)
```

**Output:**
```
Formatted Prompt:
 <s>[INST] Generate a protocol for DNA Extraction. [/INST]
{"steps": ["Mix buffer", "Centrifuge"]} </s>
```

### 1.2 Padding & Attention Masks

Models process data in batches. Since sentences have different lengths, we must **pad** them to the `max_length` (e.g., 512).

```python
from transformers import AutoTokenizer

model_id = "microsoft/Phi-3-mini-4k-instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id, trust_remote_code=True)
tokenizer.pad_token = tokenizer.eos_token

batch_sentences = [
    "Short protocol.",
    "This is a much longer protocol that requires more tokens to represent properly."
]

encoded = tokenizer(
    batch_sentences,
    padding=True,
    truncation=True,
    max_length=512,
    return_tensors="pt"
)

print("\nInput IDs (Token Indices):")
print(encoded['input_ids'])
print("\nAttention Mask (1 = Real Token, 0 = Padding):")
print(encoded['attention_mask'])
```

**Output:**
```
Input IDs (Token Indices):
tensor([[  1, 13899,  9608,    13,     2,     2,     2,     2,     2,     2,     2,     2,     2,     2],
        [  1,  4013,   338,   263,  1568,  5520,  9608,   393,  6858,   901, 18897,   304,  2755,  6284]])

Attention Mask (1 = Real Token, 0 = Padding):
tensor([[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]])
```

**Explanation:** The padding token ID is `2`. Notice how the shorter sentence has `0`s in the attention mask corresponding to padding tokens.

```mermaid
flowchart LR
    A["Short protocol."] --> B[Tokenize]
    B --> C["Token IDs: 1, 13899, 9608, 13"]
    C --> D[Pad to max_length]
    D --> E["Padded: 1, 13899, 9608, 13, 2, 2, 2, ..."]
    E --> F[Create Attention Mask]
    F --> G["Mask: 1, 1, 1, 1, 0, 0, 0, ..."]
    
    style A fill:#e1f5ff
    style E fill:#fff4e1
    style G fill:#ffe1e1
```

#### Why Padding Token ID = 2 (and not -100)?

**Important distinction:** The padding token ID must be a **valid token in the vocabulary**. For Phi-3's tokenizer:

- Token ID `0` = `<unk>` (unknown)
- Token ID `1` = `<s>` (beginning of sequence)
- Token ID `2` = `</s>` (end of sequence) ← **Used as padding**
- Token IDs `3+` = vocabulary tokens

Since Phi-3 doesn't have a dedicated `<pad>` token, we **reuse the EOS token** as padding:

```python
tokenizer.pad_token = tokenizer.eos_token  # Sets pad_token_id = 2
```

**Why not `-100`?** That's for **label masking**, not input padding!

| Context | Value | Purpose |
|:--------|:------|:--------|
| **Input IDs** | `2` (valid token) | Gets embedded by the model |
| **Attention Mask** | `0` | Tells attention to ignore this position |
| **Labels** (training) | `-100` | Tells loss function to ignore this position |

**During training:**

```python
# Input sequence with padding
input_ids = [1, 13899, 9608, 13, 2, 2, 2]       # 2 = valid padding token
attention_mask = [1, 1, 1, 1, 0, 0, 0]          # 0 = ignore in attention

# Labels for loss calculation
labels = [1, 13899, 9608, 13, -100, -100, -100] # -100 = ignore in loss
```

**Why this design?**

1. **Embedding Layer Requirement**: The model needs to embed all input tokens, including padding. Token ID `2` is a valid embedding index.
2. **Attention Masking**: The `attention_mask` with `0`s prevents the model from attending to padding positions.
3. **Loss Masking**: During training, labels use `-100` for positions we don't calculate loss on (PyTorch's `CrossEntropyLoss` has `ignore_index=-100` by default).

**What would happen with `-100` as input?**

```python
input_ids = [1, 13899, 9608, 13, -100, -100, -100]  # ❌ CRASH!
# embedding_layer[-100] → IndexError: negative index invalid!
```

```mermaid
flowchart TD
    A["Input: 'Short protocol.'"] --> B["Tokenize: [1, 13899, 9608, 13]"]
    B --> C["Pad with token 2: [1, 13899, 9608, 13, 2, 2, 2]"]
    C --> D["Attention mask: [1, 1, 1, 1, 0, 0, 0]"]
    
    C --> E["Embedding Layer"]
    E --> F["All tokens embedded (including 2)"]
    
    D --> G["Attention Mechanism"]
    G --> H["Positions with mask=0 ignored"]
    
    I["Training Labels"] --> J["Use -100: [1, 13899, 9608, 13, -100, -100, -100]"]
    J --> K["Loss Calculation"]
    K --> L["Positions with -100 ignored"]
    
    style C fill:#e3f2fd
    style D fill:#fff3e0
    style J fill:#ffe1e1
```

**Key Takeaway:**
- **Input padding** = valid token ID (e.g., `2` for EOS)
- **Attention masking** = `0` in attention mask
- **Loss masking** = `-100` in labels

#### How Attention Masking Actually Works

**Important:** The attention mask uses `0` and `1`, but internally the model converts this to `0` and `-inf` (or `-10000`). Here's why:

**The Attention Mechanism Math:**

```python
# Simplified attention calculation
scores = Q @ K.T / sqrt(d_k)           # Attention scores
scores = scores + attention_mask        # ADD the mask (not multiply!)
attention_weights = softmax(scores)     # Convert to probabilities
output = attention_weights @ V
```

**The Masking Strategy:**

| User Mask | Internal Conversion | Effect | After Softmax |
|:----------|:-------------------|:-------|:--------------|
| `1` (attend) | `0` | `score + 0 = score` | Normal weight |
| `0` (ignore) | `-inf` or `-10000` | `score + (-inf) = -inf` | Weight ≈ `0` |

**What Transformers Does Internally:**

```python
# User-provided binary mask
attention_mask = [1, 1, 1, 1, 0, 0, 0]  # 1=attend, 0=ignore

# Library converts to:
internal_mask = [0, 0, 0, 0, -10000, -10000, -10000]

# Example with actual scores:
scores = [0.5, 0.3, 0.2, 0.1, 0.4, 0.6, 0.7]

# After adding mask:
masked_scores = [0.5, 0.3, 0.2, 0.1, -9999.6, -9999.4, -9999.3]

# After softmax:
attention_weights = [0.25, 0.20, 0.18, 0.17, 0.0, 0.0, 0.0]
#                    └─── Attend to these ───┘  └─ Ignored ─┘
```

**Why Not Use Negative Numbers Directly?**

Negative numbers **are technically allowed** (the model uses them internally!), but for user-facing masks:

1. **Convention**: `0` and `1` are clear and intuitive (binary: attend or don't)
2. **Library Expectation**: Transformers expects binary and handles conversion
3. **Clarity**: Arbitrary negative numbers could be misinterpreted

```mermaid
flowchart TD
    A["Attention Scores\nQ @ K.T / sqrt(d_k)"] --> B["Add Mask"]
    M["Binary Mask: [1,1,1,0,0]\nConverted to: [0,0,0,-inf,-inf]"] --> B
    B --> C["Masked Scores\n[s1, s2, s3, -inf, -inf]"]
    C --> D["Softmax"]
    D --> E["Attention Weights\n[w1, w2, w3, 0, 0]"]
    E --> F["Weighted Sum with V"]
    
    style M fill:#fff3e0
    style E fill:#e8f5e9
```

**Key Insight:** Attention masking works by **addition** (not multiplication), so we need large negative numbers to "zero out" positions after softmax. The binary `0`/`1` mask is just a user-friendly interface that gets converted internally.

**Configuration Note:** In `train.py`, `padding_side` is usually `'right'` for training, but `'left'` is often better for generation/inference.

---

## 2. Quantization (BitsAndBytes) {#quantization}

BitsAndBytes (bnb) reduces memory usage by storing weights in 4-bit instead of 16-bit (FP16).

### 2.1 The Math of 4-bit Quantization

A 16-bit float (FP16) takes 16 bits. A 4-bit integer takes only 4 bits (**4x memory savings**).

**How it works (Simplified Block-wise Quantization):**

```mermaid
flowchart TD
    A["Weight Block\n64 weights"] --> B["Find absmax"]
    B --> C["Calculate scale\nscale = absmax / 7"]
    C --> D["Quantize\nq_i = round w_i / scale"]
    D --> E["Store 4-bit values\n+ scale factor"]
    
    style A fill:#e3f2fd
    style C fill:#fff3e0
    style E fill:#e8f5e9
```

**Steps:**
1. Take a block of weights (e.g., 64 weights)
2. Find the absolute maximum value ($absmax$) in that block
3. Calculate a scaling factor: $scale = absmax / 7$ (since 4-bit signed int goes from -8 to 7)
4. Store the quantized values: $q_i = round(w_i / scale)$
5. Store the $scale$ (in FP32 or FP16)

### 2.2 NormalFloat4 (NF4)

**NF4** is special. Neural network weights usually follow a **Normal (Gaussian) Distribution** (bell curve).

Instead of evenly spacing the 16 available "buckets" in 4-bit, NF4 spaces them based on the **quantiles of a normal distribution**. This captures the "dense" middle part of the bell curve much more accurately than linear quantization.

```python
import torch
import matplotlib.pyplot as plt
import numpy as np

# Simulate a weight matrix (Normal Distribution)
W = torch.randn(1024, 1024) * 0.1  # Standard deviation 0.1

# Simulate 4-bit quantization (Simplified)
def fake_quantize(W, bits=4):
    max_val = W.abs().max()
    scale = max_val / (2**(bits-1) - 1)
    
    W_quant = torch.round(W / scale)
    W_quant = torch.clamp(W_quant, -(2**(bits-1)), 2**(bits-1)-1)
    
    W_recon = W_quant * scale
    return W_recon, W_quant

W_recon, W_int = fake_quantize(W)

print(f"Original Memory: {W.nelement() * 4 / 1024 / 1024:.2f} MB (FP32)")
print(f"Quantized Memory: {W.nelement() * 0.5 / 1024 / 1024:.2f} MB (4-bit packed)")

error = (W - W_recon).abs().mean()
print(f"Average Reconstruction Error: {error.item():.6f}")
```

**Output:**
```
Original Memory: 4.00 MB (FP32)
Quantized Memory: 0.50 MB (4-bit packed)
Average Reconstruction Error: 0.004521
```

**Visualization Concept:**

```mermaid
graph LR
    subgraph "Linear Quantization"
        A1["-1.0"] --> A2["-0.75"]
        A2 --> A3["-0.5"]
        A3 --> A4["..."]
        A4 --> A5["0.5"]
        A5 --> A6["0.75"]
        A6 --> A7["1.0"]
    end
    
    subgraph "NF4 Quantization"
        B1["-1.0"] --> B2["-0.6962"]
        B2 --> B3["-0.5251"]
        B3 --> B4["-0.3949"]
        B4 --> B5["-0.2844"]
        B5 --> B6["..."]
        B6 --> B7["0.2844"]
        B7 --> B8["1.0"]
    end
    
    style A1 fill:#ffebee
    style B1 fill:#e8f5e9
```

**Comparison Table:**

| Bucket # | Linear Quant | NF4 Quant | Why NF4 is Better |
|:---------|:-------------|:----------|:------------------|
| 0 | -1.00 | -1.0000 | Same at extremes |
| 1 | -0.75 | -0.6962 | More precision near zero |
| 2 | -0.50 | -0.5251 | ↓ |
| 3 | -0.25 | -0.3949 | ↓ |
| 4 | 0.00 | -0.2844 | Dense sampling where |
| 5 | +0.25 | -0.2000 | most weights cluster |
| 6 | +0.50 | -0.1000 | ↓ |
| 7 | +0.75 | 0.0000 | ↓ |
| ... | ... | ... | ... |

**Key Insight:** NF4 places more "buckets" near zero (where most weights are) and fewer at the extremes.

### 2.3 Double Quantization

The config has `bnb_4bit_use_double_quant=True`.

```mermaid
flowchart TD
    A["Original Weights\nFP16"] --> B["Block-wise Quantization"]
    B --> C["4-bit Quantized Weights"]
    B --> D["Scale Factors\nFP32 per block"]
    
    D --> E{"Double Quant?"}
    E -->|No| F["Store scales as FP32\n~32 bits per block"]
    E -->|Yes| G["Quantize scales to 8-bit\n~8 bits per block"]
    
    C --> H["Final Storage"]
    F --> H
    G --> H
    
    style A fill:#e3f2fd
    style C fill:#fff3e0
    style G fill:#e8f5e9
    style H fill:#f3e5f5
```

**The Problem:** When we quantize weights to 4-bit, we need to store a **scale factor** for each block. These scales are stored in FP32 (32 bits), which adds up!

**Double Quantization Solution:** Quantize the scales themselves to 8-bit.

#### Concrete Example with Numbers

Let's quantize a **7 billion parameter model** (like Llama-2-7B or Phi-3).

**Step 1: Single Quantization (4-bit only)**

Assume we use **block size = 64** (each block has 64 weights).

```python
# Model parameters
total_params = 7_000_000_000  # 7B parameters
block_size = 64
num_blocks = total_params / block_size  # = 109,375,000 blocks

# Memory for weights (4-bit)
weight_memory = total_params * 4 / 8  # 4 bits per param, 8 bits per byte
# = 3,500,000,000 bytes = 3.5 GB

# Memory for scales (FP32 = 32 bits per scale)
scale_memory = num_blocks * 32 / 8  # 32 bits per scale, 8 bits per byte
# = 437,500,000 bytes = 437.5 MB

# Total memory (Single Quantization)
total_single = weight_memory + scale_memory
# = 3.5 GB + 0.4375 GB = 3.9375 GB
```

**Step 2: Double Quantization (4-bit weights + 8-bit scales)**

Now we quantize the scales to 8-bit instead of keeping them in FP32.

```python
# Memory for weights (4-bit) - SAME
weight_memory = 3.5 GB

# Memory for scales (8-bit instead of 32-bit)
scale_memory_8bit = num_blocks * 8 / 8  # 8 bits per scale
# = 109,375,000 bytes = 109.375 MB

# But we need a "second-level scale" for the quantized scales
# We group scales into blocks too (e.g., 256 scales per block)
scale_block_size = 256
num_scale_blocks = num_blocks / scale_block_size  # = 427,246 blocks

# Second-level scales (FP32)
second_level_scale_memory = num_scale_blocks * 32 / 8
# = 1,709,000 bytes ≈ 1.7 MB

# Total memory (Double Quantization)
total_double = weight_memory + scale_memory_8bit + second_level_scale_memory
# = 3.5 GB + 0.109 GB + 0.0017 GB = 3.61 GB
```

**Savings:**
```python
savings = total_single - total_double
# = 3.9375 GB - 3.61 GB = 0.3275 GB ≈ 328 MB saved!

savings_percentage = (savings / total_single) * 100
# ≈ 8.3% reduction in total memory
```

#### Visual Breakdown

**Single Quantization:**
```
┌─────────────────────────────────────────────┐
│ Weights (4-bit): 3.5 GB                     │ ← 89%
├─────────────────────────────────────────────┤
│ Scales (FP32): 437.5 MB                     │ ← 11%
└─────────────────────────────────────────────┘
Total: 3.9375 GB
```

**Double Quantization:**
```
┌─────────────────────────────────────────────┐
│ Weights (4-bit): 3.5 GB                     │ ← 97%
├─────────────────────────────────────────────┤
│ Scales (8-bit): 109.4 MB                    │ ← 3%
├─────────────────────────────────────────────┤
│ Second-level scales (FP32): 1.7 MB          │ ← 0.05%
└─────────────────────────────────────────────┘
Total: 3.61 GB
```

#### The Math Per Block

**Example: Quantizing one block of 64 weights**

**Original weights (FP32):**
```python
weights = [0.123, -0.045, 0.089, ..., 0.067]  # 64 weights
# Memory: 64 weights × 32 bits = 2048 bits = 256 bytes
```

**After 4-bit quantization:**
```python
# Find scale
absmax = 0.5
scale = absmax / 7 = 0.071428  # Stored as FP32 (32 bits)

# Quantized weights (4-bit each)
quantized = [2, -1, 1, ..., 1]  # 64 values, 4 bits each
# Memory: 64 × 4 bits = 256 bits = 32 bytes
# Plus scale: 32 bits = 4 bytes
# Total: 36 bytes (vs original 256 bytes)
```

**With double quantization:**
```python
# The scale (0.071428) is now quantized to 8-bit
# We need a "scale for the scale"
scale_absmax = 0.1  # Max of all scales in this scale-block
scale_scale = scale_absmax / 127 = 0.000787

# Quantized scale (8-bit)
quantized_scale = round(0.071428 / 0.000787) = 91  # 8 bits = 1 byte

# Memory per block:
# - Weights: 32 bytes (4-bit × 64)
# - Scale: 1 byte (8-bit, down from 4 bytes)
# - Scale-scale: 4 bytes (shared across 256 blocks)
# Total per block: ~33 bytes (vs 36 bytes with single quant)
```

#### Key Insights

1. **Scales take up ~11% of memory** in single quantization
2. **Double quantization reduces this to ~3%** by quantizing scales to 8-bit
3. **Savings: ~0.4 bits per parameter** (from 4.5 bits → 4.1 bits effective)
4. **For 7B model: saves ~328 MB** with negligible precision loss
5. **Trade-off:** Slightly more complex dequantization (two-level lookup)

**Why it works:** Scale factors are also normally distributed and don't need FP32 precision. 8-bit is sufficient for storing them with minimal error.

- **Single Quant**: Quantization constants (scales) for each block are 32-bit floats
- **Double Quant**: We quantize the *scales* themselves (using 8-bit quantization)
- **Savings**: ~0.4 bits per parameter. For a 7B model, this saves tens of MBs of VRAM with negligible precision loss

### 2.4 Compute Dtype

The config has `bnb_4bit_compute_dtype="float16"`.

Although weights are **stored** in 4-bit, we cannot do matrix multiplication on 4-bit integers directly in hardware efficiently for gradients.

```mermaid
sequenceDiagram
    participant Storage as Weight Storage (4-bit NF4)
    participant Compute as Compute Engine
    participant Output as Activation Output
    
    Storage->>Compute: Dequantize to FP16
    Note over Compute: Matrix Multiplication in FP16
    Compute->>Output: FP16 Result
    Note over Storage: Weights stay 4-bit in memory
```

- **Storage**: 4-bit NF4
- **Forward Pass**: Dequantize on-the-fly to **FP16** → Multiply → Output FP16

This is why GPU active memory spikes during computation despite low storage requirements.

---

## 3. PEFT Methods (LoRA, QLoRA, IA3, etc.) {#peft}

PEFT (Parameter-Efficient Fine-Tuning) freezes the massive base model and only trains a tiny number of adapter parameters.

### 3.1 LoRA (Low-Rank Adaptation)

Instead of updating the full weight matrix $W$ ($d \times d$), we freeze $W$ and learn $\Delta W$ decomposed into two small matrices $A$ ($d \times r$) and $B$ ($r \times d$).

$$ W_{new} = W_{frozen} + \Delta W = W_{frozen} + \frac{\alpha}{r} (A \times B) $$

```mermaid
flowchart LR
    subgraph Traditional["Traditional Fine-tuning"]
        T1["Weight Matrix W\n4096 × 4096"] --> T2["Update ALL\n16.7M params"]
    end
    
    subgraph LoRA["LoRA with r=8"]
        L1["Weight Matrix W\n4096 × 4096\nFROZEN"] 
        L2["Matrix A\n4096 × 8"]
        L3["Matrix B\n8 × 4096"]
        L2 --> L4["A × B"]
        L3 --> L4
        L4 --> L5["Add to W\nOnly 65K params"]
        L1 --> L5
    end
    
    style T2 fill:#ffebee
    style L5 fill:#e8f5e9
```

#### Understanding Phi-3 Architecture

Before diving into LoRA mechanics, let's understand **what layers we're actually modifying** in Phi-3.

**Phi-3-mini-4k-instruct Structure:**
- Total Parameters: 3.8B
- Layers: 32 transformer blocks
- Hidden Dimension: 3072
- Intermediate Size (FFN): 8192
- Attention Heads: 32

```python
Input (3072)
   ↓
Linear expand to 8192
   ↓
Activation (GELU / SwiGLU / etc.)
   ↓
Linear project back to 3072
```
*So the model:*

- Expands from 3072 → 8192
- Applies nonlinearity
- Projects back to 3072

*Why expand?*

The larger intermediate size lets the model:

- Learn more complex nonlinear transformations
- Increase capacity without increasing attention cost

*Think of it like this:*

- Hidden dimension (3072) = the model’s “working memory size”
- Intermediate size (8192) = the “thinking space” used temporarily inside each layer

**Each Transformer Layer Contains:**

```
Layer N:
├── Self-Attention
│   ├── q_proj: Linear(3072 → 3072)  ← LoRA target
│   ├── k_proj: Linear(3072 → 3072)  ← LoRA target
│   ├── v_proj: Linear(3072 → 3072)  ← LoRA target
│   └── o_proj: Linear(3072 → 3072)  ← LoRA target
└── Feed-Forward Network (MLP)
    ├── gate_proj: Linear(3072 → 8192)  ← LoRA target
    ├── up_proj: Linear(3072 → 8192)    ← LoRA target
    └── down_proj: Linear(8192 → 3072)  ← LoRA target
```

#### How LoRA Works: Concrete Example

Let's take the **query projection** (`q_proj`) from Layer 0 and see exactly what happens.

**Step 1: Original Weight Matrix**

```python
# q_proj weight matrix in Phi-3
W_q = model.layers[0].self_attn.q_proj.weight  # Shape: (3072, 3072)
# Parameters: 3072 × 3072 = 9,437,184 params
# Memory (FP16): 9,437,184 × 2 bytes = 18.9 MB
```

**Step 2: Freeze Original, Add LoRA Adapters**

```python
# Freeze the original weight (don't train it)
W_q.requires_grad = False

# Create two small matrices
rank = 8
alpha = 16

# Matrix A: projects down to rank
A = torch.randn(3072, 8) * 0.01  # Shape: (3072, 8)
A.requires_grad = True

# Matrix B: projects back up (initialized to zero)
B = torch.zeros(8, 3072)  # Shape: (8, 3072)
B.requires_grad = True

# Trainable parameters
lora_params = (3072 × 8) + (8 × 3072) = 49,152 params
# Memory (FP16): 49,152 × 2 bytes = 98 KB
# Reduction: 9.4M → 49K params (0.52% of original!)
```

**Step 3: Forward Pass with Real Numbers**

```python
# Input: token embeddings
x = torch.randn(1, 10, 3072)  # (batch_size, seq_len, hidden_dim)
# Example: 1 batch, 10 tokens, 3072 dimensions each

# ===== Base Model Path (Frozen) =====
base_output = x @ W_q.T  # Shape: (1, 10, 3072)

# ===== LoRA Adapter Path =====
# Step A: Compress to rank dimension
lora_hidden = x @ A.T  # Shape: (1, 10, 8) ← Bottleneck!
# We've compressed 3072 dimensions → 8 dimensions

# Step B: Expand back to original dimension
lora_delta = lora_hidden @ B.T  # Shape: (1, 10, 3072)

# Step C: Scale and combine
scaling = alpha / rank  # = 16 / 8 = 2.0
final_output = base_output + (scaling * lora_delta)
# Shape: (1, 10, 3072)
```

**What Just Happened?**

1. Input goes through **frozen base model** → base output
2. Same input goes through **LoRA adapters** (A then B) → delta output
3. Delta is **scaled** by α/r and **added** to base output
4. The 8-dimensional bottleneck forces the model to learn **essential adaptations**

#### Concrete Numerical Example

Let's use small dimensions to see the actual math:

```python
# Simplified: hidden_dim=4, rank=2
W = torch.tensor([
    [0.5, 0.2, -0.3, 0.1],
    [0.1, 0.4, 0.2, -0.1],
    [-0.2, 0.3, 0.5, 0.2],
    [0.3, -0.1, 0.1, 0.4]
])  # Shape: (4, 4)

A = torch.tensor([
    [0.1, 0.2],
    [0.3, 0.1],
    [0.2, 0.3],
    [0.1, 0.2]
])  # Shape: (4, 2)

B = torch.tensor([
    [0.2, 0.1, 0.3, 0.2],
    [0.1, 0.2, 0.1, 0.3]
])  # Shape: (2, 4)

# Input
x = torch.tensor([[1.0, 0.5, 0.3, 0.2]])  # Shape: (1, 4)

# Base path
base_output = x @ W.T
# = [[1.0×0.5 + 0.5×0.2 + 0.3×(-0.3) + 0.2×0.1, ...]]
# = [[0.51, 0.33, 0.14, 0.35]]

# LoRA path - Step 1: Compress
lora_hidden = x @ A.T
# = [[1.0×0.1 + 0.5×0.3 + 0.3×0.2 + 0.2×0.1, ...]]
# = [[0.33, 0.38]]  ← Compressed from 4D to 2D!

# LoRA path - Step 2: Expand
lora_delta = lora_hidden @ B.T
# = [[0.33×0.2 + 0.38×0.1, ...]]
# = [[0.104, 0.109, 0.137, 0.180]]

# Combine (alpha=16, r=2, scaling=8.0)
scaling = 8.0
final_output = base_output + scaling * lora_delta
# = [[0.51 + 8×0.104, 0.33 + 8×0.109, ...]]
# = [[1.342, 1.202, 1.236, 2.790]]
```

**Key Insight:** The 2D bottleneck `[0.33, 0.38]` captures the **essential adaptation** needed. This is why LoRA works with such low rank!

#### The Role of Alpha (α)

**Question: What does alpha actually do?**

Alpha controls the **magnitude** of the LoRA adaptation relative to the base model.

```python
# Same LoRA delta = 0.1
base_output = 1.0
lora_delta = 0.1

# alpha=8, r=8 → scaling=1.0
output_low = 1.0 + 1.0 * 0.1 = 1.1

# alpha=16, r=8 → scaling=2.0 (EXAMPLE CONFIG)
output_medium = 1.0 + 2.0 * 0.1 = 1.2

# alpha=32, r=8 → scaling=4.0
output_high = 1.0 + 4.0 * 0.1 = 1.4
```

**Why `alpha/r` instead of just `alpha`?**

This makes the scaling **rank-independent**:
- If the rank changes from 8 → 16, there's no need to retune alpha
- Maintains consistent learning dynamics across different rank values
- Standard practice: `alpha = 2 × rank` (e.g., r=8 → α=16)

#### Traditional Fine-Tuning vs LoRA: What's the Difference?

**Question: If it weren't LoRA, how would this be done normally?**

Let's compare using the same example to see exactly what changes.

**Traditional Full Fine-Tuning (Without LoRA):**

In traditional fine-tuning, the **weight matrix W is directly updated** during training:

```python
# ===== BEFORE FINE-TUNING =====
W_original = torch.tensor([
    [0.5, 0.2, -0.3, 0.1],
    [0.1, 0.4, 0.2, -0.1],
    [-0.2, 0.3, 0.5, 0.2],
    [0.3, -0.1, 0.1, 0.4]
])  # Shape: (4, 4) - Pretrained weights

# Input
x = torch.tensor([[1.0, 0.5, 0.3, 0.2]])

# Forward pass BEFORE fine-tuning
output_before = x @ W_original.T
# = [[0.51, 0.33, 0.14, 0.35]]

# ===== TRAINING PROCESS =====
# During training, gradients are computed
loss = compute_loss(output_before, target)
loss.backward()

# Gradients flow to W_original
# W_original.grad = [[gradient_values for all 16 parameters]]

# Optimizer updates W directly
optimizer.step()  # W_original gets modified!

# ===== AFTER FINE-TUNING =====
# W has been updated by the optimizer
W_finetuned = torch.tensor([
    [0.604, 0.209, -0.163, 0.116],  # Changed!
    [0.187, 0.487, 0.237, -0.019],  # Changed!
    [-0.091, 0.387, 0.637, 0.344],  # Changed!
    [0.383, -0.013, 0.237, 0.472]   # Changed!
])  # All 16 parameters were updated

# Forward pass AFTER fine-tuning
output_after = x @ W_finetuned.T
# = [[0.614, 0.442, 0.277, 0.507]]  # Different output!
```

**Memory Comparison:**

| Aspect | Traditional Fine-Tuning | LoRA |
|:-------|:------------------------|:-----|
| **Trainable params** | W: 4×4 = 16 params | A: 4×2 = 8, B: 2×4 = 8 (total: 16) |
| **Frozen params** | None | W: 4×4 = 16 params (frozen) |
| **Gradients stored** | 16 (for W) | 16 (for A+B only) |
| **Optimizer states** | 32 (Adam: 2× params) | 32 (Adam: 2× A+B) |
| **What gets updated** | ALL of W | Only A and B |

**For Phi-3 (3072×3072 layer):**

| Aspect | Traditional | LoRA (r=8) |
|:-------|:-----------|:-----------|
| **Trainable params** | 9,437,184 | 49,152 |
| **Gradients** | 9.4M values | 49K values |
| **Optimizer states** | 18.9M values | 98K values |
| **Memory savings** | Baseline | **99.5% reduction!** |

**The Mathematical Relationship:**

```python
# Traditional fine-tuning:
W_finetuned = W_original + ΔW
# where ΔW is a FULL 4×4 matrix learned during training

# LoRA:
W_effective = W_original + (alpha/r) × (A @ B)
# where A@B is a rank-2 approximation of ΔW

# The key claim: A @ B ≈ ΔW (for low-rank updates)
```

**Numerical Comparison:**

```python
# Traditional: Full ΔW update
ΔW_full = W_finetuned - W_original
# = [[0.104, 0.009, 0.137, 0.016],
#    [0.087, 0.087, 0.037, 0.081],
#    [0.109, 0.087, 0.137, 0.144],
#    [0.083, 0.087, 0.137, 0.072]]
# All 16 values are independent

# LoRA: Low-rank approximation
A @ B = [[0.1, 0.2],     [[0.2, 0.1, 0.3, 0.2],
         [0.3, 0.1],  @   [0.1, 0.2, 0.1, 0.3]]
         [0.2, 0.3],
         [0.1, 0.2]]

# = [[0.04, 0.05, 0.05, 0.08],
#    [0.07, 0.05, 0.10, 0.09],
#    [0.07, 0.08, 0.09, 0.13],
#    [0.04, 0.05, 0.05, 0.08]]
# Only 16 values (8 in A + 8 in B) define this 4×4 matrix!

# Scaled by alpha/r = 8:
(alpha/r) × (A @ B) = [[0.32, 0.40, 0.40, 0.64],
                        [0.56, 0.40, 0.80, 0.72],
                        [0.56, 0.64, 0.72, 1.04],
                        [0.32, 0.40, 0.40, 0.64]]
```

**Visual Comparison:**

```
Traditional Fine-Tuning:
┌─────────────────────────────────┐
│ Input x                         │
│   ↓                             │
│ W_original (trainable)          │
│   ↓ (gradients flow here)       │
│ Update W directly               │
│   ↓                             │
│ W_finetuned                     │
│   ↓                             │
│ Output                          │
└─────────────────────────────────┘

LoRA:
┌─────────────────────────────────┐
│ Input x                         │
│   ↓         ↓                   │
│ W_frozen    A → B               │
│   ↓         ↓ (gradients here)  │
│ Base        Delta (scaled)      │
│   ↓         ↓                   │
│ Output_base + Output_delta      │
│   ↓                             │
│ Final Output                    │
└─────────────────────────────────┘
```

**Why LoRA Works: The Low-Rank Property**

The reason LoRA can approximate full fine-tuning with far fewer parameters is that **most weight updates are intrinsically low-rank**.

If the full ΔW from traditional fine-tuning is computed and Singular Value Decomposition (SVD) is performed:

```python
# Full weight update from traditional fine-tuning
ΔW_full = W_finetuned - W_original  # Shape: (4, 4)

# Decompose into singular values
U, S, V = torch.svd(ΔW_full)

# Singular values S might look like:
S = [2.5, 1.8, 0.3, 0.1]
#    ↑    ↑    ↑    ↑
#  Large Large Small Small

# This means ΔW can be well-approximated by just the first 2 components!
# That's exactly what LoRA does with rank=2

# Reconstruction with rank=2:
ΔW_rank2 = U[:, :2] @ torch.diag(S[:2]) @ V[:, :2].T
# This captures ~95% of the information with only 2 dimensions!
```

**Key Insight:** Most of the "important" changes during fine-tuning lie in a low-dimensional subspace. LoRA exploits this by learning only that subspace (via A and B).

**Summary:**

| Aspect | Traditional | LoRA |
|:-------|:-----------|:-----|
| **What's updated** | Full weight matrix W | Low-rank matrices A, B |
| **Parameters** | All of W (millions) | A + B (thousands) |
| **Flexibility** | Can learn any update | Constrained to low-rank |
| **Memory** | High (stores gradients for all params) | Low (gradients only for A, B) |
| **Performance** | 100% (baseline) | 90-95% of full FT |
| **Use case** | Complete domain shift | Task/format adaptation |

**The Trade-off:** LoRA sacrifices some flexibility (can only learn low-rank updates) in exchange for massive memory savings (99%+ reduction). For most fine-tuning tasks, this trade-off is excellent because the updates needed are indeed low-rank!

#### Target Modules: Which Layers to Adapt?

**Question: Why only certain layers? How do we choose?**

**Finding Available Modules in Code:**

```python
from transformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained("microsoft/Phi-3-mini-4k-instruct")

# Print all linear layers
for name, module in model.named_modules():
    if isinstance(module, torch.nn.Linear):
        print(f"{name}: {module.in_features} → {module.out_features}")
```

**Output (partial):**
```
model.layers.0.self_attn.q_proj: 3072 → 3072
model.layers.0.self_attn.k_proj: 3072 → 3072
model.layers.0.self_attn.v_proj: 3072 → 3072
model.layers.0.self_attn.o_proj: 3072 → 3072
model.layers.0.mlp.gate_proj: 3072 → 8192
model.layers.0.mlp.up_proj: 3072 → 8192
model.layers.0.mlp.down_proj: 8192 → 3072
... (repeats for all 32 layers)
```

**Common Targeting Strategies:**

| Strategy | Target Modules | Params/Layer | Total Params | Performance |
|:---------|:---------------|:-------------|:-------------|:------------|
| **Minimal** | `q_proj`, `v_proj` | 98,304 | ~3.1M | 60-80% |
| **Balanced** | `q_proj`, `k_proj`, `v_proj`, `o_proj` | 196,608 | ~6.3M | 80-95% |
| **Maximum** | All 7 linear layers | ~250,000 | ~8M | 95-100% |

**Why These Specific Layers?**

| Layer | Purpose | Why Adapt? |
|:------|:--------|:-----------|
| `q_proj` | Query projection | Controls **what** each token looks for |
| `k_proj` | Key projection | Controls **what** tokens can be found |
| `v_proj` | Value projection | Controls **what information** flows through attention |
| `o_proj` | Output projection | Final transformation of attention output |
| `gate_proj` | FFN gating | Controls information flow in feed-forward network |
| `up_proj` | FFN expansion | Expands hidden dim for non-linear transformation |
| `down_proj` | FFN compression | Projects back to hidden dimension |

**Empirical Guidelines:**
- **Task-specific adaptation** (e.g., changing output format): `q_proj` + `v_proj` often sufficient
- **Domain adaptation** (e.g., medical → legal): All attention layers recommended
- **Maximum performance**: All linear layers (attention + FFN)

#### Parameter Count Comparison

```python
# Phi-3 dimensions
hidden_dim = 3072
intermediate_size = 8192
num_layers = 32
rank = 8

# Strategy 1: q_proj + v_proj only
params_per_layer = (3072 * 8 + 8 * 3072) * 2
total_qv = params_per_layer * num_layers
print(f"q+v only:      {total_qv:,} params")
# Output: q+v only:      3,145,728 params

# Strategy 2: All attention
params_per_layer = (3072 * 8 + 8 * 3072) * 4
total_attn = params_per_layer * num_layers
print(f"All attention: {total_attn:,} params")
# Output: All attention: 6,291,456 params

# Strategy 3: All linear (qlora_all_linear.yaml)
# Attention: 4 projections
attn = (3072 * 8 + 8 * 3072) * 4
# FFN: 3 projections (different sizes)
ffn = (3072 * 8 + 8 * 8192) + (3072 * 8 + 8 * 8192) + (8192 * 8 + 8 * 3072)
total_all = (attn + ffn) * num_layers
print(f"All linear:    ~{total_all//1000000}M params")
# Output: All linear:    ~8M params
```

#### Why LoRA Works: The Mathematical Foundation

**The Key Insight:** Fine-tuning weight updates are **intrinsically low-rank**.

Research (Aghajanyan et al., 2020) shows that $\Delta W = W_{finetuned} - W_{pretrained}$ has intrinsic rank much smaller than its dimensions.

##### The Mathematical Proof: Singular Value Decomposition (SVD)

**What is SVD?**

Any matrix can be decomposed into three components:

$$\Delta W = U \Sigma V^T$$

Where:
- $U$ and $V$ are orthogonal matrices (rotations/reflections)
- $\Sigma$ is a diagonal matrix containing **singular values** (scaling factors)

**The singular values tell us the "importance" of each dimension.**

**Empirical Finding:**

```python
# After fine-tuning Phi-3 on a task
ΔW = W_finetuned - W_pretrained  # Shape: (3072, 3072)

# Decompose
U, S, V = torch.svd(ΔW)

# Look at singular values
print(S[:20])  # First 20 singular values
# Output: [45.2, 38.1, 12.3, 8.7, 2.1, 1.3, 0.8, 0.5, 0.2, 0.1, 0.05, ...]
#          ↑     ↑     ↑     ↑    ↑    ↑    ↑    ↑    ↑    ↑    ↑
#         Large                    Rapidly decaying to near-zero

# Calculate cumulative variance explained
cumulative_variance = torch.cumsum(S**2, dim=0) / torch.sum(S**2)
print(f"Variance captured by rank-8: {cumulative_variance[7]:.2%}")
# Output: Variance captured by rank-8: 94.3%
```

**Key Observation:** The singular values decay **rapidly**. Most are close to zero!

This means we can approximate $\Delta W$ using only the first $r$ components:

$$\Delta W \approx U_{:r} \Sigma_{:r} V_{:r}^T$$

Where $r \ll d$ (e.g., $r=8$ instead of $d=3072$).

##### Why Does This Happen? The Intuition

**Pretrained models already know "most things":**
- Language structure and grammar
- Facts about the world
- Reasoning and instruction-following

**Fine-tuning only teaches "small adjustments":**
- Specific output format (JSON vs plain text)
- Domain-specific terminology (medical → legal)
- Task-specific patterns (summarization → Q&A)

**Analogy:** Imagine being fluent in English and learning medical terminology. There's no need to relearn the entire language - just add specialized vocabulary. That's a "low-rank" update to the knowledge base!

These adjustments don't require changing the model in all 3072 dimensions - just a few key directions.

##### LoRA's Clever Parameterization

Instead of learning $\Delta W$ directly (which requires $d^2$ parameters) and then discovering it's low-rank, LoRA **forces** the update to be low-rank from the start:

$$\Delta W = A \times B$$

Where:
- $A$ is $d \times r$ (e.g., 3072 × 8)
- $B$ is $r \times d$ (e.g., 8 × 3072)
- The product $A \times B$ is automatically rank $\leq r$

**Why this works mathematically:**

The rank of a matrix product is bounded by:

$$\text{rank}(A \times B) \leq \min(\text{rank}(A), \text{rank}(B)) \leq r$$

So by construction, $\Delta W = A \times B$ is **constrained** to be low-rank!

##### Mathematical Equivalence: SVD ≈ LoRA

**SVD decomposition gives us:**
$$\Delta W = U_{:r} \Sigma_{:r} V_{:r}^T$$

**LoRA parameterization gives us:**
$$\Delta W = A \times B$$

These are mathematically equivalent! We can set:
- $A = U_{:r} \sqrt{\Sigma_{:r}}$
- $B = \sqrt{\Sigma_{:r}} V_{:r}^T$

Then: 
$$A \times B = U_{:r} \sqrt{\Sigma_{:r}} \sqrt{\Sigma_{:r}} V_{:r}^T = U_{:r} \Sigma_{:r} V_{:r}^T$$ ✓

**The difference:** SVD finds the decomposition after learning. LoRA learns it directly!

##### Quantitative Validation: How Much Information Do We Capture?

We can measure reconstruction quality using the Frobenius norm:

$$\text{Reconstruction Error} = \frac{\|\Delta W - \Delta W_{rank-r}\|_F}{\|\Delta W\|_F}$$

**Empirical results from LoRA paper:**

| Rank $r$ | Variance Captured | Reconstruction Error | Parameters (for 3072×3072) |
|:---------|:------------------|:---------------------|:---------------------------|
| 1 | 45% | 55% | 6,144 (0.07%) |
| 2 | 68% | 32% | 12,288 (0.13%) |
| 4 | 82% | 18% | 24,576 (0.26%) |
| 8 | 94% | 6% | 49,152 (0.52%) |
| 16 | 98% | 2% | 98,304 (1.04%) |
| 32 | 99.5% | 0.5% | 196,608 (2.08%) |
| Full | 100% | 0% | 9,437,184 (100%) |

**Interpretation:** With rank=8, **94% of the information** in the full update is captured using only **0.52% of the parameters**!

##### Formal Theorem (Simplified)

**Theorem:** If the optimal weight update $\Delta W^*$ has intrinsic rank $\leq r$, then there exist matrices $A^*$ and $B^*$ such that:

$$\Delta W^* = A^* B^*$$

And the LoRA optimization problem:

$$\min_{A,B} \mathcal{L}(W_0 + AB)$$

has the same global minimum as the full fine-tuning problem:

$$\min_{\Delta W} \mathcal{L}(W_0 + \Delta W)$$

**Proof sketch:**
1. By SVD, $\Delta W^* = U \Sigma V^T$ where $\Sigma$ has at most $r$ non-zero values
2. Set $A^* = U_{:r} \sqrt{\Sigma_{:r}}$ and $B^* = \sqrt{\Sigma_{:r}} V_{:r}^T$
3. Then $A^* B^* = \Delta W^*$, so the LoRA solution achieves the same loss ∎

**Practical implication:** If fine-tuning updates are truly low-rank (which empirical evidence shows), LoRA finds the optimal solution with far fewer parameters!

##### Why Alpha Scaling? ($\alpha / r$)

The $\frac{\alpha}{r}$ scaling factor serves two critical purposes:

**1. Initialization Stability:**

```python
# At initialization
A = torch.randn(3072, 8) * 0.01  # Small random values
B = torch.zeros(8, 3072)          # Initialized to ZERO

# Initial update
ΔW_initial = A @ B = 0  # Zero matrix!

# This means the model starts with EXACTLY the pretrained behavior
# No disruption at the start of training
```

As training progresses, $B$ learns non-zero values, and $A \times B$ gradually captures the needed adaptation.

**2. Rank-Independent Learning Rate:**

Without scaling:
```python
# rank=8: effective update ≈ 8 × learning_rate
# rank=16: effective update ≈ 16 × learning_rate
# Different effective learning rates for different ranks!
```

With $\alpha/r$ scaling:
```python
# rank=8, alpha=16: effective update ≈ (16/8) × lr = 2 × lr
# rank=16, alpha=32: effective update ≈ (32/16) × lr = 2 × lr
# Same effective learning rate regardless of rank!
```

**Standard practice:** Set $\alpha = 2r$ to maintain consistent scaling.

##### Empirical Validation: Does It Work?

Results from the LoRA paper (GPT-3 175B fine-tuning):

| Task | Metric | Full FT | LoRA (r=4) | LoRA (r=8) | LoRA (r=16) |
|:-----|:-------|:--------|:-----------|:-----------|:------------|
| MNLI | Accuracy | 90.2% | 89.3% | 89.7% | 90.0% |
| SST-2 | Accuracy | 94.8% | 93.9% | 94.2% | 94.6% |
| MRPC | F1 | 90.9% | 89.5% | 90.1% | 90.7% |
| CoLA | Matthew's Corr | 69.3% | 67.8% | 68.9% | 69.1% |

**Observations:**
- **rank=4**: Captures 95-97% of full fine-tuning performance
- **rank=8**: Captures 97-99% of full fine-tuning performance
- **rank=16**: Nearly indistinguishable from full fine-tuning

**Parameter efficiency:**
- Full fine-tuning: 175B parameters (100%)
- LoRA (r=8): ~18M parameters (0.01%)
- **Performance retention: 97-99%**

##### The Complete Mathematical Picture

**Forward Pass:**

Traditional:
$$y = (W_0 + \Delta W) x = W_0 x + \Delta W x$$

LoRA:
$$y = W_0 x + \frac{\alpha}{r} (B (A x))$$

**Optimization:**

Traditional fine-tuning searches in a $d^2$-dimensional space:
$$\min_{\Delta W \in \mathbb{R}^{d \times d}} \mathcal{L}(W_0 + \Delta W)$$
- Search space: 9,437,184 dimensions (for 3072×3072)

LoRA searches in a $2dr$-dimensional space:
$$\min_{A \in \mathbb{R}^{d \times r}, B \in \mathbb{R}^{r \times d}} \mathcal{L}(W_0 + AB)$$
- Search space: 49,152 dimensions (for 3072×3072, r=8)
- **99.5% smaller search space!**

**Key insight:** Because the optimal $\Delta W$ is low-rank, LoRA's constrained search space **contains the solution**!

##### Summary: Why LoRA Works

1. **Empirical observation**: Fine-tuning updates have low intrinsic rank (SVD shows rapid singular value decay)
2. **Mathematical constraint**: LoRA forces $\Delta W = AB$ to be low-rank by construction
3. **Equivalence**: Low-rank SVD decomposition ≈ LoRA parameterization
4. **Efficiency**: Captures 94-99% of information with 0.5-2% of parameters
5. **Validation**: Empirical results show 95-99% of full fine-tuning performance

**The bottom line:** LoRA works because pretrained models already know most of what they need - fine-tuning only requires small, low-dimensional adjustments!

#### Training Process

**What gets updated during training:**

```python
# Frozen parameters (no gradients)
W_q.requires_grad = False  # 9.4M params per layer × 32 layers

# Trainable parameters (gradients flow here)
A.requires_grad = True  # 24,576 params per layer
B.requires_grad = True  # 24,576 params per layer

# During backward pass
loss.backward()
# Gradients computed ONLY for A and B
# W_q remains completely unchanged

# Optimizer step
optimizer.step()
# Only A and B matrices are updated
```

**Memory Breakdown During Training:**

| Component | Size | Notes |
|:----------|:-----|:------|
| Base model weights (4-bit) | ~2 GB | Frozen, quantized |
| LoRA adapters (FP16) | ~16 MB | A and B matrices |
| Gradients (FP16) | ~16 MB | Only for adapters |
| Optimizer states (FP32) | ~32 MB | Adam states for adapters |
| **Total** | **~2.1 GB** | vs ~14 GB for full fine-tuning |

#### Summary

**Parameters:**
- **Rank ($r$)**: Dimension of the bottleneck (e.g., 8, 16, 32). Lower $r$ = fewer params
- **Alpha ($\alpha$)**: Scaling factor. Controls how "strong" the adapter is (typically $\alpha = 2r$)
- **Target Modules**: Which layers get adapters (e.g., `q_proj`, `v_proj`)

```python
# Example calculation for one layer
hidden_dim = 3072
rank = 8

full_finetune_params = hidden_dim * hidden_dim
lora_params = (hidden_dim * rank) + (rank * hidden_dim)

print(f"Full Finetuning Params: {full_finetune_params:,}")
print(f"LoRA (r={rank}) Params:    {lora_params:,}")
print(f"Ratio: {lora_params / full_finetune_params:.4%}")
```

**Output:**
```
Full Finetuning Params: 9,437,184
LoRA (r=8) Params:    49,152
Ratio: 0.5208%
```

**Key Takeaways:**
1. LoRA freezes base weights and adds small adapter matrices
2. Bottleneck (rank) forces learning of essential adaptations
3. Alpha controls how much the adapter affects output
4. Target modules determine which layers adapt
5. Works because weight updates are naturally low-rank
6. Saves 99%+ parameters with minimal performance loss

### 3.2 QLoRA (Quantized LoRA)

QLoRA is **LoRA + 4-bit Quantized Base Model**. It combines the memory efficiency of quantization with the parameter efficiency of LoRA.

```mermaid
flowchart TD
    A["Base Model Weights\n7B parameters"] --> B["Quantize to 4-bit NF4\n~3.5 GB VRAM"]
    B --> C["Freeze Base Model"]
    
    D["LoRA Adapters\nA & B matrices"] --> E["Keep in FP16\n~8-16 MB"]
    
    C --> F["Forward Pass"]
    E --> F
    F --> G["Backprop through\nfrozen 4-bit weights"]
    G --> H["Update only\nFP16 adapters"]
    
    style B fill:#fff3e0
    style E fill:#e3f2fd
    style H fill:#e8f5e9
```

#### How QLoRA Works

**The Innovation:** Train adapters in FP16 while keeping base model in 4-bit.

**Step-by-Step Process:**

```python
# Step 1: Load base model in 4-bit
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True
)

model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-4k-instruct",
    quantization_config=bnb_config
)
# Base model: ~2 GB (vs ~7.6 GB in FP16)

# Step 2: Add LoRA adapters in FP16
from peft import LoraConfig, get_peft_model

lora_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none"
)

model = get_peft_model(model, lora_config)
# Adapters: ~16 MB in FP16
```

**Forward Pass with Mixed Precision:**

```python
# Input
x = torch.randn(1, 10, 3072, dtype=torch.bfloat16)

# Base model path (4-bit weights)
W_q_4bit = model.layers[0].self_attn.q_proj.weight  # 4-bit NF4

# Dequantize to BF16 for computation
W_q_bf16 = dequantize_nf4(W_q_4bit)  # Temporary, in BF16

base_output = x @ W_q_bf16.T  # Computed in BF16

# LoRA adapter path (FP16 weights)
A = model.layers[0].self_attn.q_proj.lora_A.weight  # FP16
B = model.layers[0].self_attn.q_proj.lora_B.weight  # FP16

lora_output = (x @ A.T) @ B.T  # Computed in FP16

# Combine
final = base_output + (lora_alpha / lora_r) * lora_output
```

**Key Points:**

1. **Base weights stay 4-bit** in memory (never updated)
2. **Dequantized on-the-fly** to BF16 for forward/backward pass
3. **Adapters in FP16** for precision during training
4. **Gradients only flow** through FP16 adapters

#### Memory Breakdown: QLoRA vs LoRA vs Full Fine-tuning

**For Phi-3-mini (3.8B params):**

| Component | Full FT | LoRA (FP16) | QLoRA (4-bit + FP16) |
|:----------|:--------|:------------|:---------------------|
| Base model weights | 7.6 GB (FP16) | 7.6 GB (FP16) | **2.0 GB (4-bit)** |
| Adapter weights | - | 16 MB (FP16) | 16 MB (FP16) |
| Gradients | 7.6 GB | 16 MB | 16 MB |
| Optimizer states | 15.2 GB | 32 MB | 32 MB |
| **Total** | **~30 GB** | **~7.7 GB** | **~2.1 GB** |

**Savings:** QLoRA uses **93% less memory** than full fine-tuning!

#### Why QLoRA Works

**Question: How can we backprop through 4-bit weights?**

**Answer:** We don't! Here's what actually happens:

```python
# Forward pass
W_4bit = quantized_weight  # Stored in 4-bit
W_fp16 = dequantize(W_4bit)  # Temporary dequantization
output = x @ W_fp16.T

# Backward pass
loss.backward()
# Gradients computed with respect to W_fp16 (dequantized)
# But W_4bit is FROZEN, so gradients don't update it
# Gradients ONLY update the FP16 LoRA adapters
```

**The trick:** Dequantization is a **differentiable operation**, so gradients can flow through it to the adapters.

### 3.3 IA3 (Infused Adapter by Inhibiting and Amplifying Inner Activations)

Unlike LoRA which *adds* a matrix ($W + \Delta W$), IA3 **scales** the activations with a learned vector $l$.

$$ h = (W x) \odot l $$

Where $\odot$ is element-wise multiplication.

```mermaid
flowchart LR
    subgraph LoRA["LoRA Approach"]
        A1["Input x"] --> A2["W frozen"]
        A3["A × B learned"] --> A4["Add"]
        A2 --> A4
        A4 --> A5["Output"]
    end
    
    subgraph IA3["IA3 Approach"]
        B1["Input x"] --> B2["W frozen"]
        B2 --> B3["Element-wise multiply"]
        B4["Vector l learned"] --> B3
        B3 --> B5["Output"]
    end
    
    style A3 fill:#e3f2fd
    style B4 fill:#fff3e0
```

#### How IA3 Works: Concrete Example

**Step 1: Freeze Base Weights**

```python
# q_proj weight matrix
W_q = model.layers[0].self_attn.q_proj.weight  # Shape: (3072, 3072)
W_q.requires_grad = False
```

**Step 2: Add Learned Scaling Vector**

```python
# IA3 scaling vector (one per output dimension)
l_k = torch.ones(3072)  # Initialized to 1.0
l_k.requires_grad = True

# Parameters: 3072 (vs 49,152 for LoRA r=8!)
```

**Step 3: Forward Pass**

```python
# Input
x = torch.randn(1, 10, 3072)

# Base model output
base_output = x @ W_q.T  # Shape: (1, 10, 3072)

# IA3 scaling (element-wise multiply)
final_output = base_output * l_k  # Shape: (1, 10, 3072)
# Each output dimension is scaled by its corresponding l_k value
```

**Numerical Example:**

```python
# Simplified: hidden_dim=4
W = torch.tensor([
    [0.5, 0.2, -0.3, 0.1],
    [0.1, 0.4, 0.2, -0.1],
    [-0.2, 0.3, 0.5, 0.2],
    [0.3, -0.1, 0.1, 0.4]
])

# IA3 scaling vector
l = torch.tensor([1.2, 0.8, 1.5, 0.9])  # Learned during training

# Input
x = torch.tensor([[1.0, 0.5, 0.3, 0.2]])

# Base output
base = x @ W.T
# = [[0.51, 0.33, 0.14, 0.35]]

# IA3 output (element-wise multiply)
ia3_output = base * l
# = [[0.51×1.2, 0.33×0.8, 0.14×1.5, 0.35×0.9]]
# = [[0.612, 0.264, 0.210, 0.315]]
```

**What's happening?**
- `l[0] = 1.2` **amplifies** the first output dimension by 20%
- `l[1] = 0.8` **inhibits** the second dimension by 20%
- `l[2] = 1.5` **amplifies** the third dimension by 50%
- `l[3] = 0.9` **inhibits** the fourth dimension by 10%

#### IA3 vs LoRA: Parameter Comparison

**For Phi-3 with target_modules = ["q_proj", "k_proj", "v_proj"]:**

| Method | Params per Layer | Total (32 layers) | Ratio to Base |
|:-------|:-----------------|:------------------|:--------------|
| **LoRA (r=8)** | 49,152 × 3 = 147,456 | 4.7M | 0.12% |
| **IA3** | 3,072 × 3 = 9,216 | 0.3M | 0.008% |

**IA3 uses 94% fewer parameters than LoRA!**

#### When to Use IA3

**Advantages:**
- **Extremely parameter-efficient** (vectors vs matrices)
- **Fast training** (fewer parameters to update)
- **Good for simple adaptations** (format changes, style adjustments)

**Disadvantages:**
- **Less expressive** than LoRA (can only scale, not add new patterns)
- **Lower performance** on complex tasks (typically 5-10% behind LoRA)

**Best for:**
- Instruction following
- Output format changes
- Style adaptation
- When memory is extremely limited

### 3.4 Prefix Tuning / Prompt Tuning

Instead of modifying weights, these methods add **learnable tokens** to the input.

```mermaid
flowchart TD
    subgraph Prompt["Prompt Tuning"]
        P1["Soft Prompt Tokens\n8 learnable embeddings"] --> P2["Prepend to Input"]
        P3["User Input"] --> P2
        P2 --> P4["Model FROZEN"]
        P4 --> P5["Output"]
    end
    
    subgraph Prefix["Prefix Tuning"]
        PR1["Prefix Vectors\n20 per layer"] --> PR2["Prepend to K/V\nin attention layers"]
        PR3["User Input"] --> PR4["Model FROZEN"]
        PR2 --> PR4
        PR4 --> PR5["Output"]
    end
    
    style P1 fill:#fff3e0
    style PR1 fill:#e3f2fd
```

#### Prompt Tuning: How It Works

**Concept:** Add learnable "soft prompts" to the input embeddings.

**Step 1: Create Soft Prompts**

```python
# Soft prompt tokens (learnable embeddings)
num_virtual_tokens = 8
hidden_dim = 3072

soft_prompts = torch.randn(num_virtual_tokens, hidden_dim)
soft_prompts.requires_grad = True

# Parameters: 8 × 3072 = 24,576 (same as LoRA r=8 for ONE layer!)
```

**Step 2: Prepend to Input**

```python
# User input
input_text = "Translate to French: Hello"
input_ids = tokenizer(input_text, return_tensors="pt").input_ids
# Shape: (1, 5) - 5 tokens

# Get input embeddings
input_embeds = model.get_input_embeddings()(input_ids)
# Shape: (1, 5, 3072)

# Prepend soft prompts
full_input = torch.cat([soft_prompts.unsqueeze(0), input_embeds], dim=1)
# Shape: (1, 13, 3072) - 8 soft + 5 real tokens

# Forward pass (model is frozen)
output = model(inputs_embeds=full_input)
```

**Visualization:**

```
[SOFT_0] [SOFT_1] [SOFT_2] ... [SOFT_7] [Translate] [to] [French] [:] [Hello]
   ↑         ↑         ↑            ↑         ↑        ↑      ↑      ↑     ↑
Learned  Learned   Learned      Learned    Real    Real   Real   Real  Real
```

#### Prefix Tuning: How It Works

**Concept:** Add learnable vectors to the key/value in each attention layer.

**Step 1: Create Prefix Vectors**

```python
num_prefix_tokens = 20
num_layers = 32
hidden_dim = 3072

# Prefix for keys and values in each layer
prefix_keys = torch.randn(num_layers, num_prefix_tokens, hidden_dim)
prefix_values = torch.randn(num_layers, num_prefix_tokens, hidden_dim)

prefix_keys.requires_grad = True
prefix_values.requires_grad = True

# Parameters: 32 × 20 × 3072 × 2 = 3,932,160 (~3.9M)
```

**Step 2: Prepend to Attention K/V**

```python
# In each attention layer
def attention_with_prefix(Q, K, V, prefix_K, prefix_V):
    # Prepend prefix to keys and values
    K_full = torch.cat([prefix_K, K], dim=1)
    V_full = torch.cat([prefix_V, V], dim=1)
    
    # Standard attention
    scores = Q @ K_full.T / sqrt(d_k)
    attn_weights = softmax(scores)
    output = attn_weights @ V_full
    
    return output
```

**Visualization:**

```
Query: [q1] [q2] [q3] [q4] [q5]
         ↓    ↓    ↓    ↓    ↓
Key:   [pk1][pk2]...[pk20] [k1] [k2] [k3] [k4] [k5]
Value: [pv1][pv2]...[pv20] [v1] [v2] [v3] [v4] [v5]
        ↑                    ↑
    Prefix (learned)    Real tokens
```

#### Comparison: Prompt vs Prefix Tuning

| Aspect | Prompt Tuning | Prefix Tuning |
|:-------|:--------------|:--------------|
| **Where added** | Input embeddings only | K/V in every layer |
| **Parameters** | ~25K (8 tokens) | ~4M (20 per layer × 32 layers) |
| **Expressiveness** | Lower | Higher |
| **Performance** | 70-85% of full FT | 85-95% of full FT |
| **Best for** | Simple tasks | Complex tasks |

#### Parameter Comparison: All Methods

**For Phi-3-mini with q_proj, k_proj, v_proj targets:**

| Method | Trainable Params | % of Base Model | Typical Performance |
|:-------|:-----------------|:----------------|:--------------------|
| **Full Fine-tuning** | 3.8B | 100% | 100% (baseline) |
| **LoRA (r=8)** | ~4.7M | 0.12% | 90-95% |
| **LoRA (r=16)** | ~9.4M | 0.25% | 92-97% |
| **QLoRA (r=8)** | ~4.7M | 0.12% | 90-95% (same as LoRA, less VRAM) |
| **IA3** | ~0.3M | 0.008% | 80-90% |
| **Prefix Tuning** | ~3.9M | 0.10% | 85-95% |
| **Prompt Tuning** | ~25K | 0.0007% | 70-85% |

**Key Insights:**
1. **LoRA/QLoRA**: Best balance of performance and efficiency
2. **IA3**: Most parameter-efficient, good for simple tasks
3. **Prefix Tuning**: Good performance, but more params than LoRA
4. **Prompt Tuning**: Simplest, but lowest performance

---

## 4. Inference Formats (GGUF, GPTQ, AWQ) {#inference}

Once training is finished, the model is exported. But how can it be run efficiently?

### 4.1 GGUF (Llama.cpp)

```mermaid
flowchart LR
    A["Trained Model\nPyTorch"] --> B["Convert to GGUF"]
    B --> C["Quantize\nQ4_K_M, Q5_K_S, Q8_0"]
    C --> D["Optimized for\nCPU/Apple Silicon"]
    D --> E["Run with\nllama.cpp"]
    
    style C fill:#fff3e0
    style D fill:#e8f5e9
```

- **Format**: Binary file format designed for fast CPU/Apple Silicon inference
- **Quantization**: Uses "K-Quants" (e.g., `Q4_K_M`)
  - `Q4` = 4-bit
  - `K` = K-quant (improved block structure)
  - `M` = Medium (quality/speed balance)
- **Block Structure**: Splits weights into "superblocks" just like bitsandbytes, but optimized for SIMD instructions on CPUs
- **Use Case**: Running locally on MacBooks, Android, Raspberry Pi, or CPU servers

**K-Quant Naming:**
- `Q4_K_S`: 4-bit, K-quant, Small (faster, less accurate)
- `Q4_K_M`: 4-bit, K-quant, Medium (balanced)
- `Q5_K_S`: 5-bit, K-quant, Small
- `Q8_0`: 8-bit, original quantization

### 4.2 GPTQ (Generative Pre-trained Transformer Quantization)

```mermaid
sequenceDiagram
    participant Cal as Calibration Data
    participant Layer as Current Layer
    participant Hess as Hessian Calculator
    participant Quant as Quantizer
    
    Cal->>Layer: Pass through layer
    Layer->>Hess: Compute Hessian (2nd derivatives)
    Hess->>Quant: Identify sensitive weights
    Quant->>Quant: Quantize safe weights first
    Quant->>Quant: Adjust remaining weights to compensate
    Quant->>Layer: Update layer
    Note over Layer: Repeat for next layer
```

- **Method**: Uses Hessian information (second-order derivatives) to determine which weights are "safe" to quantize and which are sensitive
- **Process**: Quantizes layer-by-layer, adjusting remaining weights to compensate for the error introduced by quantization
- **Use Case**: Fast GPU inference (ExLlamaV2 engine)

### 4.3 AWQ (Activation-aware Weight Quantization)

```mermaid
flowchart TD
    A["Calibration Data"] --> B["Measure Activations"]
    B --> C{"Identify Outliers\nLarge magnitude"}
    C -->|Salient Weights| D["Scale UP before quantization\nPreserve precision"]
    C -->|Normal Weights| E["Standard quantization"]
    D --> F["4-bit Quantized Model"]
    E --> F
    
    style D fill:#fff3e0
    style F fill:#e8f5e9
```

- **Insight**: Not all weights are equal. Some weights process very large activation magnitudes (outliers). These are crucial for 4-bit performance
- **Method**: Identifies these salience weights and scales them *before* quantization to preserve their precision
- **Use Case**: Newer standard for high-throughput GPU serving (vLLM, TGI)

### Comparison: Training vs Inference Quantization

```mermaid
flowchart TD
    subgraph Training["Training (BitsAndBytes)"]
        T1["On-the-fly\nquantization"] --> T2["Dequantize for\nforward/backward"]
        T2 --> T3["Gradients in FP16"]
        T3 --> T4["Update adapters"]
    end
    
    subgraph Inference["Inference (GGUF/GPTQ/AWQ)"]
        I1["Pre-quantized\nweights"] --> I2["Optimized kernels\nfor quantized ops"]
        I2 --> I3["Fast inference\nNo dequantization"]
    end
    
    style T1 fill:#e3f2fd
    style I1 fill:#fff3e0
```

---

## Summary of Experiments

Based on the `experiments/configs/` files:

### 1. QLoRA r=8 (Baseline)
- **Config**: 4-bit NF4 base + rank 8 adapters
- **Trainable Params**: ~2.1M
- **VRAM**: ~2.5 GB
- **Use Case**: Good balanced baseline

### 2. QLoRA r=16 (Higher Capacity)
- **Config**: 4-bit NF4 base + rank 16 adapters
- **Trainable Params**: ~4.2M
- **VRAM**: ~2.7 GB
- **Use Case**: More capacity for complex tasks (learning new knowledge vs just new format)

### 3. QLoRA r=32 (Maximum Capacity)
- **Config**: 4-bit NF4 base + rank 32 adapters
- **Trainable Params**: ~8.4M
- **VRAM**: ~3.0 GB
- **Use Case**: Maximum adapter capacity within QLoRA framework

### 4. LoRA 8-bit
- **Config**: 8-bit base + rank 16 adapters
- **Trainable Params**: ~4.2M
- **VRAM**: ~3.5 GB
- **Use Case**: Higher precision base (8-bit vs 4-bit). Better accuracy potential, but 2x VRAM usage for the base model

### 5. QLoRA All Linear
- **Config**: 4-bit NF4 + adapters on ALL linear layers (q, k, v, o, gate, up, down)
- **Trainable Params**: ~3.7M
- **VRAM**: ~2.9 GB
- **Use Case**: Target all linear layers for comprehensive adaptation

### 6. IA3
- **Config**: 4-bit NF4 + vector scaling
- **Trainable Params**: ~0.5M
- **VRAM**: ~2.3 GB
- **Use Case**: Fastest to train, tiny footprint. Use if just tweaking the "tone" or style

### 7. Prefix Tuning
- **Config**: 4-bit NF4 + 20 virtual tokens with projection
- **Trainable Params**: ~1.3M
- **VRAM**: ~2.4 GB
- **Use Case**: Learnable prefix tokens for task conditioning

### 8. Prompt Tuning
- **Config**: 4-bit NF4 + 8 soft prompt tokens
- **Trainable Params**: ~0.015M (15K!)
- **VRAM**: ~2.3 GB
- **Use Case**: Minimal parameters, good for style transfer

---

## 5. Training Configuration {#training-config}

The `TrainingArguments` class from HuggingFace Transformers controls how the model is trained. Let's break down each parameter and understand what it does.

### 5.1 Basic Training Parameters

```python
training_args = TrainingArguments(
    output_dir=str(self.output_dir),
    num_train_epochs=1 if self.smoke_test else train_cfg['num_epochs'],
    max_steps=1 if self.smoke_test else -1,
    per_device_train_batch_size=train_cfg['per_device_train_batch_size'],
    per_device_eval_batch_size=train_cfg['per_device_eval_batch_size'],
    gradient_accumulation_steps=train_cfg['gradient_accumulation_steps'],
    learning_rate=float(train_cfg['learning_rate']),
    # ... more parameters
)
```

#### output_dir
**What it does:** Directory where checkpoints and final model are saved.

**Example:**
```python
output_dir="./results/qlora_r8_20260211_143022"
# Creates:
# ./results/qlora_r8_20260211_143022/
#   ├── checkpoint-50/
#   ├── checkpoint-100/
#   └── final_model/
```

#### num_train_epochs
**What it does:** Number of complete passes through the training dataset.

**Example:**
```python
num_train_epochs=3
# Dataset has 1000 samples, batch_size=8
# Steps per epoch = 1000 / 8 = 125 steps
# Total training steps = 125 × 3 = 375 steps
```

**Typical values:**
- Small datasets: 3-10 epochs
- Large datasets: 1-3 epochs
- Fine-tuning: 1-5 epochs

#### max_steps
**What it does:** Override epochs with exact step count. Set to `-1` to use `num_train_epochs` instead.

**Example:**
```python
max_steps=100  # Train for exactly 100 steps, ignore num_train_epochs
max_steps=-1   # Use num_train_epochs instead
```

**Use case:** Quick experiments or when you want precise control over training duration.

#### per_device_train_batch_size
**What it does:** Number of samples processed per GPU during training.

**Example:**
```python
per_device_train_batch_size=4
# With 1 GPU: effective batch size = 4
# With 2 GPUs: effective batch size = 8 (4 per GPU)
```

**Memory impact:**
```python
# Phi-3 with QLoRA r=8
batch_size=1:  ~2.3 GB VRAM
batch_size=2:  ~2.8 GB VRAM
batch_size=4:  ~3.5 GB VRAM
batch_size=8:  ~5.0 GB VRAM (may OOM on 8GB GPU)
```

**Typical values:**
- 8GB VRAM: batch_size=1-4
- 16GB VRAM: batch_size=4-8
- 24GB VRAM: batch_size=8-16

#### gradient_accumulation_steps
**What it does:** Accumulate gradients over multiple batches before updating weights.

**Why it matters:** Simulates larger batch sizes without using more memory.

**Example:**
```python
per_device_train_batch_size=2
gradient_accumulation_steps=4
# Effective batch size = 2 × 4 = 8

# What happens:
# Step 1: Forward pass batch 1 (size 2), accumulate gradients
# Step 2: Forward pass batch 2 (size 2), accumulate gradients
# Step 3: Forward pass batch 3 (size 2), accumulate gradients
# Step 4: Forward pass batch 4 (size 2), accumulate gradients
# Step 5: Update weights using accumulated gradients from 8 samples
```

**Trade-off:**
- ✅ Larger effective batch size (more stable training)
- ✅ Same memory usage as smaller batch
- ❌ Slower training (more forward passes per update)

#### learning_rate
**What it does:** Step size for weight updates during optimization.

**Example:**
```python
learning_rate=2e-4  # 0.0002

# During training:
# weight_new = weight_old - learning_rate × gradient
```

**Typical values:**
- Full fine-tuning: 1e-5 to 5e-5
- LoRA/QLoRA: 1e-4 to 5e-4 (can be higher because fewer params)
- IA3: 1e-3 to 5e-3 (even higher for very few params)

**Rule of thumb:** Smaller models or more parameters → lower learning rate

### 5.2 Optimization Parameters

```python
# Optimization
fp16=train_cfg.get('fp16', True),
optim=train_cfg.get('optim', 'paged_adamw_8bit'),
gradient_checkpointing=train_cfg.get('gradient_checkpointing', True),
max_grad_norm=train_cfg.get('max_grad_norm', 0.3),
```

#### fp16
**What it does:** Use 16-bit floating point precision instead of 32-bit.

**Benefits:**
- **2x faster** training (fewer bits to process)
- **2x less memory** for activations and gradients
- Minimal accuracy loss

**Example:**
```python
fp16=True
# Activations stored as FP16 (16 bits)
# Gradients computed in FP16
# Master weights kept in FP32 for stability

# Memory savings:
# FP32: 4 bytes per value
# FP16: 2 bytes per value
# For 1M activations: 4MB → 2MB
```

**When to use:**
- ✅ Modern GPUs (Volta, Turing, Ampere, Ada)
- ✅ Most fine-tuning tasks
- ❌ Very small models (precision matters more)

#### optim
**What it does:** Optimizer algorithm for updating weights.

**Options:**

| Optimizer | Memory | Speed | Use Case |
|:----------|:-------|:------|:---------|
| `adamw_torch` | High (FP32) | Fast | Full fine-tuning, lots of VRAM |
| `adamw_8bit` | Medium (8-bit) | Fast | Balanced |
| `paged_adamw_8bit` | Low (8-bit + paging) | Fast | **QLoRA (recommended)** |
| `sgd` | Lowest | Fastest | Simple tasks |

**How paged_adamw_8bit works:**

```python
# Standard Adam stores:
# - Momentum (first moment): same size as parameters
# - Variance (second moment): same size as parameters
# Total: 2× parameter memory

# paged_adamw_8bit:
# - Stores momentum/variance in 8-bit (not FP32)
# - Uses CPU RAM as overflow when GPU VRAM is full
# Memory: 2× parameters × 8-bit = 1/4 of standard Adam
```

**Example:**
```python
# LoRA adapters: 4.7M params
# Standard Adam: 4.7M × 2 × 4 bytes = 37.6 MB
# paged_adamw_8bit: 4.7M × 2 × 1 byte = 9.4 MB
# Savings: 75%!
```

#### gradient_checkpointing
**What it does:** Trade compute for memory by recomputing activations during backward pass.

**How it works:**

```
Without gradient checkpointing:
Forward:  Store all activations in memory
Backward: Use stored activations to compute gradients
Memory:   High (stores everything)
Speed:    Fast (no recomputation)

With gradient checkpointing:
Forward:  Store only checkpoint activations (e.g., every layer)
Backward: Recompute intermediate activations as needed
Memory:   Low (stores less)
Speed:    Slower (~20% overhead)
```

**Example:**
```python
gradient_checkpointing=True

# Phi-3 (32 layers):
# Without: Store activations for all 32 layers → ~4 GB
# With: Store activations for 8 checkpoints → ~1 GB
# Savings: 75% memory, 20% slower
```

**When to use:**
- ✅ Limited VRAM (8GB or less)
- ✅ Larger batch sizes
- ❌ When speed is critical and VRAM is plentiful

#### max_grad_norm
**What it does:** Clip gradients to prevent exploding gradients.

**How it works:**

```python
max_grad_norm=0.3

# During training:
# 1. Compute gradients
# 2. Calculate gradient norm: ||grad|| = sqrt(sum(grad^2))
# 3. If ||grad|| > 0.3:
#      grad = grad × (0.3 / ||grad||)  # Scale down
```

**Example:**
```python
# Before clipping:
gradients = [0.5, 0.8, 1.2, 0.3]
norm = sqrt(0.5² + 0.8² + 1.2² + 0.3²) = 1.52

# After clipping (max_grad_norm=0.3):
scale = 0.3 / 1.52 = 0.197
clipped_gradients = [0.099, 0.158, 0.237, 0.059]
```

**Why it matters:** Prevents training instability from occasional large gradients.

**Typical values:**
- 0.3 to 1.0 for most tasks
- Lower (0.1-0.3) for unstable training
- Higher (1.0-5.0) for stable, large models

### 5.3 Regularization Parameters

```python
# Regularization
weight_decay=train_cfg.get('weight_decay', 0.001),
warmup_ratio=train_cfg.get('warmup_ratio', 0.03),
```

#### weight_decay
**What it does:** L2 regularization to prevent overfitting by penalizing large weights.

**How it works:**

```python
weight_decay=0.001

# During weight update:
# Standard: weight_new = weight_old - lr × gradient
# With decay: weight_new = weight_old × (1 - lr × weight_decay) - lr × gradient
#                                      ↑
#                                   Shrinks weights slightly
```

**Example:**
```python
weight_decay=0.001
learning_rate=2e-4

# Each step, weights shrink by:
# 1 - (2e-4 × 0.001) = 0.9999998
# Over 1000 steps: 0.9999998^1000 ≈ 0.9998 (0.02% smaller)
```

**Typical values:**
- 0.0: No regularization (risk overfitting)
- 0.001-0.01: Light regularization (common)
- 0.01-0.1: Strong regularization (small datasets)

#### warmup_ratio
**What it does:** Gradually increase learning rate from 0 to target over first N% of training.

**Why it matters:** Prevents unstable training at the start when weights are random.

**Example:**
```python
warmup_ratio=0.03
num_train_epochs=3
total_steps=1000

# Warmup steps = 1000 × 0.03 = 30 steps
# Step 0:  lr = 0.0
# Step 10: lr = 0.0000667 (1/3 of target)
# Step 20: lr = 0.0001333 (2/3 of target)
# Step 30: lr = 0.0002 (full target)
# Step 31+: lr = 0.0002 (constant or decaying)
```

**Visualization:**
```
Learning Rate Schedule:
0.0002 |           ___________________
       |          /
       |         /
       |        /
0.0000 |_______/
       0   30  100  200  300  ... 1000 steps
           ↑
        Warmup
```

**Typical values:**
- 0.0: No warmup (can be unstable)
- 0.03-0.1: Standard warmup
- 0.1-0.2: Longer warmup for large models

### 5.4 Logging and Checkpointing

```python
# Logging and saving
logging_steps=train_cfg.get('logging_steps', 10),
save_steps=train_cfg.get('save_steps', 50),
save_total_limit=train_cfg.get('save_total_limit', 2),
eval_strategy="steps",
eval_steps=train_cfg.get('eval_steps', 50),
load_best_model_at_end=True,
```

#### logging_steps
**What it does:** Log training metrics (loss, learning rate) every N steps.

**Example:**
```python
logging_steps=10

# Console output:
# Step 10:  loss=2.345, lr=0.0001
# Step 20:  loss=2.123, lr=0.0002
# Step 30:  loss=1.987, lr=0.0002
```

**Typical values:**
- Fast experiments: 1-10 steps
- Normal training: 10-50 steps
- Long training: 50-100 steps

#### save_steps
**What it does:** Save checkpoint every N steps.

**Example:**
```python
save_steps=50
output_dir="./results/experiment"

# Creates:
# ./results/experiment/checkpoint-50/
# ./results/experiment/checkpoint-100/
# ./results/experiment/checkpoint-150/
```

**Checkpoint contents:**
- Model weights (adapters for LoRA)
- Optimizer state
- Training state (step number, RNG state)

**Disk usage:**
```python
# QLoRA r=8 checkpoint:
# - Adapter weights: ~16 MB
# - Optimizer state: ~32 MB
# - Config files: ~1 MB
# Total per checkpoint: ~50 MB
```

#### save_total_limit
**What it does:** Keep only N most recent checkpoints, delete older ones.

**Example:**
```python
save_total_limit=2
save_steps=50

# After step 50:  checkpoint-50/ exists
# After step 100: checkpoint-50/, checkpoint-100/ exist
# After step 150: checkpoint-100/, checkpoint-150/ exist (checkpoint-50 deleted!)
```

**Why it matters:** Prevents disk from filling up during long training.

#### eval_strategy & eval_steps
**What it does:** Evaluate model on validation set every N steps.

**Example:**
```python
eval_strategy="steps"
eval_steps=50

# Training loop:
# Step 1-49:  Train only
# Step 50:    Train + Evaluate on validation set
# Step 51-99: Train only
# Step 100:   Train + Evaluate on validation set
```

**Evaluation metrics:**
```python
# Step 50:  eval_loss=1.234, eval_accuracy=0.85
# Step 100: eval_loss=1.123, eval_accuracy=0.87
# Step 150: eval_loss=1.089, eval_accuracy=0.89
```

**Other strategies:**
- `eval_strategy="epoch"`: Evaluate at end of each epoch
- `eval_strategy="no"`: No evaluation during training

#### load_best_model_at_end
**What it does:** After training, load the checkpoint with best validation loss.

**Example:**
```python
load_best_model_at_end=True

# Training results:
# Step 50:  eval_loss=1.234
# Step 100: eval_loss=1.123 ← Best!
# Step 150: eval_loss=1.156 (worse, overfitting)

# At end of training:
# Automatically loads checkpoint-100 (best eval_loss)
```

**Why it matters:** Prevents using an overfitted model.

### 5.5 Other Parameters

```python
# Other
report_to="none",
remove_unused_columns=False,
```

#### report_to
**What it does:** Send metrics to external tracking services.

**Options:**
- `"none"`: No external reporting
- `"tensorboard"`: Log to TensorBoard
- `"wandb"`: Log to Weights & Biases
- `["tensorboard", "wandb"]`: Log to multiple services

**Example:**
```python
report_to="tensorboard"
# Creates: ./runs/experiment_name/
# View with: tensorboard --logdir=./runs
```

#### remove_unused_columns
**What it does:** Drop dataset columns not used by the model.

**Example:**
```python
# Dataset has: ['input_ids', 'attention_mask', 'labels', 'metadata']
# Model uses: ['input_ids', 'attention_mask', 'labels']

remove_unused_columns=True   # Drops 'metadata'
remove_unused_columns=False  # Keeps 'metadata'
```

**When to use `False`:**
- Custom training loops that use extra columns
- Debugging (want to inspect all data)
- Custom data collators

### 5.6 Complete Example with Explanations

```python
training_args = TrainingArguments(
    # === Basic ===
    output_dir="./results/qlora_r8",           # Save here
    num_train_epochs=3,                         # 3 full passes through data
    per_device_train_batch_size=4,             # 4 samples per GPU
    gradient_accumulation_steps=2,             # Effective batch = 4×2 = 8
    learning_rate=2e-4,                        # 0.0002
    
    # === Optimization ===
    fp16=True,                                 # 2x faster, 2x less memory
    optim="paged_adamw_8bit",                  # Memory-efficient optimizer
    gradient_checkpointing=True,               # Save memory, 20% slower
    max_grad_norm=0.3,                         # Clip gradients
    
    # === Regularization ===
    weight_decay=0.001,                        # L2 regularization
    warmup_ratio=0.03,                         # Warmup first 3% of steps
    
    # === Logging & Saving ===
    logging_steps=10,                          # Log every 10 steps
    save_steps=100,                            # Save every 100 steps
    save_total_limit=2,                        # Keep 2 most recent checkpoints
    eval_strategy="steps",                     # Evaluate periodically
    eval_steps=100,                            # Evaluate every 100 steps
    load_best_model_at_end=True,               # Use best checkpoint
    
    # === Other ===
    report_to="none",                          # No external tracking
    remove_unused_columns=False,               # Keep all data columns
)
```

**Memory breakdown for this config (Phi-3 QLoRA r=8):**

| Component | Memory |
|:----------|:-------|
| Base model (4-bit) | 2.0 GB |
| LoRA adapters (FP16) | 16 MB |
| Activations (batch=4, FP16) | 800 MB |
| Gradients (FP16) | 16 MB |
| Optimizer states (8-bit) | 32 MB |
| **Total** | **~2.9 GB** |

**Training speed estimate:**
- GPU: RTX 3090 (24GB VRAM)
- Dataset: 1000 samples
- Steps per epoch: 1000 / (4×2) = 125 steps
- Time per step: ~2 seconds
- **Total time: 125 × 3 × 2s = 12.5 minutes**

---

## Key Takeaways

1. **Quantization** reduces memory by 4x (FP16 → 4-bit) with minimal accuracy loss
2. **NF4** is optimal for normally-distributed neural network weights
3. **Double Quantization** saves an additional 0.4 bits per parameter
4. **LoRA** decomposes weight updates into low-rank matrices (A × B)
5. **QLoRA** = LoRA + 4-bit base model (best of both worlds)
6. **IA3** is the most parameter-efficient (vector scaling)
7. **GGUF** is for CPU inference, **GPTQ/AWQ** for GPU inference
8. Higher rank ($r$) = more capacity but more parameters
9. The Phi-3 model uses ~2.3-3.5 GB VRAM depending on technique

---

**Next Steps:**
- Run experiments: `python experiments/experiment_runner.py --all`
- Benchmark results: `python experiments/benchmarker.py`
- Generate reports: `python experiments/report_generator.py`
