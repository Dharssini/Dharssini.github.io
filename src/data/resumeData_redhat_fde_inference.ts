// Red Hat - Forward Deployed Engineer, AI Inference (vLLM and Kubernetes)
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_redhat_fde_inference = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "Applied AI Engineer | vLLM - Kubernetes - Distributed LLM Inference",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Applied AI Engineer with deep expertise in deploying and optimizing distributed LLM inference systems using vLLM and SGLang on GPU-backed Kubernetes infrastructure. Proven experience benchmarking inference engines for throughput and latency SLOs, tuning serving parameters, and deploying production-grade AI workloads on Azure AKS with Kubernetes. Solid understanding of LLM internals - KV caching, prefill/decode disaggregation, speculative decoding, continuous batching, and transformer forward-pass behavior. Hands-on with NVIDIA Triton Inference Server, PyTorch GPU profiling, Helm, Terraform, and infrastructure-as-code tooling. Passionate about solving last-mile inference infrastructure challenges at production scale.",
    skills: [
        { category: "LLM Inference & Serving", items: ["vLLM", "SGLang", "Triton Server", "TensorRT", "KV Caching", "Prefill/Decode Disaggregation", "Speculative Decoding", "Continuous Batching", "Inference Routing", "Quantization", "ONNX", "TPOT Optimization", "Throughput Tuning"] },
        { category: "Kubernetes & Infrastructure", items: ["Kubernetes", "Azure AKS", "Docker", "Helm", "Terraform", "Ansible", "CI/CD", "Blue-Green Deploys", "Microservices", "YAML", "Model Serving"] },
        { category: "GPU & Systems", items: ["CUDA", "PyTorch", "GPU Profiling", "NVIDIA TAO", "Deep Learning", "Distributed Systems", "Algorithm Design", "C++", "Embedded Systems"] },
        { category: "AI & LLMs", items: ["LLaMA-3", "GPT-4", "Transformers", "Self-Attention", "RAG", "LangGraph", "LangChain", "Langflow", "DSPy", "PEFT", "QLoRA", "Fine-Tuning", "RLHF"] },
        { category: "Languages", items: ["Python", "C++", "Bash", "YAML", "SQL", "TypeScript"] },
        { category: "Observability & Data", items: ["Langfuse", "Locust", "Vector DBs", "Qdrant", "Redis", "Apache Solr", "Pandas", "NumPy", "FastAPI", "Event-Driven"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "vLLM Production Serving", description: "Benchmarked vLLM vs SGLang inference engines under production load (Locust); deployed Llama 3.2 3B on self-hosted Azure GPU achieving <2s end-to-end latency with full GPU utilization profiling." },
            { label: "Kubernetes Deployments", description: "Deployed production AI workloads on Azure AKS using blue-green CI/CD pipelines with Docker and Kubernetes orchestration, achieving 99.5% uptime SLA." },
            { label: "LLM Internals Depth", description: "Built transformer architecture from scratch (self-attention, KV caching, positional encoding) and reproduced DeepSeek-V3 with MoE layers and MLA attention - demonstrating deep understanding of forward-pass behavior and inference bottlenecks." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Production AI Inference on Kubernetes:** Deployed multi-agent LLM inference platform on **Azure AKS** with blue-green **Kubernetes** rollouts, **Qdrant** vector search with HNSW parameter tuning, and **Langflow** orchestration - achieving **<5s response latency** and **99.5% uptime SLA** across 50+ daily conversations.",
                "**Inference Routing & Parameter Tuning:** Configured **confidence-based routing policies** (70/50/30% thresholds) across 8 inference agents with structured **prompt templates (50-120 tokens)** and context window control - achieving **~25% accuracy improvement** through systematic benchmarking and optimization.",
                "**LLM Pipeline Engineering & Observability:** Built automated **knowledge base pipeline** with bi-weekly sync, freshness monitoring, and **Langfuse** observability for full inference lifecycle tracking - model management, prompt versioning, and performance metrics."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**vLLM Deployment & GPU Optimization:** Benchmarked **vLLM** and **SGLang** inference serving engines under production load via Locust; deployed **Llama 3.2 3B** on self-hosted **Azure GPU** infrastructure - used **PyTorch profiler** and custom bottleneck scripts to maximize GPU utilization and achieve **<2s end-to-end latency** with **100% data privacy**.",
                "**Distributed Search Infrastructure:** Engineered a **distributed architecture** with **Apache Solr** indexing 500K+ documents, novel **Mixed Ranking** (BM25 + vector similarity), and real-time data ingestion - achieving <200ms query latency at simulated high traffic.",
                "**Algorithmic Systems Optimization:** Built high-speed route planner using **Google OR-Tools** with distributed caching - reducing computation time by **85%** (15s to 2s) and fleet costs by **15%**."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**NVIDIA Triton Inference Server Deployment:** Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** for GPU-accelerated document OCR; applied model compression and image preprocessing to optimize inference throughput in resource-constrained environments - enabling **$4.5k+ operational savings**.",
                "**Model Fine-Tuning & Domain Adaptation:** Fine-tuned **LayoutLM** on domain-specific tabular datasets, extending text-layout understanding capabilities for structured document parsing."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Automation & Pipeline Engineering:** Developed **Python-based** tooling for automated log processing and KPI calculation pipelines - reducing manual analysis time by **50%** and reporting efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Predictive ML Systems:** Built and evaluated **9 Time-Series Models** for sales forecasting; improved accuracy by **20-30%** using CLV analysis, pattern-matching algorithms, and feature engineering for irregular demand patterns.",
                "**Statistical Modeling:** Applied advanced algorithms for anomaly and demand pattern handling, improving model reliability and inventory optimization."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Training:** Gained hands-on experience in advanced **machine learning techniques**, production model development, and industry-scale MLOps practices under Amazon expert mentorship."
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
        { label: "<2s vLLM Inference Latency", company: "CyberTranscend" },
        { label: "99.5% K8s Uptime SLA", company: "Improva" },
        { label: "$4.5k+ Savings via Triton", company: "RNDsoftech" },
        { label: "85% Compute Speedup", company: "CyberTranscend" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Built full transformer - self-attention, KV caching, prefill/decode disaggregation behavior, positional encoding, continuous batching logic - in PyTorch from scratch." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MoE layers, MLA attention, and speculative decoding-compatible architecture; demonstrates deep knowledge of advanced inference optimization techniques." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit quantization fine-tuning on Phi-3 Mini; explored quantization (AWQ-adjacent) trade-offs and parameter-efficient optimization." },
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Deep learning facial recognition pipeline using OpenCV and PyTorch achieving >90% accuracy on standard benchmarks." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "vLLM Production Deployment & GPU Inference Optimization",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required a privacy-first LLM inference system with <2s end-to-end voice latency without cloud vendor AI dependencies - analogous to on-premise enterprise LLM serving requirements.",
            solution: "· **vLLM Benchmarking & Selection:** Conducted rigorous production benchmarking (Locust) across **vLLM** and **SGLang** inference serving engines, measuring TPOT, throughput, and memory efficiency for **Llama 3.2 3B** on self-hosted **Azure GPU** infrastructure. · **GPU Utilization Optimization:** Used **PyTorch profiler** and custom bottleneck discovery scripts to identify and resolve computation hotspots in the 3-stage sequential inference pipeline (Summarization - Classification - Response), maximizing GPU utilization across serving layers. · **Inference Pipeline Tuning:** Integrated **Faster Whisper** ASR with optimized decode parameters; achieved stable **<2s end-to-end latency** with **100% data privacy** (zero external cloud AI dependencies).",
            impact: [
                "**<2s End-to-End Latency** - vLLM serving + ASR + TTS pipeline",
                "**100% Data Privacy** - fully self-hosted GPU inference infrastructure",
                "**GPU Profiling** - custom bottleneck discovery maximizing utilization"
            ],
            techStack: ["Python", "vLLM", "SGLang", "PyTorch", "Llama-3.2", "Faster Whisper", "Locust", "Azure GPU"]
        },
        {
            id: "improva-rag",
            title: "LLM Inference Platform on Kubernetes (Azure AKS)",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Required a scalable, production-grade LLM inference platform deployable on Kubernetes with low-latency routing, high availability, and full observability for a customer-facing healthcare workload.",
            solution: "· **Inference Routing & Optimization:** Implemented **confidence-based routing policies** (70/50/30% thresholds) across 8 specialized inference agents with **Qdrant** HNSW vector search tuning and **hybrid retrieval** (keyword + semantic re-ranking) - achieving **<5s response time** and **~25% accuracy improvement**. · **Observability & Model Management:** Full monitoring stack with **Langfuse**, prompt versioning, knowledge pipeline freshness tracking, and performance metrics; blue-green **Kubernetes** CI/CD on **Azure AKS** achieving 99.5% uptime SLA.",
            impact: [
                "**99.5% Uptime SLA** - Kubernetes blue-green CI/CD",
                "**<5s Response Latency** - inference routing + vector retrieval",
                "**~25% Accuracy Improvement** - routing policy + hybrid retrieval tuning",
                "**~30% Reduction** in L1 support tickets"
            ],
            techStack: ["Python", "Kubernetes", "Azure AKS", "Docker", "Langflow", "Qdrant", "Langfuse", "CI/CD"]
        },
        {
            id: "rnd-triton",
            title: "NVIDIA Triton Inference Server - GPU Model Serving",
            client: "RNDsoftech",
            role: "AI Engineer Intern",
            period: "Dec 2024 - Mar 2025",
            location: "On-site, Coimbatore",
            problem: "Manual document reading was slow and error-prone in a resource-constrained on-premise GPU environment - needed high-throughput automated inference without cloud dependency.",
            solution: "· Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** - configured model repository, optimized model concurrency settings, and applied image preprocessing to maximize inference throughput in constrained GPU environments. · Fine-tuned **LayoutLM** on domain-specific datasets for structured document layout understanding, extending model applicability to tabular formats.",
            impact: [
                "**$4.5k+ Operational Savings** via automated GPU inference",
                "**Reduced Latency** - Triton concurrency and model config tuning"
            ],
            techStack: ["Python", "NVIDIA TAO", "Triton Inference Server", "LayoutLM", "CUDA", "OCDRNet"]
        },
        {
            id: "improva-arm",
            title: "Large-Scale Data Pipeline & Automated ML Validation",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low auto-approval (58%) and high manual review load at scale.",
            solution: "· Built a high-performance **ML data pipeline** with adaptive **FP-Growth** algorithm selection, efficient memory management, and automated validation triggers. · Developed **Triple-Frequency Validation Framework** combining domain patterns, location clustering, and facility features validated by statistical tests. · Integrated **LLM-Web Search Agent** for autonomous long-tail resolution with **confidence-based routing**.",
            impact: [
                "**75-85% Auto-Approval** rate (up from 58%)",
                "**50-60% Workload Reduction** for manual reviews"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "research-search",
            title: "Distributed Search Platform - High-Throughput Retrieval",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Needed a distributed search system capable of indexing 500K+ documents with <200ms query latency at high traffic, solving cold-start and ambiguous query challenges at scale.",
            solution: "· Designed a **distributed search architecture** with **Apache Solr** indexing 500K+ documents, developing a novel **Mixed Ranking Method** combining BM25 with **vector similarity** for heterogeneous retrieval at scale. · Built real-time data ingestion pipeline and prototyped **Context-Aware Re-ranking** with time-based adjustments.",
            impact: [
                "**40% Improvement** for unclear/ambiguous queries",
                "**<200ms Query Latency** at high traffic (simulated)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL"]
        },
        {
            id: "cyber-logistics",
            title: "Scalable Distributed Compute Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "High-volume routing computations under tight latency constraints with distributed compute dependencies and caching requirements.",
            solution: "· Constructed a **high-speed distributed compute engine** using **Google OR-Tools** and local search heuristics for Vehicle Routing Problems - built multi-provider fallback and **distributed local caching** for map calculations. · Developed predictive service time model with 5+ features (weight, volume, density, fragility) for latency-aware scheduling.",
            impact: [
                "**85% Computation Speedup** (15s to 2s) - caching + algorithm optimization",
                "**15% Cost Reduction** in fleet operations"
            ],
            techStack: ["Python", "Google OR-Tools", "OSRM", "NumPy", "Pandas"]
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
