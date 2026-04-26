// Cerebras Systems - ML Research Engineer (Inference), Bengaluru
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_cerebras_ml_inference = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "ML Research Engineer | LLM Inference Optimization - PyTorch - Generative AI Research",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "ML Research Engineer with deep expertise in LLM inference optimization, transformer architecture internals, and production-grade inference serving. Hands-on with speculative decoding, quantization (QLoRA/INT4/FP8), model pruning/compression, and vLLM/SGLang benchmarking for latency and throughput SLOs. Built DeepSeek-V3 with MoE sparse routing and reproduced transformer architecture from scratch (self-attention, KV caching, positional encoding) - demonstrating the model-level depth required to adapt and optimize models on novel accelerator architectures like Cerebras. Experienced running ML experiments, profiling inference performance (PyTorch profiler, Locust), and implementing post-training optimization techniques.",
    skills: [
        { category: "Inference & Optimization", items: ["Speculative Decoding", "vLLM", "SGLang", "Quantization", "QLoRA (4-bit)", "INT4/FP8", "Pruning", "Model Compression", "KV Caching", "Continuous Batching", "PEFT", "Post-Training"] },
        { category: "Model Architectures", items: ["Transformers", "LLMs", "MoE (Sparse Routing)", "Sparse Attention", "Self-Attention", "MLA Attention", "KV Caching", "LLaMA-3", "GPT-4", "DeepSeek-V3", "LayoutLM", "Vision Transformers"] },
        { category: "Profiling & Evaluation", items: ["PyTorch Profiler", "Locust", "TPOT", "Latency/Throughput", "Inference Benchmarking", "Langfuse", "Performance Analysis", "A/B Evaluation", "Accuracy Validation"] },
        { category: "ML Frameworks & Tools", items: ["PyTorch", "HuggingFace Transformers", "TensorRT", "NVIDIA Triton", "ONNX", "CUDA", "HIP/ROCm", "DSPy", "RLHF", "Fine-Tuning", "Scikit-learn"] },
        { category: "Languages & Systems", items: ["Python", "C++", "Bash", "Linux", "YAML", "SQL", "TypeScript"] },
        { category: "Infrastructure & LLMOps", items: ["Docker", "Kubernetes", "Azure AKS", "CI/CD", "MLOps", "Langflow", "LangChain", "Qdrant", "Langfuse", "FastAPI", "Redis"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "Speculative Decoding & MoE", description: "Reproduced DeepSeek-V3 with MoE sparse routing layers, MLA (multi-head latent attention), and speculative decoding-compatible architecture in PyTorch - demonstrating deep inference optimization and model architecture knowledge." },
            { label: "Inference Profiling & Benchmarking", description: "Benchmarked vLLM vs SGLang inference serving engines under production load (Locust); profiled GPU compute via PyTorch profiler measuring TPOT, throughput, and memory efficiency for Llama 3.2 3B." },
            { label: "Quantization & Model Compression", description: "Applied QLoRA (4-bit/INT4-adjacent) PEFT fine-tuning; studied FP8/INT4 precision trade-offs; deployed compressed models (NVIDIA TAO OCDRNet) for GPU-efficient inference in resource-constrained environments." }
        ]
    },
    experience: [
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**vLLM/SGLang Inference Benchmarking & Optimization:** Benchmarked **vLLM** and **SGLang** inference serving engines under production load (Locust); measured **TPOT, throughput, KV cache utilization**, and memory efficiency for **Llama 3.2 3B** on GPU Linux infrastructure - profiled compute bottlenecks via **PyTorch profiler** achieving **<2s end-to-end latency** with **speculative decoding** awareness baked into architecture design.",
                "**GPU Inference Pipeline Tuning:** Resolved sequential compute bottlenecks across a 3-stage LLM pipeline (summarization, classification, response); applied **post-training optimization** strategies and decode parameter tuning for **Faster Whisper ASR** integration - achieving **100% data privacy** on self-hosted infrastructure.",
                "**Distributed High-Performance Systems:** Built distributed search (Apache Solr, 500K+ docs, BM25 + vector similarity, <200ms latency) and high-speed algorithmic compute engine (Google OR-Tools, **85% speedup** 15s→2s)."
            ],
            isAnchor: true
        },
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Enterprise Multi-Agent RAG System:** Built a Multi-Agent RAG System with **Langflow** orchestration, reducing L1 support tickets by **~30%**. Implemented a detailed intent classifier and optimized **Qdrant** search settings, achieving **fast response times (<5s)** and a **~25% increase in accuracy**.",
                "**Intelligent Document Processing (IDP):** Established a scalable IDP workflow using multi-stage **LLM pipelines** and routing based on document complexity. Achieved **95%+ accuracy** in entity extraction through zero-shot **Prompt Engineering** and automated verification loops.",
                "**Adaptive Data Mining Pipeline:** Created a scalable data mining pipeline utilizing **FP-Growth** and efficient memory usage to process **1.15M+ healthcare records**; established a strict validity framework that increased auto-approval rates to **85%**."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**Model Compression & GPU Inference Deployment:** Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** with **model compression** and preprocessing optimization for GPU-efficient inference in resource-constrained Linux environments - enabling **$4.5k+ operational savings**.",
                "**Post-Training Fine-Tuning & Domain Adaptation:** Fine-tuned **LayoutLM** on domain-specific tabular datasets using **post-training adaptation** techniques; validated inference accuracy across document layout formats."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Python Research Automation:** Developed automated log analysis and KPI pipeline tooling in Python - cutting manual analysis time by **50%** and improving reporting efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**ML Experimentation & Evaluation:** Built and evaluated **9 Time-Series Models** for forecasting; improved accuracy by **20-30%** via CLV analysis, feature engineering, and systematic experiment comparison.",
                "**Statistical Modeling:** Applied anomaly detection and demand pattern algorithms for reliable ML model behavior in production."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Inference Research:** Gained hands-on exposure to advanced ML model development, inference optimization, and production MLOps practices under Amazon expert mentorship."
            ]
        }
    ],
    education: [
        {
            degree: "M.Sc., Decision & Computing Science",
            institution: "Coimbatore Institute of Technology",
            location: "Coimbatore",
            period: "2020 - 2025",
            details: "CGPA: 9.59/10.0 (Five-Year Integrated)"
        }
    ],
    achievements: [
        { label: "Speculative Dec. + MoE Built", company: "DeepSeekV3 Project" },
        { label: "<2s vLLM Inference Latency", company: "CyberTranscend" },
        { label: "95%+ IDP Extraction Accuracy", company: "Improva" },
        { label: "85% Compute Speedup", company: "CyberTranscend" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Built full transformer forward-pass in PyTorch: self-attention, multi-head attention, sparse attention concepts, KV caching, positional encoding, layer norm - foundational GPU compute patterns for inference optimization on novel accelerators." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MoE sparse routing layers, MLA (multi-head latent attention), speculative decoding-compatible architecture, and RL alignment - hands-on with cutting-edge inference research." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit (INT4-adjacent) PEFT fine-tuning of Phi-3 Mini; explored post-training quantization and precision trade-offs relevant to low-latency inference optimization." },
        { name: "Google Photos Clone (Vision AI)", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Vision model pipeline using OpenCV + PyTorch deep learning for facial recognition, achieving >90% accuracy - experience with both NLP and computer vision model evaluation." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "vLLM/SGLang Inference Research - Speculative Decoding & GPU Profiling",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required production LLM inference meeting <2s latency SLOs on self-hosted GPU infrastructure - needed rigorous inference framework evaluation and performance profiling analogous to adapting models for novel accelerator architectures.",
            solution: "· **Inference Framework Benchmarking:** Conducted systematic comparison of **vLLM** vs **SGLang** inference engines - measured **TPOT, throughput, KV cache efficiency**, and GPU memory utilization for **Llama 3.2 3B** under production-scale Locust load testing. Applied **speculative decoding** awareness in architecture selection for optimal decode throughput. · **GPU Profiling & Bottleneck Resolution:** Used **PyTorch profiler** and custom Python scripts to analyze compute hotspots in the 3-stage LLM pipeline (summarization - classification - response generation); resolved sequential bottlenecks to maximize hardware utilization. · **Post-Training Decode Optimization:** Tuned **Faster Whisper ASR** decode parameters and integrated TTS; validated **<2s end-to-end latency** with full benchmarking and **100% data privacy** (self-hosted, zero cloud AI dependency).",
            impact: [
                "**<2s Inference Latency** - validated via vLLM/SGLang benchmarking",
                "**Speculative Decoding** - architecture-aware inference design",
                "**TPOT + Throughput** - profiled under production load (Locust)"
            ],
            techStack: ["Python", "PyTorch", "vLLM", "SGLang", "CUDA", "Linux", "Locust", "Llama-3.2", "Faster Whisper", "HuggingFace"]
        },
        {
            id: "rnd-triton",
            title: "Model Compression & GPU Inference Optimization",
            client: "RNDsoftech",
            role: "AI Engineer Intern",
            period: "Dec 2024 - Mar 2025",
            location: "On-site, Coimbatore",
            problem: "Required efficient GPU inference for Vision AI in a resource-constrained on-premise Linux environment - needed model compression and inference optimization without accuracy degradation.",
            solution: "· Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** with **model compression** and GPU concurrency tuning for maximum inference throughput in constrained GPU environments. · Applied **post-training fine-tuning** of **LayoutLM** on domain-specific datasets; validated accuracy across structured document formats - experience directly relevant to model adaptation on novel hardware.",
            impact: [
                "**$4.5k+ Operational Savings** - model compression + GPU inference optimization",
                "**Post-Training Validated** - accuracy maintained after compression"
            ],
            techStack: ["Python", "PyTorch", "NVIDIA TAO", "Triton Inference Server", "CUDA", "LayoutLM", "Linux"]
        },
        {
            id: "improva-rag",
            title: "Enterprise Multi-Agent RAG System",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "The organization had no intelligent chatbot system for website visitors. Potential leads were struggling to get answers, resulting in friction, delayed responses, and frequent manual escalation to the marketing and support teams.",
            solution: "· Deployed a resilient **multi-agent RAG chatbot** to automate visitor engagement, reducing L1 tickets by ~30% by designing a **detailed intent classifier** with **routing based on confidence** across 8 specialized agents (sales, support, clarification, feedback). · Optimized **Qdrant** search settings to resolve speed issues, achieving fast response times (<5s) without compromising accuracy. · Implemented **hybrid search** (keyword + meaning) with **dynamic database selection**, re-ranking, and relevance scoring, improving answer accuracy by ~25%. · Crafted structured prompt templates (**50 to 120 tokens/agent**) with model tuning, source citation extraction, and controlled context windows. · Built automated **knowledge base pipeline** processing 500+ healthcare documents with bi-weekly sync and freshness monitoring. · Implemented full monitoring using **Langfuse**, CI/CD, and blue-green deployments; achieved **99.5% uptime SLA**.",
            impact: [
                "**~30% Reduction** in L1 support tickets",
                "**<5s Response Time** - fast inference across 8 agents",
                "**~25% Accuracy Improvement** - hybrid search + routing optimization",
                "**99.5% Uptime SLA** - blue-green CI/CD"
            ],
            techStack: ["Python", "Langflow", "LangChain", "Qdrant", "DSPy", "Langfuse", "Azure"]
        },
        {
            id: "improva-idp",
            title: "Intelligent Document Processing - Multi-Stage LLM Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual extraction of healthcare provider rosters from complex documents was slow (40+ hrs/week), error-prone, and costly, with inconsistent data quality across diverse document formats.",
            solution: "· Built an enterprise-ready **Intelligent Document Processing system** leveraging multi-stage **LLM pipelines** with routing based on complexity (table density analysis, row/column rules) and **Retrieval-Augmented Generation** for long documents. · Implemented zero-shot **Prompt Engineering** with LLMs using thinking budgets and robust post-processing validation for consistent entity extraction.",
            impact: [
                "**95%+ Accuracy** across 8 structured fields",
                "**85% Reduction** in manual effort (40+ hrs/week saved)"
            ],
            techStack: ["Python", "GPT-4", "Claude", "RAG", "LLM Pipelines"]
        },
        {
            id: "improva-arm",
            title: "Large-Scale ML Pipeline - Experiment Design & Automated Validation",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings needed ML experimentation and automated validation pipelines at production scale.",
            solution: "· Built adaptive **FP-Growth ML pipeline** with memory-efficient parallel processing and automated statistical validation across 1.15M+ records. · Integrated **LLM-Web Search Agent** with confidence-based routing for autonomous long-tail resolution.",
            impact: [
                "**75-85% Auto-Validation** rate (up from 58%)",
                "**50-60% Workload Reduction** for manual reviews"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "research-search",
            title: "Distributed High-Throughput System - Latency & Performance Optimization",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required distributed search with <200ms query latency at scale - demanded performance-oriented system design and algorithmic optimization.",
            solution: "· Designed **distributed search** with **Apache Solr** (500K+ docs) and novel **Mixed Ranking** (BM25 + vector similarity) for heterogeneous retrieval. · Built real-time data pipeline and **Context-Aware Re-ranking** with latency-aware scoring.",
            impact: [
                "**<200ms Query Latency** at high simulated traffic",
                "**40% Improvement** for ambiguous query resolution"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL", "Python"]
        }
    ],
    leadership: [
        { role: "Campus Mandri & Treasurer", org: "GeeksforGeeks CIT", period: "2020-21" },
        { role: "AI for Assistive Tech", org: "DeepVision.AI", period: "2021" },
        { role: "Mentorship", org: "Tekie", period: "2021", desc: "Mentored 50+ kids in coding" }
    ],
    openSource: [
        { project: "Google Photos Clone", role: "Developer", desc: "Implemented facial recognition", link: "https://github.com/Dharssini/GooglePhotosClone" }
    ]
};
