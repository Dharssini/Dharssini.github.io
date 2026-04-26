// Qualcomm India - Lead Engineer, Senior ML / Embedded / C++
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_qualcomm_lead_ml = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Research Scientist & Applied AI Engineer | LLM Inference & Edge AI",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Research-driven Applied AI Engineer with deep expertise in LLM inference optimization, on-device edge AI deployment, and Generative AI model engineering. Proven experience architecting high-performance inference pipelines using PyTorch, vLLM, SGLang, and TensorRT - achieving sub-2s end-to-end latency for large language models under real concurrency loads. Strong foundation in C++, Python, quantization (QLoRA / fixed-point), CUDA, and transformer architecture internals (self-attention, KV caching). Passionate about pushing the limits of heterogeneous compute for edge-based GenAI deployment.",
    skills: [
        { category: "Generative AI & LLMs", items: ["LLM Inference", "LLaMA-3", "GPT-4", "Transformers", "Self-Attention", "KV Caching", "vLLM", "SGLang", "RAG", "LangChain", "LangGraph", "DSPy", "PEFT", "QLoRA", "Fine-Tuning", "RLHF"] },
        { category: "ML & Inference Optimization", items: ["PyTorch", "CUDA", "TensorRT", "Triton Server", "Quantization", "Fixed-Point", "ONNX", "Deep Learning", "Computer Vision", "OpenCV", "Algorithm Design", "Statistical Modeling"] },
        { category: "Systems & Infrastructure", items: ["C++", "Embedded Systems", "MLOps", "Docker", "Kubernetes", "Azure AKS", "GCP", "Triton", "CI/CD", "Model Serving", "Ansible", "Terraform"] },
        { category: "Data Engineering", items: ["FastAPI", "Microservices", "Vector DBs", "Qdrant", "Pinecone", "Redis", "Distributed Systems", "Apache Solr", "Event-Driven", "n8n"] },
        { category: "Languages", items: ["Python", "C++", "SQL", "TypeScript", "Bash"] },
        { category: "Frameworks & Platforms", items: ["PyTorch", "ONNX Runtime", "TFLite", "CUDA", "OpenCL", "Linux", "Windows", "Scikit-learn", "NumPy", "Pandas"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "Inference Optimization", description: "Benchmarked SGLang vs vLLM inference engines; engineered self-hosted GPU architecture achieving <2s LLM latency at 50-70 concurrent users with PyTorch profiling and custom bottleneck discovery." },
            { label: "Quantization & Compression", description: "Applied QLoRA (4-bit quantization) and fixed-point model compression for fine-tuning LLaMA and Phi-3 models; studied floating-point/fixed-point trade-offs during RNDsoftech OCR pipeline work." },
            { label: "Edge & Embedded AI", description: "Deployed OCR models on NVIDIA Triton Inference Server (TAO Toolkit) in resource-constrained on-premise environments with sub-second inference targets." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Enterprise Multi-Agent LLM System:** Built a production Multi-Agent RAG system orchestrated with **LangGraph**, deploying optimized **LLM inference pipelines** with intent classification and **confidence-based routing** across 8 specialized agents - reducing L1 support tickets by **30%** and achieving **<5s response latency**.",
                "**LLM Pipeline Engineering & Prompt Optimization:** Crafted structured **prompt templates (50-120 tokens/agent)** with controlled context windows, source citation extraction, and **model tuning**, achieving **~25% accuracy improvement** and **95%+ extraction accuracy** across structured entity fields using zero-shot techniques.",
                "**Scalable Data Mining & Statistical Modeling:** Built a high-performance **FP-Growth** data mining pipeline processing **1.15M+ healthcare records** with a Triple-Frequency Validation Framework (statistical tests, domain clustering), increasing auto-approval rates to **85%** and reducing manual workload by **50-60%**."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**LLM Inference Optimization (Edge-focused):** Benchmarked state-of-the-art inference engines (**SGLang, vLLM**) via Locust load testing; engineered self-hosted **Azure GPU architecture** running **Llama 3.2 3B** - achieving **<2s end-to-end latency** with **PyTorch profiling**, custom bottleneck scripts, and **ASR/TTS pipeline tuning** (Faster Whisper) for 50-70 concurrent users at **100% data privacy**.",
                "**Heterogeneous Search Architecture:** Designed a **distributed search system** using **Apache Solr** indexing 500K+ documents with a novel **Mixed Ranking Method** combining BM25 keyword search and **vector similarity** - solving the cold-start problem and improving ambiguous query quality by **40%** at <200ms latency.",
                "**Algorithmic Optimization Engine:** Built a **high-speed route planner** using **Google OR-Tools** with advanced local search heuristics and distributed **map calculation caching** - reducing fleet operational costs by **15%** and computation time by **85%** (15s to 2s)."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**On-Device Inference & Model Optimization:** Automated OCR pipelines using **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server**; applied model compression and image preprocessing to improve accuracy in **resource-constrained embedded environments** - enabling **$4.5k+ in operational savings**.",
                "**Document Layout Analysis:** Optimized document sorting using **LayoutLM**, extending text handling capabilities and fine-tuning models on domain-specific datasets."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Log Analysis & KPI Tooling:** Developed **Python-based automation tools** for log file processing and KPI calculation - cutting manual analysis time by **50%** and improving data reporting efficiency and **visualization** by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Time-Series Forecasting & Predictive Analytics:** Evaluated **9 Time-Series Models** for sales volume prediction; improved forecast accuracy by **20-30%** using CLV analysis and pattern-matching algorithms for irregular demand patterns.",
                "**Advanced Statistical Modeling:** Applied specialized statistical algorithms to handle irregular demand patterns and enhance model reliability and inventory management strategies."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Training:** Gained hands-on experience in advanced **machine learning techniques**, model development, and industry-standard ML practices under Amazon expert mentorship."
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
        { label: "<2s LLM Inference Latency", company: "CyberTranscend" },
        { label: "70% Faster Extraction", company: "RNDsoftech" },
        { label: "45% Productivity Gain", company: "Improva" },
        { label: "$4.5k+ Operational Savings", company: "RNDsoftech" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Implemented 'Attention Is All You Need' (self-attention, multi-head attention, positional encoding) in PyTorch from scratch." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MLA (multi-head latent attention), MoE layers, and reinforcement learning alignment." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit quantization fine-tuning of Phi-3 Mini on biology domain; explored fixed-point vs floating-point trade-offs." },
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Facial recognition pipeline using OpenCV + deep learning achieving >90% accuracy on standard benchmarks." }
    ],
    systemProjects: [
        {
            id: "cyber-voice",
            title: "Clinical AI Voice Assistant - LLM Inference Optimization",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required a privacy-first, edge-deployed mental health support agent with <2s end-to-end voice latency - without routing data to external cloud AI vendors.",
            solution: "· **LLM Inference Benchmarking:** Conducted rigorous load testing (Locust) across **SGLang** and **vLLM** inference engines; selected optimal engine based on throughput, latency, and memory efficiency for **Llama 3.2 3B** on self-hosted Azure GPU. · **PyTorch Profiling & Bottleneck Elimination:** Used **PyTorch profiler** and custom scripts to identify and resolve computation bottlenecks in the 3-stage sequential pipeline (Patient Summary - Intent Classification - Response), maximizing GPU utilization for edge-equivalent on-device inference. · **ASR/TTS Latency Tuning:** Integrated **Faster Whisper** ASR with optimized decode parameters and TTS pipeline, achieving stable **<2s end-to-end latency** with **100% data privacy** (zero external cloud AI dependencies).",
            impact: [
                "**<2s End-to-End Latency** - LLM + ASR + TTS pipeline",
                "**100% Data Privacy** - zero external cloud AI dependencies",
                "**50-70 Concurrent Users** - sustained under GPU load testing",
                "**PyTorch Profiling** - custom bottleneck discovery & resolution"
            ],
            techStack: ["Python", "PyTorch", "vLLM", "SGLang", "Llama-3.2", "Faster Whisper", "Locust", "Azure GPU"]
        },
        {
            id: "research-search",
            title: "Search & Retrieval Architecture (Research and Analysis)",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Cold-start problem and poor results in large-scale e-commerce discovery, with high zero-result query rates and inability to handle unclear searches at scale.",
            solution: "· Formulated a **distributed search architecture** with **Apache Solr** capable of indexing 500K+ documents, developing a novel **Mixed Ranking Method** combining keyword search (BM25) with **vector similarity** for heterogeneous retrieval. · Modeled real-time data ingestion pipeline integrating databases and prototyped **Context-Aware Re-ranking Strategy** with time-based adjustments for improved result relevance.",
            impact: [
                "**40% Improvement** for unclear/ambiguous queries",
                "**<200ms Speed** at high traffic (simulated)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL"]
        },
        {
            id: "cyber-logistics",
            title: "Scalable Last-Mile Logistics Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Inefficient routing for high-volume last-mile logistics with time, capacity, and priority constraints led to high fuel costs, missed deadlines, and poor driver efficiency.",
            solution: "· Constructed a **high-speed route planner** using **Google OR-Tools** and local search logic for Vehicle Routing Problems with advanced constraint handling. · Developed predictive service time model with 5+ features (weight, volume, density, fragility) and built distributed map pipeline with multi-provider fallback and local caching.",
            impact: [
                "**15% Cost Reduction** in fleet operations",
                "**85% Speed Improvement** (15s to 2s) for route calculations"
            ],
            techStack: ["Python", "Google OR-Tools", "OSRM", "NumPy", "Pandas"]
        },
        {
            id: "improva-rag",
            title: "Enterprise Multi-Agent LLM Inference System",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "No intelligent automation for visitor engagement. Manual support created high L1 ticket volume, slow responses, and inconsistent answer quality across diverse healthcare queries.",
            solution: "· **Production LLM Pipeline:** Deployed a resilient **multi-agent RAG system** with **Langflow** orchestration - intent classifier routing queries across 8 specialized agents (sales, support, clarification, feedback) using **confidence thresholds (70/50/30%)**. · **Inference & Retrieval Optimization:** Tuned **Qdrant** vector search (HNSW parameters, quantization settings) and implemented **hybrid search** (keyword + semantic re-ranking) - achieving **<5s response time** and **~25% accuracy improvement** across 50+ daily conversations. · **Prompt Engineering at Scale:** Designed structured prompt templates **(50-120 tokens/agent)** with controlled context windows and source citation extraction; full observability via **Langfuse**, CI/CD blue-green deployments achieving 99.5% uptime SLA.",
            impact: [
                "**~30% Reduction** in L1 support tickets",
                "**<5s Response Latency** under production load",
                "**~25% Accuracy Improvement** via hybrid search + re-ranking",
                "**99.5% Uptime SLA** - blue-green CI/CD"
            ],
            techStack: ["Python", "LangGraph", "LangChain", "Qdrant", "DSPy", "Langfuse", "Azure"]
        },
        {
            id: "improva-arm",
            title: "Healthcare Data Quality & Anomaly Detection Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low confidence (58% auto-approval) and high manual review load, requiring clear explanations in resource-constrained environments.",
            solution: "· Established a high-performance **data mining system** with adaptive **FP-Growth** algorithm selection and efficient memory usage for large-scale statistical pattern extraction. · Developed strict **Triple-Frequency Validation Framework** combining domain patterns, location clustering, and facility details validated by statistical tests. · Integrated **LLM-Web Search Agent** for autonomous long-tail resolution and **confidence-based routing** with automated validation loops.",
            impact: [
                "**75-85% Auto-Approval** rate (up from 58%)",
                "**50-60% Workload Reduction** for manual reviews",
                "**1.15M+ Providers** processed"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "improva-idp",
            title: "Intelligent Document Processing - LLM Extraction Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual healthcare roster extraction from complex documents consumed 40+ hrs/week with inconsistent accuracy across diverse multi-format layouts.",
            solution: "· Built an enterprise **IDP pipeline** with multi-stage **LLM inference** routing based on document complexity (table density analysis, row/column rules) and **Retrieval-Augmented Generation** for long document reasoning. · Applied **zero-shot Prompt Engineering** with LLM thinking budgets and robust post-processing validation for structured field extraction.",
            impact: [
                "**95%+ Extraction Accuracy** across 8 structured fields",
                "**85% Reduction** in manual effort (40+ hrs/week saved)"
            ],
            techStack: ["Python", "GPT-4", "Claude", "RAG", "LLM Pipelines"]
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
