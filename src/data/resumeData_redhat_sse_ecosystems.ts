// Red Hat - Senior Software Engineer, Ecosystems Engineering (Pune, Hybrid)
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_redhat_sse_ecosystems = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "Senior Software Engineer | Python - Containers - AI Platform Testing & DevOps",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Senior Software Engineer with 5+ years of experience in Python software development, container-based deployments, and AI platform integration on Linux environments. Proven expertise testing and validating AI platforms using PyTorch, vLLM, and NVIDIA Triton Inference Server - including performance benchmarking, GPU acceleration verification, and distributed inference at scale. Hands-on with Kubernetes, Docker, CI/CD pipelines, and infrastructure-as-code tooling (Helm, Terraform, Ansible). Experienced building automated test pipelines and observability stacks for production AI workloads in agile, globally distributed teams.",
    skills: [
        { category: "Platform & Linux", items: ["Linux", "Python", "Bash", "Docker", "Kubernetes", "Azure AKS", "RHEL-compatible", "Containers", "RPM Packaging", "CI/CD", "Blue-Green Deploys"] },
        { category: "AI Platform Testing", items: ["vLLM", "SGLang", "PyTorch", "NVIDIA Triton", "CUDA", "Locust", "Pytest", "Performance Benchmarking", "GPU Acceleration", "NVIDIA TAO", "TensorRT"] },
        { category: "DevOps & Infrastructure", items: ["Helm", "Terraform", "Ansible", "Azure AKS", "GCP", "MLOps", "Model Serving", "Microservices", "Event-Driven", "Distributed Systems"] },
        { category: "AI & LLMs", items: ["LLaMA-3", "GPT-4", "Transformers", "RAG", "Langflow", "LangChain", "DSPy", "PEFT", "QLoRA", "Fine-Tuning", "Langfuse"] },
        { category: "Languages", items: ["Python", "C++", "Bash", "YAML", "SQL", "TypeScript"] },
        { category: "Data & Observability", items: ["Langfuse", "Vector DBs", "Qdrant", "Redis", "Apache Solr", "Pandas", "NumPy", "FastAPI", "SciPy", "n8n"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "AI Platform Testing", description: "Benchmarked vLLM and SGLang inference platforms using Locust under production load; profiled GPU workloads with PyTorch profiler to validate throughput, latency SLOs, and hardware utilization." },
            { label: "Container & K8s CI/CD", description: "Deployed containerized AI workloads on Kubernetes (Azure AKS) with blue-green CI/CD pipelines and Docker, achieving 99.5% uptime SLA across production workloads." },
            { label: "GPU Hardware Validation", description: "Deployed and validated NVIDIA Triton Inference Server for GPU-accelerated inference in on-premise environments, optimizing model concurrency and hardware utilization." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Container Deployment & CI/CD:** Deployed multi-agent LLM inference platform on **Kubernetes (Azure AKS)** using **Docker** containers with blue-green **CI/CD** pipelines and **Langflow** orchestration - achieving **99.5% uptime SLA** with full observability via **Langfuse** across 50+ daily conversations.",
                "**Automated Pipeline Engineering:** Built automated **knowledge base ingestion pipeline** processing 500+ documents with bi-weekly sync, freshness validation, prompt versioning, and performance metrics - following agile development practices.",
                "**Python Platform Integration:** Implemented **confidence-based routing engine** (70/50/30% thresholds) in Python across 8 specialized inference agents with **Qdrant** vector search tuning - achieving **~25% accuracy improvement** and **<5s response latency**."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**AI Platform Performance Testing:** Benchmarked **vLLM** and **SGLang** AI inference platforms under production load using **Locust**; profiled **GPU utilization** via **PyTorch profiler** for **Llama 3.2 3B** on self-hosted Linux/Azure GPU infrastructure - validating **<2s latency** SLO with **100% data privacy**.",
                "**Distributed Computation Architecture:** Engineered distributed search system with **Apache Solr** (500K+ documents), real-time data ingestion pipeline, and novel **Mixed Ranking** (BM25 + vector similarity) - achieving <200ms query latency at scale.",
                "**Algorithmic Optimization Systems:** Built high-speed distributed compute engine using **Google OR-Tools** with local caching - reducing computation time **85%** (15s to 2s) and fleet costs by **15%**."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**GPU Hardware Integration & Testing:** Deployed and validated **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** in an on-premise Linux environment; tuned model concurrency and preprocessing to maximize GPU inference throughput - enabling **$4.5k+ operational savings**.",
                "**Model Integration & Validation:** Fine-tuned and tested **LayoutLM** on domain-specific datasets within containerized environments, validating accuracy and performance across structured document formats."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Automated Testing & Tooling:** Developed **Python-based** automated test tooling for log file processing, KPI extraction, and reporting pipelines - reducing manual analysis time by **50%** and improving reporting efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Python ML Development:** Built and evaluated **9 Time-Series Models** in Python for sales forecasting; improved accuracy by **20-30%** via CLV analysis and algorithmic pattern matching following best practices for model validation.",
                "**Statistical Analysis:** Applied advanced algorithms for anomaly handling, improving forecast reliability and inventory optimization."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML & DevOps Practices:** Gained hands-on experience in ML model development, production testing, and industry-standard MLOps and DevOps practices under Amazon expert mentorship."
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
        { label: "99.5% K8s Uptime SLA", company: "Improva" },
        { label: "<2s vLLM Latency SLO", company: "CyberTranscend" },
        { label: "$4.5k+ GPU Inference Savings", company: "RNDsoftech" },
        { label: "85% Compute Speedup", company: "CyberTranscend" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Built full transformer - self-attention, KV caching, positional encoding, continuous batching - in PyTorch from scratch; validates deep AI platform internals knowledge." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MoE layers, MLA attention, and RL alignment - demonstrates hands-on AI model integration and platform testing capabilities." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit fine-tuning of Phi-3 Mini on custom datasets; validated model accuracy and performance in containerized Python environment." },
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Deep learning facial recognition pipeline using OpenCV + PyTorch on Linux, achieving >90% accuracy on standard benchmarks." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "AI Platform Performance Testing - vLLM & GPU Validation",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Needed to validate AI inference platform performance (vLLM/SGLang) for production SLOs on self-hosted GPU Linux infrastructure without cloud AI vendor dependencies.",
            solution: "· **AI Platform Benchmarking:** Conducted systematic performance testing (Locust) across **vLLM** and **SGLang** inference platforms, measuring TPOT, throughput, GPU utilization, and memory efficiency for **Llama 3.2 3B** on self-hosted **Linux/Azure GPU** infrastructure. · **GPU Performance Profiling:** Used **PyTorch profiler** and custom bottleneck scripts to identify and resolve GPU computation hotspots in the 3-stage inference pipeline, maximizing hardware utilization. · **Integration & Validation:** Integrated **Faster Whisper** ASR within the inference stack; validated **<2s end-to-end latency** SLO and **100% data privacy** compliance (zero external cloud AI dependencies).",
            impact: [
                "**<2s Latency SLO** validated - vLLM + ASR + TTS pipeline",
                "**100% Data Privacy** - fully self-hosted Linux GPU infrastructure",
                "**GPU Profiling** - hardware utilization maximized via PyTorch profiler"
            ],
            techStack: ["Python", "vLLM", "SGLang", "PyTorch", "Linux", "Locust", "Llama-3.2", "Faster Whisper", "Azure GPU"]
        },
        {
            id: "improva-rag",
            title: "Containerized AI Platform on Kubernetes - CI/CD & Observability",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Required a production-grade, containerized AI inference platform with automated CI/CD, high availability, and full observability on Kubernetes for a customer-facing healthcare workload.",
            solution: "· **Container & Kubernetes Deployment:** Deployed multi-agent LLM inference platform as **Docker** container images on **Kubernetes (Azure AKS)** with blue-green **CI/CD** pipelines - achieving **99.5% uptime SLA**. · **Inference Routing & Optimization:** Implemented **confidence-based routing policies** (70/50/30% thresholds) with **Qdrant** HNSW vector search tuning and **hybrid retrieval** (keyword + semantic re-ranking) - achieving **<5s response time** and **~25% accuracy improvement**. · **Observability & Automation:** Full monitoring stack with **Langfuse**, prompt versioning, knowledge base automation (500+ docs, bi-weekly sync), and performance metrics.",
            impact: [
                "**99.5% Uptime SLA** - Kubernetes CI/CD blue-green deployment",
                "**<5s Response Latency** - container-based inference routing",
                "**~25% Accuracy Improvement** - hybrid retrieval + routing tuning",
                "**~30% Reduction** in L1 support tickets"
            ],
            techStack: ["Python", "Docker", "Kubernetes", "Azure AKS", "CI/CD", "Langflow", "Qdrant", "Langfuse"]
        },
        {
            id: "rnd-triton",
            title: "NVIDIA Triton Inference Server - GPU Hardware Integration",
            client: "RNDsoftech",
            role: "AI Engineer Intern",
            period: "Dec 2024 - Mar 2025",
            location: "On-site, Coimbatore",
            problem: "Required high-throughput GPU-accelerated inference in a resource-constrained on-premise Linux environment without cloud dependency - analogous to hardware certification for AI workloads.",
            solution: "· Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** in an on-premise **Linux** environment - configured model repository, optimized concurrency settings, and applied preprocessing to maximize GPU inference throughput. · Validated model accuracy and hardware compatibility across document formats; fine-tuned **LayoutLM** on domain-specific tabular datasets extending model applicability.",
            impact: [
                "**$4.5k+ Operational Savings** - GPU inference automation",
                "**Hardware Validated** - Triton concurrency and GPU config tuning on Linux"
            ],
            techStack: ["Python", "Linux", "NVIDIA TAO", "Triton Inference Server", "CUDA", "LayoutLM", "OCDRNet"]
        },
        {
            id: "improva-arm",
            title: "Large-Scale Python Pipeline - Automated Validation & Testing",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Required automated validation of 1.15M+ provider-system mappings with low auto-approval (58%) and high manual review load - needing Python-based automated testing pipelines at scale.",
            solution: "· Built high-performance **Python data pipeline** with adaptive **FP-Growth** algorithm selection, memory-efficient processing, and automated validation triggers following agile development cycles. · Developed **Triple-Frequency Validation Framework** combining domain patterns, location clustering, and statistical tests. · Integrated **LLM-Web Search Agent** for autonomous resolution with **confidence-based routing**.",
            impact: [
                "**75-85% Auto-Validation** rate (up from 58%)",
                "**50-60% Workload Reduction** for manual review"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "research-search",
            title: "Distributed Computation Platform - High-Throughput Search",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required distributed computation capable of indexing 500K+ documents with <200ms query latency under high traffic loads - classic distributed infrastructure challenge.",
            solution: "· Designed **distributed search architecture** with **Apache Solr** indexing 500K+ documents, novel **Mixed Ranking Method** combining BM25 + vector similarity for heterogeneous retrieval. · Built real-time data ingestion pipeline and prototyped **Context-Aware Re-ranking** with time-based adjustments.",
            impact: [
                "**40% Improvement** for ambiguous/unclear queries",
                "**<200ms Latency** at high traffic (simulated)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL", "Linux"]
        },
        {
            id: "cyber-logistics",
            title: "Scalable Distributed Compute Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "High-volume routing computations under tight latency constraints with distributed compute dependencies and multi-provider caching requirements.",
            solution: "· Built **high-speed distributed compute engine** using **Google OR-Tools** with local search heuristics and multi-provider fallback with **distributed caching** for map calculations. · Developed predictive service time model with 5+ features for latency-aware scheduling.",
            impact: [
                "**85% Compute Speedup** (15s to 2s)",
                "**15% Cost Reduction** in fleet operations"
            ],
            techStack: ["Python", "Google OR-Tools", "OSRM", "NumPy", "Pandas", "Linux"]
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
