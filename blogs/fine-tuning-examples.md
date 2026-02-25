# Fine-Tuning Example: Protocol Generation

This document demonstrates the transformation of a model's output before and after fine-tuning on the ProBio dataset using QLoRA.

## 1. The Input (Prompt)
When requesting a protocol, the input is a simple objective or experiment description formatted with instruction tags:

```text
<s>[INST] Generate a detailed, structured laboratory protocol for: PCR amplification of DNA fragment [/INST]
```

---

## 2. Base Model Output (Before Fine-Tuning)
An out-of-the-box base model (like Llama-3-8B) will typically respond to this prompt in a generic, unstructured, conversational tone:

**Example Base Output:**
> "To perform PCR amplification of a DNA fragment, you will need a few things first. Make sure you have your DNA template, primers (forward and reverse), dNTPs, Taq polymerase, and buffer.
> 
> Here is a general guide:
> 1. Mix your reagents in a tube on ice. Usually, you use about 50ul total volume.
> 2. Put the tube in the thermocycler.
> 3. Heat it up to 98 degrees to melt the DNA for a few minutes.
> 4. Then cycle through denaturation, annealing (depends on your primers, maybe 55-60C), and extension at 72C. Repeat this 30 times.
> 5. Finally, hold it at 4C.
>
> Let me know if you need more details about a specific part of the process!"

*What's wrong here?* It lacks strict scientific structure, precise quantities per reagent, definitive timing for each cycling step, and it is impossible to parse programmatically.

---

## 3. Fine-Tuned Model Output (After Fine-Tuning)
After fine-tuning on the ProBio dataset using QLoRA, the model learns the exact structure, tone, and formatting (in this case, JSON format) required for laboratory protocols.

**Example Fine-Tuned Output:**
```json
{
  "title": "PCR Amplification of DNA Fragment",
  "safety_notes": "Wear appropriate PPE. Handle ethidium bromide (if used for downstream visualization) with extreme care.",
  "reagents": [
    "DNA Base Template (1-50 ng)",
    "Forward Primer (10 µM)",
    "Reverse Primer (10 µM)",
    "dNTP Mix (10 mM each)",
    "5X Phusion HF Buffer",
    "Phusion High-Fidelity DNA Polymerase (2 U/µL)",
    "Nuclease-free water"
  ],
  "equipment": [
    "Thermal Cycler",
    "0.2 mL PCR tubes",
    "Calibrated micropipettes and tips",
    "Ice or cold block"
  ],
  "steps": [
    {
      "number": 1,
      "description": "Thaw all reagents on ice. Gently vortex and briefly centrifuge all solutions before use.",
      "reagents": ["All required reagents"],
      "equipment": ["Ice", "Vortex", "Microfuge"],
      "timing": "10 minutes"
    },
    {
      "number": 2,
      "description": "Prepare the master mix in a sterile 0.2 mL PCR tube on ice: 10 µL of 5X HF Buffer, 1 µL of 10 mM dNTPs, 2.5 µL Forward Primer, 2.5 µL Reverse Primer, 1 µL DNA template, 0.5 µL Polymerase, and up to 50 µL Nuclease-free water.",
      "reagents": ["5X HF Buffer", "dNTPs", "Primers", "DNA template", "Polymerase", "Water"],
      "equipment": ["0.2 mL PCR tube", "Micropipettes"],
      "quantity": "50 µL total reaction volume"
    },
    {
      "number": 3,
      "description": "Perform Initial Denaturation in the thermal cycler.",
      "equipment": ["Thermal Cycler"],
      "timing": "30 seconds at 98°C"
    },
    {
      "number": 4,
      "description": "Perform 30 cycles of Denaturation, Annealing, and Extension. Denature at 98°C for 10 sec, Anneal at Tm (e.g., 60°C) for 30 sec, and Extend at 72°C for 30 sec/kb.",
      "equipment": ["Thermal Cycler"],
      "timing": "Approximately 45-60 minutes"
    },
    {
      "number": 5,
      "description": "Perform Final Extension and hold.",
      "equipment": ["Thermal Cycler"],
      "timing": "10 minutes at 72°C, then infinite hold at 4°C"
    }
  ]
}
```

### 🔹 The Change:
1. **Format:** The output changes from conversational markdown text to a strict, programmatic `JSON` schema.
2. **Specificity:** Moving from vague instructions ("about 50ul", "a few minutes") to precise formulation (exact µL quantities, specific thermal cycling temperatures and times).
3. **Structure:** The model completely drops the "helpfulness" chatbot persona and instead segments the response into distinct scientific fields (`reagents`, `equipment`, `safety_notes`, `steps`), making it instantly ready to be displayed in a lab management UI or saved to a database.
