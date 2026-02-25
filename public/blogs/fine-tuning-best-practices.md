# Fine-Tuning LLMs: Best Practices

---

## When to Fine-Tune (and When Not To)

### Don't Fine-Tune For:

**Rare, specific behaviors**  
If you need the model to respond a certain way in edge cases, use prompt engineering. Fine-tuning is overkill.

**Adding new knowledge**  
Fine-tuning doesn't teach models new facts effectively. Use RAG (Retrieval-Augmented Generation) instead. The exception is full parameter fine-tuning at FP16/BF16 precision, but that's closer to re-training and requires massive resources.

**Insufficient data**  
If you have fewer than a few hundred quality examples, reconsider. Quality matters, but you still need volume.

### Do Fine-Tune For:

**Style and tone changes**  
Making the model respond more naturally, conversationally, or in a specific format. When you need consistency in production and can't afford uncertainty.

**Task-specific adaptation**  
Code generation for specific frameworks, document summarization with particular structure, question answering in specialized formats.

**Domain specialization**  
Adapting models to medical, legal, or financial domains. Works best when starting from domain-specific base models like Meditron or PaLM.

**Proprietary or exotic languages**  
Domain-specific programming languages, internal DSLs, or specialized notation systems not well-represented in training data.

---

## Data Preparation: The 80% Rule

The community consensus is clear: spend 80% of your time on data. Not training configuration, not hyperparameter tuning. Data.

### Core Principles

**Patterns over words**  
The model learns behavioral patterns, not memorization. Diversity beats volume every time.

**Quality over quantity**  
More data isn't always better. Every example should serve a purpose. Aggressively remove duplicates.

**Clear structure**  
Every training example needs a clear input, clear output, and optional context. No exceptions.

### What Good Data Looks Like

Include typical cases, edge cases, and everything in between. Your dataset should have comprehensive coverage with balanced representation.

Use larger LLMs to generate synthetic examples and fill gaps. This is called data augmentation and it works.

Pack your datasets. Modern frameworks support this and it significantly improves training throughput.

### Practical Time Breakdown

- Data collection: 20%
- Cleaning and deduplication: 30%
- Formatting and structuring: 20%
- Labeling and validation: 20%
- Augmentation: 10%

---

## Model Selection

### Size Matters, But Not How You Think

You don't need 100B models for most tasks. For real-world applications, 1-13B models are more practical, faster to train, cheaper to deploy, and easier to iterate on.

Moving from 7B to 14B often shows 2x improvement in evaluation scores. Beyond that, you hit diminishing returns for most tasks.

### Starting Points

**General purpose:** Llama-3.1-8B is an excellent baseline.

**Domain-specific:**
- Medical: Meditron, PaLM variants, Gemma2-2B medical models
- Code: Qwen Coder series, CodeLlama
- Financial: FinGPT, BloombergGPT (if accessible)

### Check the License

Always verify licensing before deployment. Some models prohibit commercial use, some require attribution, some restrict derivatives. Read carefully.

---

## LoRA and QLoRA

### The QLoRA Misconception

Don't default to QLoRA for everything. Use it only when the model won't fit in your device memory. QLoRA saves about one-third of memory but adds roughly 39% more training time.

Use standard LoRA when you have sufficient GPU memory and care about training speed.

### Hyperparameters That Matter

**LoRA rank and alpha**  
The traditional rule is `lora_alpha = 2 * lora_rank`, but this is just a starting point. Experiment with other ratios.

For rsLoRA (recommended), use `alpha = sqrt(rank)` to `2 * sqrt(rank)` because rsLoRA scales differently.

Example:
```python
# Traditional LoRA
lora_rank = 16
lora_alpha = 32

# rsLoRA (better)
lora_rank = 16
lora_alpha = 4  # sqrt(16)
```

**Training epochs**  
High epoch counts don't work well with LoRA. Stick to 2 epochs or fewer. Going beyond frequently causes overfitting. This is dataset-dependent, so monitor validation loss carefully.

**Optimizer**  
Use `paged_adamw_8bit` for NVIDIA GPUs. It balances memory and performance well.

Learning rate schedulers are useful with SGD but show diminishing returns with Adam/AdamW.

### LoRA Variants Worth Exploring

The field evolves fast. Test these:
- rsLoRA: Better scaling properties
- LoRA+: Enhanced version
- DoRA: Different decomposition
- AdaLoRA: Adaptive rank allocation
- DyLoRA: Dynamic rank during training

---

## Evaluation: The Most Important Part

Without proper evaluation, you're shooting blind. You can't compare hyperparameters, validate improvements, or justify model selection.

### Time Allocation

- 80% on data preparation
- 15% on evaluation and harnesses
- 5% on training configuration

### Build an Evaluation Harness

Before you train anything, build a comprehensive testing framework. Test the base model first to establish a baseline. Use a separate validation set that's representative of real-world distribution.

### Metrics That Matter

BLEU and ROUGE only tell half the story. They measure n-gram overlap but miss nuance.

Better approaches:
- Task-specific metrics: accuracy, F1, exact match
- LLM-as-judge: use larger models to evaluate outputs
- Human evaluation: gold standard but expensive
- Custom metrics aligned with your use case

Evaluate after each checkpoint. Track metrics over time. Watch for overfitting. Compare against baseline continuously.

---

## Training Configuration

### Memory Management

An 8B model needs about 16GB to load. Use mixed precision (FP16/BF16) to reduce memory. Use quantization (4-bit, 8-bit) for memory-constrained environments.

If you can't increase batch size, use gradient accumulation. Common effective batch sizes are 16, 32, or 128.

```python
per_device_train_batch_size = 4
gradient_accumulation_steps = 8
# Effective batch size = 32
```

### Checkpointing

Save checkpoints regularly. Keep multiple checkpoints, not just the latest. Use `resume_from_checkpoint=True` for recovery. Monitor disk usage.

### Distributed Training

For large-scale training, consider model parallelism (split model across devices) or data parallelism (split data across devices).

Cloud GPU services like vast.ai or RunPod offer cost-effective scaling. A 3B model with 32K sequence length needs minimum 4x RTX 4090, which costs about $1.20/hour on cloud.

### Precision Strategy

**Full fine-tuning** (for domain knowledge):
- FP16 or BF16 precision
- No quantization
- No parameter freezing
- Best quality, highest cost

**Parameter-efficient** (for style/format):
- LoRA/QLoRA
- 4-bit or 8-bit quantization acceptable
- Much lower VRAM requirements

---

## Common Pitfalls

### Overfitting
Training loss decreases but validation loss increases. The model memorizes instead of generalizing.

Fix: Reduce epochs (try 1-2 for LoRA), increase dataset diversity, add regularization, use early stopping.

### Underfitting
Both training and validation loss stay high. The model doesn't learn the task.

Fix: Increase model capacity (higher LoRA rank), train longer, increase learning rate, check data quality.

### Catastrophic Forgetting
The model loses general capabilities and becomes too specialized.

Fix: Mix general instruction data with specialized data, use lower learning rates, shorter training duration, consider LoRA instead of full fine-tuning.

### Slow Training
Training takes much longer than expected.

Causes: QLoRA overhead (39% slower), small batch size (use gradient accumulation), inefficient data loading (enable packing), poor GPU utilization.

### Pruning
Don't prune unless you have significant compute resources and a large cluster to heal the model. It's only worthwhile for production deployment optimization, not general use.

---

## Advanced Techniques

### Custom Loss Functions

Most people overlook this. Standard cross-entropy is just extended pretraining. Custom loss functions enable true task-specific optimization aligned with your evaluation metrics.

### Synthetic Data Generation

Use larger LLMs to create training data. Generate edge cases, create variations, fill dataset gaps, augment existing examples.

Workflow:
1. Identify data gaps
2. Create generation prompts
3. Use GPT-4/Claude to generate examples
4. Human review and filtering
5. Integrate into training set

### Framework Selection

Start with high-level tools like Axolotl, LlamaFactory, or Hugging Face TRL. Over time, move to direct Transformers API or PyTorch implementations for deeper understanding and more control.

---

## Practical Workflow

### Before Training
1. Define the task clearly
2. Determine if fine-tuning is appropriate
3. Select base model
4. Design evaluation strategy
5. Prepare validation set

### Data Phase (80% of time)
1. Collect data
2. Clean and deduplicate
3. Format consistently
4. Label and validate
5. Augment if needed
6. Pack datasets

### Evaluation Phase (15% of time)
1. Build evaluation harness
2. Run baseline tests
3. Define success metrics
4. Document methodology

### Training Phase (5% of time)
1. Configure hyperparameters
2. Start with conservative settings
3. Monitor training closely
4. Save checkpoints regularly
5. Evaluate frequently

### Iteration
1. Compare against baseline
2. Analyze failures
3. Adjust hyperparameters
4. Refine data if needed
5. Repeat until satisfied

---

## Quick Reference Configuration

```yaml
# Model
base_model: "meta-llama/Llama-3.1-8B"

# LoRA
peft_type: "LORA"
lora_r: 16
lora_alpha: 32
lora_dropout: 0.05
target_modules: ["q_proj", "v_proj", "k_proj", "o_proj"]

# Training
num_epochs: 2
learning_rate: 2e-4
per_device_train_batch_size: 4
gradient_accumulation_steps: 8
warmup_steps: 100
lr_scheduler_type: "cosine"

# Optimization
optimizer: "paged_adamw_8bit"
weight_decay: 0.01
max_grad_norm: 1.0

# Memory
bf16: true
gradient_checkpointing: true

# Logging
logging_steps: 10
eval_steps: 100
save_steps: 100
save_total_limit: 3

# Evaluation
evaluation_strategy: "steps"
load_best_model_at_end: true
metric_for_best_model: "eval_loss"
```

---

## Key Takeaways

1. Data is everything. Spend 80% of your time here.
2. Evaluation is critical. You can't improve what you don't measure.
3. Start simple. Use proven configurations, then experiment.
4. QLoRA is not always better. Only use when memory-constrained.
5. Stick to 2 epochs or fewer for LoRA fine-tuning.
6. Smaller models are often sufficient. 1-13B for most tasks.
7. Don't fine-tune for new knowledge. Use RAG instead.
8. Document everything. You'll thank yourself later.
9. Build evaluation harnesses before training, not after.
10. All advice is dataset-dependent. Iterate based on your data.

---

This guide represents collective wisdom from real-world experience, not just theory.

---

## See Also

* [Fine-Tuning Examples](./fine-tuning-examples.md) - Contains before-and-after examples demonstrating the structural and specificity improvements achieved through fine-tuning.
