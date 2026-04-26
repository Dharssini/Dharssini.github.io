// AMD - Software R&D Engineer, GPGPU Kernel Development (Hyderabad)
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_amd_gpgpu_kernel = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Systems Engineer | GPU Computing - C++/Python - PyTorch/vLLM/SGLang - Kernel-Level Optimization",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "AI Systems Engineer with deep expertise in GPU-accelerated ML framework optimization, inference benchmarking, and model architecture internals. Hands-on experience profiling and optimizing GPU workloads using PyTorch profiler, vLLM, and SGLang on CUDA-enabled hardware - identifying and resolving computational bottlenecks at the inference pipeline level. Strong foundation in C++ and Python, transformer architecture internals (self-attention, KV caching, MoE layers), quantization (QLoRA/4-bit, INT4-adjacent), and parallel compute design. Built DeepSeek-V3 with MoE and reproduced transformer forward-pass from scratch - demonstrating the low-level GPU compute understanding required for kernel-level AI acceleration.",
    skills: [
        { category: "GPU Computing & Kernels", items: ["CUDA", "HIP", "ROCm", "OpenCL", "ROCm PyTorch", "C++17/C++20", "rocm-smi", "GPU Profiling", "Parallel Computing", "Performance Benchmarking", "Quantization"] },
        { category: "ML Frameworks & Inference", items: ["PyTorch", "vLLM", "SGLang", "TensorRT", "NVIDIA Triton", "ONNX Runtime", "TFLite", "Langfuse", "Locust", "PEFT", "QLoRA"] },
        { category: "Model Architectures", items: ["Transformers", "LLMs", "MoE (Mixture of Experts)", "Self-Attention", "KV Caching", "Multi-Head Latent Attention", "Diffusion-Adjacent", "LLaMA-3", "GPT-4", "DeepSeek-V3", "LayoutLM"] },
        { category: "Quantization & Precision", items: ["QLoRA (4-bit)", "INT4-adjacent", "FP8-adjacent", "Fixed-Point", "MXFP4-aware", "Model Compression", "ONNX", "Post-Training Quantization"] },
        { category: "Languages & Systems", items: ["C++", "Python", "Bash", "YAML", "Linux", "SQL", "TypeScript", "Embedded Systems"] },
        { category: "Infrastructure & DevOps", items: ["Docker", "Kubernetes", "Azure AKS", "CI/CD", "MLOps", "Helm", "Terraform", "Ansible", "Distributed Systems", "FastAPI"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "GPU Inference Profiling", description: "Used PyTorch profiler and custom C++/Python bottleneck scripts to analyze GPU compute hotspots in LLM inference pipelines; benchmarked vLLM vs SGLang for throughput, TPOT, and memory efficiency on CUDA GPU hardware." },
            { label: "LLM/MoE Architecture Internals", description: "Reproduced DeepSeek-V3 (MoE layers, MLA multi-head latent attention, RL alignment) and built transformer from scratch (self-attention, KV caching, multi-head attention) - deep understanding of GPU compute patterns within model forward-pass." },
            { label: "Quantization & Compression", description: "Applied QLoRA (4-bit quantization) and fixed-point model compression for fine-tuning; studied INT4/FP8 precision trade-offs relevant to MXFP4/FP8 low-precision kernel optimization." }
        ]
    },
    experience: [
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**GPU Inference Framework Benchmarking (vLLM/SGLang):** Conducted systematic performance profiling of **vLLM** and **SGLang** ML inference frameworks on **CUDA GPU** hardware via Locust load testing - measuring TPOT, throughput, memory efficiency, and GPU utilization for **Llama 3.2 3B**; used **PyTorch profiler** and custom **C++/Python** bottleneck scripts to identify compute hotspots in the inference pipeline.",
                "**GPU Pipeline Optimization:** Resolved sequential compute bottlenecks in a 3-stage LLM inference pipeline (summarization - classification - response generation) by analyzing GPU utilization profiles and restructuring execution to maximize hardware throughput - achieving **<2s end-to-end latency** with **100% data privacy**.",
                "**Distributed High-Performance Systems:** Engineered distributed compute systems: Apache Solr (500K+ docs, <200ms latency) and a Google OR-Tools route planner with distributed caching achieving **85% computation speedup** (15s to 2s)."
            ],
            isAnchor: true
        },
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**LLM Inference Optimization & Benchmarking:** Tuned **Qdrant** HNSW vector search parameters and implemented **hybrid retrieval** (keyword + semantic re-ranking) with confidence-based routing (70/50/30% thresholds) across 8 LLM inference agents - achieving **~25% accuracy improvement** and **<5s response latency** through systematic parameter benchmarking.",
                "**Parallel ML Pipeline at Scale:** Built high-performance **Python/C++** data processing pipeline with adaptive **FP-Growth** algorithm executing parallel pattern extraction across **1.15M+ healthcare records** - increasing auto-approval rates to **85%** and reducing workload by **50-60%**.",
                "**Production Deployment & Observability:** Deployed LLM inference platform on **Kubernetes (Azure AKS)** with blue-green **CI/CD** and **Langfuse** observability for full inference lifecycle monitoring, achieving **99.5% uptime SLA**."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**GPU Model Deployment & Inference Optimization:** Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** (CUDA GPU); tuned model concurrency settings and applied preprocessing to maximize GPU inference throughput in resource-constrained Linux environments - enabling **$4.5k+ operational savings**.",
                "**Model Fine-Tuning & Compression:** Fine-tuned **LayoutLM** on domain-specific datasets; applied model compression for inference efficiency, validating performance across structured document processing workloads."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Automation & Performance Tooling:** Developed **Python/C++** automated tooling for log processing and KPI pipeline automation - cutting manual analysis time by **50%** and improving reporting efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Computational ML Pipelines:** Built and evaluated **9 Time-Series Models** for sales forecasting; improved accuracy by **20-30%** via CLV analysis and feature engineering in Python.",
                "**Statistical Computing:** Applied advanced statistical algorithms for anomaly and demand pattern handling, optimizing model reliability."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML & Systems:** Gained hands-on experience in advanced ML techniques, GPU-accelerated model development, and industry-standard MLOps under Amazon expert mentorship."
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
        { label: "<2s GPU Inference Latency", company: "CyberTranscend" },
        { label: "MoE + MLA Architecture Built", company: "DeepSeekV3 Project" },
        { label: "85% Compute Speedup", company: "CyberTranscend" },
        { label: "$4.5k+ via GPU Optimization", company: "RNDsoftech" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Implemented complete transformer forward-pass in PyTorch: self-attention, multi-head attention, KV caching, positional encoding, layer norm - GPU compute pattern fundamentals for kernel optimization." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MoE routing layers, MLA (multi-head latent attention), and RL alignment in PyTorch - hands-on with advanced LLM inference compute patterns and MoE parallelism." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit (INT4-adjacent) PEFT fine-tuning of Phi-3 Mini; studied low-precision quantization trade-offs relevant to MXFP4/FP8 kernel optimization for AMD GPUs." },
        { name: "Google Photos Clone (Vision AI)", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "GPU-accelerated Vision AI pipeline using OpenCV + PyTorch achieving >90% accuracy on facial recognition benchmarks." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "GPU Inference Framework Profiling - vLLM & SGLang Benchmarking",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required production-grade LLM inference with <2s latency on self-hosted GPU Linux infrastructure - needed systematic framework benchmarking and GPU profiling to meet performance SLOs.",
            solution: "· **vLLM/SGLang Framework Benchmarking:** Conducted systematic performance profiling of **vLLM** and **SGLang** inference frameworks on **CUDA GPU** hardware using Locust; measured TPOT, throughput, memory efficiency, and GPU utilization for **Llama 3.2 3B** at scale. · **PyTorch Profiler + C++/Python Bottleneck Analysis:** Used **PyTorch profiler** and custom scripts to identify GPU compute hotspots in the 3-stage sequential pipeline (summarization - classification - response); resolved execution bottlenecks to maximize hardware utilization. · **ASR/TTS Integration & Validation:** Integrated **Faster Whisper** ASR; validated **<2s end-to-end latency** SLO with benchmarking to confirm GPU throughput targets.",
            impact: [
                "**<2s GPU Latency** - validated via systematic framework benchmarking",
                "**GPU Profiled** - PyTorch profiler + custom C++/Python bottleneck scripts",
                "**vLLM vs SGLang** - comparative framework performance analysis"
            ],
            techStack: ["Python", "C++", "PyTorch", "vLLM", "SGLang", "CUDA", "Linux", "Locust", "Llama-3.2", "Faster Whisper"]
        },
        {
            id: "rnd-triton",
            title: "NVIDIA Triton Inference Server - GPU Kernel Deployment & Tuning",
            client: "RNDsoftech",
            role: "AI Engineer Intern",
            period: "Dec 2024 - Mar 2025",
            location: "On-site, Coimbatore",
            problem: "Required GPU-accelerated inference for Vision AI workloads in an on-premise Linux environment - needed GPU concurrency tuning and model configuration optimization.",
            solution: "· Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** on CUDA GPU hardware in a Linux environment - configured model repository, GPU concurrency settings, and memory management for maximum throughput. · Applied model compression for inference efficiency and fine-tuned **LayoutLM** (Vision-Language model) for domain-specific workloads.",
            impact: [
                "**$4.5k+ Operational Savings** - GPU inference automation",
                "**GPU Concurrency Tuned** - Triton model config and memory optimization"
            ],
            techStack: ["Python", "C++", "Linux", "CUDA", "NVIDIA TAO", "Triton Inference Server", "LayoutLM", "OCDRNet"]
        },
        {
            id: "improva-rag",
            title: "LLM Inference Optimization - Parameter Tuning & Benchmarking",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Multi-agent LLM inference system needed systematic parameter tuning and benchmark-driven optimization to meet latency SLOs with high accuracy across 50+ daily production conversations.",
            solution: "· **Inference Parameter Optimization:** Tuned **Qdrant** HNSW search parameters, quantization settings, and **confidence-based routing** thresholds (70/50/30%) via iterative benchmarking - achieving **<5s response time**. · **Hybrid Retrieval & Re-ranking:** Implemented keyword + semantic re-ranking pipeline with ~25% accuracy improvement validated through systematic A/B benchmarking. · **Production Observability:** Deployed on **Kubernetes** with **Langfuse** for inference lifecycle monitoring and performance tracking.",
            impact: [
                "**~25% Accuracy Improvement** - benchmark-driven parameter optimization",
                "**<5s Response Latency** - SLO validated via systematic inference tuning",
                "**99.5% Uptime SLA** - Kubernetes production deployment"
            ],
            techStack: ["Python", "LangChain", "Qdrant", "Kubernetes", "Docker", "Langfuse"]
        },
        {
            id: "improva-arm",
            title: "High-Performance Parallel ML Pipeline - Large-Scale Computation",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Processing 1.15M+ provider-system mappings required high-performance parallel computation with memory-efficient algorithms and automated validation at scale.",
            solution: "· Built high-throughput **parallel ML pipeline** in Python with adaptive **FP-Growth** algorithm optimized for memory efficiency and compute scalability across 1.15M+ records. · Implemented statistical validation framework combining domain pattern extraction, clustering, and LLM-based autonomous resolution.",
            impact: [
                "**1.15M+ Records** processed with parallel computation",
                "**75-85% Auto-Approval** rate (up from 58%)"
            ],
            techStack: ["Python", "C++", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "research-search",
            title: "Distributed Parallel Compute - High-Throughput Search Architecture",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required distributed parallel computation with <200ms query latency at scale for 500K+ document indexing and retrieval.",
            solution: "· Architected **distributed search system** with **Apache Solr** (500K+ docs), parallel indexed queries, and novel **Mixed Ranking** (BM25 + vector similarity). · Built real-time data ingestion and **Context-Aware Re-ranking** with time-based parallel score adjustments.",
            impact: [
                "**<200ms Latency** at high simulated traffic",
                "**40% Improvement** for ambiguous queries"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL", "Python"]
        },
        {
            id: "cyber-logistics",
            title: "High-Performance Algorithmic Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "High-volume routing computations with tight latency constraints required algorithmic optimization and parallel compute caching strategies.",
            solution: "· Built **high-speed compute engine** using **Google OR-Tools** with local search heuristics and parallel map calculation pipeline with multi-provider fallback and distributed caching.",
            impact: [
                "**85% Compute Speedup** (15s to 2s) - algorithmic + parallel optimization",
                "**15% Cost Reduction** in fleet operations"
            ],
            techStack: ["Python", "C++", "Google OR-Tools", "NumPy", "Linux"]
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
