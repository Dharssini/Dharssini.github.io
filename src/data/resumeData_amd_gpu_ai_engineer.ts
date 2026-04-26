// AMD - Senior AI Models GPU Deployment Software Engineer (Bangalore)
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_amd_gpu_ai_engineer = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Model Deployment Engineer | PyTorch - GPU Computing - C++ & Python - Linux",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Applied AI Engineer passionate about deploying and optimizing AI models on modern GPU hardware. Hands-on experience running NLP (chatbot, LLMs), Vision (document OCR, facial recognition), Audio (ASR/TTS), and MultiModal AI systems on GPU-accelerated Linux infrastructure using PyTorch, CUDA, vLLM, and NVIDIA Triton Inference Server. Proficient in C++ and Python with a strong hardware computing mindset - from GPU utilization profiling and bottleneck resolution to model compression and inference optimization. Active open-source contributor with deep understanding of transformer architectures, inference internals, and high-performance compute systems.",
    skills: [
        { category: "GPU Computing & Inference", items: ["CUDA", "HIP", "ROCm", "ROCm PyTorch", "OpenCL", "PyTorch", "TensorRT", "vLLM", "NVIDIA Triton", "ONNX", "NVIDIA TAO", "rocm-smi", "GPU Profiling", "Performance Benchmarking", "Quantization"] },
        { category: "AI Models & Domains", items: ["NLP", "LLM Inference", "Computer Vision", "Audio AI (ASR/TTS)", "MultiModal AI", "Chatbots", "Transformers", "LLaMA-3", "GPT-4", "LayoutLM", "OpenCV", "PEFT", "QLoRA"] },
        { category: "Languages & Systems", items: ["Python", "C++", "Bash", "YAML", "Linux", "SQL", "TypeScript", "Embedded Systems"] },
        { category: "ML Frameworks", items: ["PyTorch", "ONNX Runtime", "TFLite", "Scikit-learn", "NumPy", "Pandas", "SciPy", "Deep Learning", "Fine-Tuning", "RLHF", "RAG"] },
        { category: "Infrastructure & DevOps", items: ["Docker", "Kubernetes", "Azure AKS", "CI/CD", "MLOps", "Model Serving", "Langfuse", "Locust", "Helm", "Terraform"] },
        { category: "AI Platform & LLMOps", items: ["Langflow", "LangChain", "LangGraph", "DSPy", "Qdrant", "Pinecone", "Redis", "FastAPI", "Microservices", "Apache Solr"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "GPU AI Model Deployment", description: "Deployed LLMs (Llama 3.2 3B) and OCR models (OCDRNet) on GPU hardware using vLLM, SGLang, and NVIDIA Triton Inference Server; profiled GPU utilization via PyTorch profiler achieving <2s inference latency." },
            { label: "MultiModal AI Systems", description: "Built end-to-end multimodal pipeline combining Audio AI (Faster Whisper ASR), NLP (LLM chatbot), and TTS on GPU Linux infrastructure - covering the full NLP + Vision + Audio AI spectrum." },
            { label: "GPU Internals & Architecture", description: "Built transformer from scratch (self-attention, KV caching, positional encoding) and reproduced DeepSeek-V3 (MoE, MLA attention) in PyTorch - demonstrating deep computer architecture and GPU compute understanding." }
        ]
    },
    experience: [
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**MultiModal GPU AI Deployment (NLP + Audio + Vision):** Deployed **Llama 3.2 3B** on self-hosted **Linux/GPU** infrastructure using **vLLM** serving; integrated **Faster Whisper** ASR (Audio AI) and TTS into a multimodal pipeline - benchmarked GPU performance via **Locust** and **PyTorch profiler** achieving **<2s end-to-end latency** with **100% data privacy**.",
                "**GPU Performance Optimization:** Used **PyTorch*** profiling and custom C++/Python bottleneck scripts to identify and resolve GPU compute hotspots across the 3-stage inference pipeline (summarization, classification, response), maximizing hardware utilization.",
                "**Distributed High-Performance Systems:** Engineered **distributed search** (Apache Solr, 500K+ docs, BM25 + vector similarity) and high-speed **algorithmic engine** (Google OR-Tools) - achieving <200ms query latency and **85% computation speedup** (15s to 2s)."
            ],
            isAnchor: true
        },
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**NLP Chatbot & LLM Deployment:** Architected and deployed a production **NLP chatbot** (multi-agent RAG) with **Langflow** orchestration, **Qdrant** vector search, and confidence-based routing across 8 specialized LLM agents - achieving **<5s response latency** and **99.5% uptime SLA** across 50+ daily conversations.",
                "**Vision AI & Document Understanding:** Built enterprise **IDP pipeline** combining multi-stage **LLM inference** with document layout analysis (**LayoutLM**), achieving **95%+ extraction accuracy** across 8 structured fields and **85% reduction** in manual effort.",
                "**Python ML Pipeline at Scale:** Built **FP-Growth** data mining pipeline processing **1.15M+ healthcare records** with automated validation and statistical testing - increasing auto-approval rates to **85%** and reducing manual workload by **50-60%**."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**Vision AI on GPU Hardware:** Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** for GPU-accelerated document Vision AI (OCR) in an on-premise **Linux** environment; applied model compression and preprocessing to optimize GPU inference throughput - enabling **$4.5k+ operational savings**.",
                "**Model Fine-Tuning & Domain Adaptation:** Fine-tuned **LayoutLM** (Vision-Language model) on domain-specific tabular datasets, validating accuracy across document layouts and extending GPU inference to multi-format inputs."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Python Automation & Tooling:** Developed **Python-based** automated tooling for log processing and KPI pipeline engineering - cutting manual analysis time by **50%** and improving reporting efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Predictive ML with Python:** Built and evaluated **9 Time-Series Models** in Python for sales forecasting; improved accuracy by **20-30%** using CLV analysis, pattern-matching algorithms, and feature engineering.",
                "**Statistical Modeling:** Applied advanced statistical algorithms for anomaly and demand pattern handling, improving model reliability."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Training:** Gained hands-on exposure to advanced **machine learning** techniques, GPU-accelerated model development, and industry-standard MLOps practices under Amazon expert mentorship."
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
        { label: "95%+ Vision AI Accuracy", company: "Improva" },
        { label: "$4.5k+ GPU Model Savings", company: "RNDsoftech" },
        { label: "85% Compute Speedup", company: "CyberTranscend" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Built complete transformer (self-attention, KV caching, multi-head attention, positional encoding) in PyTorch from scratch - demonstrates deep GPU compute and model architecture understanding." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MoE layers, MLA attention, and RL alignment in PyTorch - hands-on with cutting-edge GPU model architecture and high-performance inference design." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit PEFT fine-tuning of Phi-3 Mini on custom NLP datasets; validated GPU memory efficiency and quantization trade-offs for deployment." },
        { name: "Google Photos Clone (Vision AI)", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "GPU-accelerated facial recognition Vision AI pipeline using OpenCV + PyTorch deep learning achieving >90% accuracy on standard benchmarks." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "MultiModal GPU AI Deployment - NLP + Audio + Vision Pipeline",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required a privacy-first, high-performance multimodal AI system (NLP + Audio + TTS) running on self-hosted GPU Linux infrastructure with <2s end-to-end latency.",
            solution: "· **NLP LLM on GPU:** Benchmarked and deployed **Llama 3.2 3B** on self-hosted Linux/GPU infrastructure using **vLLM** serving; measured TPOT, throughput, and GPU memory efficiency via **Locust** benchmarking. · **GPU Performance Profiling:** Used **PyTorch profiler** and custom **Python/C++** bottleneck scripts to resolve GPU compute hotspots across the 3-stage sequential pipeline (NLP summarization, intent classification, response generation). · **Audio AI Integration:** Integrated **Faster Whisper ASR** (Audio AI) with optimized decode parameters and TTS pipeline, achieving **<2s end-to-end multimodal latency** with **100% data privacy**.",
            impact: [
                "**<2s GPU Latency** - NLP LLM + Audio ASR + TTS multimodal pipeline",
                "**GPU Profiling** - PyTorch profiler + custom C++/Python bottleneck scripts",
                "**100% Data Privacy** - fully self-hosted Linux GPU deployment"
            ],
            techStack: ["Python", "C++", "PyTorch", "vLLM", "Linux", "CUDA", "Llama-3.2", "Faster Whisper", "Locust", "Azure GPU"]
        },
        {
            id: "rnd-triton",
            title: "Vision AI GPU Deployment - NVIDIA Triton Inference Server",
            client: "RNDsoftech",
            role: "AI Engineer Intern",
            period: "Dec 2024 - Mar 2025",
            location: "On-site, Coimbatore",
            problem: "Required high-throughput GPU-accelerated Vision AI (OCR) in a resource-constrained on-premise Linux environment without cloud dependency - needed efficient model deployment on real GPU hardware.",
            solution: "· Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server** in an on-premise **Linux** GPU environment - configured model repository, tuned GPU concurrency settings, and applied image preprocessing to maximize Vision AI throughput. · Fine-tuned **LayoutLM** (Vision-Language model) on domain-specific tabular datasets; validated model accuracy across diverse document layouts in Python.",
            impact: [
                "**$4.5k+ Operational Savings** - GPU Vision AI automation",
                "**GPU Concurrency Tuned** - Triton model config on Linux hardware"
            ],
            techStack: ["Python", "Linux", "NVIDIA TAO", "Triton Inference Server", "CUDA", "LayoutLM", "OpenCV", "OCDRNet"]
        },
        {
            id: "improva-rag",
            title: "NLP Chatbot AI Deployment - Multi-Agent LLM Inference",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Needed a production-grade NLP chatbot system with intelligent LLM routing, low latency, and high availability for customer-facing healthcare queries.",
            solution: "· **NLP Chatbot Deployment:** Deployed multi-agent **NLP chatbot** with **Langflow** orchestration routing across 8 LLM agents (sales, support, clarification, feedback) using confidence thresholds (70/50/30%). · **LLM Inference Optimization:** Tuned **Qdrant** HNSW vector search and implemented **hybrid retrieval** (keyword + semantic re-ranking) - achieving **<5s response time** and **~25% accuracy improvement**. · **Production CI/CD:** Deployed on **Kubernetes (Azure AKS)** with blue-green **CI/CD** pipelines and **Langfuse** observability achieving **99.5% uptime SLA**.",
            impact: [
                "**~30% Reduction** in L1 support tickets (NLP automation)",
                "**<5s Response Latency** - LLM inference + vector retrieval",
                "**~25% Accuracy Improvement** - hybrid search + routing optimization"
            ],
            techStack: ["Python", "Langflow", "LangChain", "Qdrant", "Kubernetes", "Docker", "Langfuse"]
        },
        {
            id: "improva-idp",
            title: "Vision-Language AI - Intelligent Document Processing Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual extraction from complex healthcare documents consumed 40+ hrs/week with inconsistent accuracy, requiring an AI system capable of understanding both document layout (Vision) and content (NLP).",
            solution: "· Built enterprise **Vision-Language IDP pipeline** with multi-stage **LLM inference** routing based on document complexity (table density, layout analysis) and **RAG** for long document reasoning. · Applied **zero-shot Prompt Engineering** with LLM thinking budgets and robust post-processing validation for structured field extraction.",
            impact: [
                "**95%+ Extraction Accuracy** across 8 structured fields (Vision + NLP)",
                "**85% Reduction** in manual effort (40+ hrs/week saved)"
            ],
            techStack: ["Python", "GPT-4", "Claude", "LayoutLM", "RAG", "LLM Pipelines"]
        },
        {
            id: "improva-arm",
            title: "Large-Scale ML Data Pipeline & Automated Validation",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings with low auto-approval (58%) and high manual review load at production scale.",
            solution: "· Built high-performance **Python ML pipeline** with adaptive **FP-Growth** algorithm, memory-efficient processing, and automated validation triggers. · Developed **Triple-Frequency Validation Framework** with statistical tests + LLM-Web Search Agent for autonomous long-tail resolution.",
            impact: [
                "**75-85% Auto-Approval** rate (up from 58%)",
                "**1.15M+ Records** processed with automated validation"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "research-search",
            title: "Distributed High-Performance Search System",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required a high-throughput distributed search system with <200ms latency at scale - requiring efficient algorithm design and distributed compute.",
            solution: "· Designed **distributed search architecture** with **Apache Solr** indexing 500K+ documents, novel **Mixed Ranking Method** combining BM25 + vector similarity. · Built real-time data ingestion pipeline and **Context-Aware Re-ranking** with time-based adjustments.",
            impact: [
                "**40% Improvement** for ambiguous queries",
                "**<200ms Latency** at simulated high traffic"
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
