// Adobe India - AI Engineer
// Tailored from base resumeData.ts - NO new facts invented.
// Keywords woven in where experience already aligns.

export const resumeData_adobe_ai_engineer = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Research Scientist & Applied AI Engineer | LLMOps - Platform - Fine-Tuning",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Research-driven Applied AI Engineer specializing in building scalable, customer-facing AI platforms and production-grade LLM systems. Proven expertise in ML pipeline design (model management, feature pipelines, retraining), LLM serving with vLLM/SGLang, and LLMOps using Langflow, LangGraph, and LangChain. Hands-on experience with model fine-tuning (PEFT, QLoRA), inference optimization, A/B evaluation, and end-to-end deployment on Azure AI/GCP with Kubernetes and Docker. Passionate about translating cutting-edge AI research into reliable, high-impact production solutions.",
    skills: [
        { category: "LLM Serving & MLOps", items: ["vLLM", "SGLang", "Triton Server", "TensorRT", "MLOps", "LLMOps", "CI/CD", "Model Serving", "Azure AI", "GCP Vertex AI", "A/B Testing", "Model Management"] },
        { category: "Generative AI & LLMs", items: ["LLM Pipelines", "LLaMA-3", "GPT-4", "RAG", "Langflow", "LangGraph", "LangChain", "DSPy", "AutoGen", "MCP", "Langfuse", "PEFT", "QLoRA", "Fine-Tuning", "RLHF"] },
        { category: "ML & Infrastructure", items: ["PyTorch", "Transformers", "CUDA", "Deep Learning", "ONNX", "Algorithm Design", "Statistical Modeling", "Computer Vision", "OpenCV", "Scikit-learn"] },
        { category: "DevOps & Systems", items: ["Docker", "Kubernetes", "Azure AKS", "Ansible", "Terraform", "Microservices", "FastAPI", "Event-Driven", "Distributed Systems", "n8n"] },
        { category: "Data & Vector", items: ["Vector DBs", "Qdrant", "Pinecone", "Redis", "Apache Solr", "Pandas", "NumPy", "SciPy", "SQL", "Feature Engineering"] },
        { category: "Languages", items: ["Python", "C++", "SQL", "TypeScript", "Bash"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "Scalable AI Platform", description: "Built customer-facing multi-agent RAG platform with Langflow orchestration, Qdrant vector search, and blue-green CI/CD deployments - achieving 99.5% uptime SLA." },
            { label: "LLM Serving Expertise", description: "Benchmarked and deployed vLLM and SGLang inference engines with PyTorch profiling, achieving <2s end-to-end latency for Llama 3.2 3B in a fully self-hosted GPU environment." },
            { label: "Fine-Tuning & LLMOps", description: "Applied QLoRA (4-bit) and PEFT techniques for domain adaptation; built automated knowledge pipelines with bi-weekly sync, freshness monitoring, and Langfuse observability." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Scalable Customer-Facing AI Platform:** Architected and deployed a production **multi-agent RAG platform** with **Langflow** orchestration, **Qdrant** vector search, and blue-green **CI/CD** deployment - reducing L1 support tickets by **30%** and maintaining **99.5% uptime SLA** across 50+ daily conversations.",
                "**ML Pipeline Design & LLMOps:** Built automated **knowledge base ingestion pipeline** processing 500+ documents with bi-weekly sync, freshness monitoring, and full **Langfuse** observability - covering model management, prompt versioning, and performance tracking.",
                "**LLM Fine-Tuning & Inference Optimization:** Applied **zero-shot and few-shot Prompt Engineering** with structured templates **(50-120 tokens/agent)**, context window control, and routing based on confidence (70/50/30% thresholds) - achieving **~25% accuracy improvement** and **95%+ extraction accuracy**."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**LLM Serving & GPU Architecture:** Benchmarked **vLLM** and **SGLang** inference serving engines via Locust load testing; engineered a self-hosted **Azure GPU** deployment for **Llama 3.2 3B** using **PyTorch profiling** and custom bottleneck scripts - achieving **<2s end-to-end latency** with **100% data privacy**.",
                "**Distributed Search Platform:** Designed a **distributed retrieval architecture** using **Apache Solr** (500K+ documents) with a novel **Mixed Ranking Method** combining BM25 and **vector similarity** - improving unclear query quality by **40%** at <200ms latency.",
                "**Algorithmic Optimization:** Built a **high-speed route planner** using **Google OR-Tools** with distributed caching - reducing fleet operational costs by **15%** and computation time by **85%** (15s to 2s)."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**Model Deployment & Optimization:** Deployed **OCDRNet (NVIDIA TAO Toolkit)** on **Triton Inference Server**; applied model compression and image preprocessing to improve accuracy in resource-constrained environments - enabling **$4.5k+ in operational savings**.",
                "**Document Layout Analysis:** Fine-tuned **LayoutLM** on domain-specific tabular datasets, extending text handling and layout understanding capabilities for structured document parsing."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**ML Pipeline Automation:** Developed **Python-based tools** for automated log file processing and KPI reporting - cutting manual analysis time by **50%** and improving data visualization efficiency by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Predictive ML Pipelines:** Built and evaluated **9 Time-Series Models** for sales volume forecasting; improved accuracy by **20-30%** using CLV analysis, pattern-matching algorithms, and feature engineering for irregular demand patterns.",
                "**Advanced Statistical Modeling:** Applied specialized algorithms for anomaly handling, improving model reliability and inventory management strategies."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Training:** Gained hands-on experience in advanced **machine learning techniques**, model development, and industry-standard MLOps practices under Amazon expert mentorship."
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
        { label: "99.5% Uptime SLA", company: "Improva" },
        { label: "<2s LLM Serving Latency", company: "CyberTranscend" },
        { label: "45% Productivity Gain", company: "Improva" },
        { label: "$4.5k+ Operational Savings", company: "RNDsoftech" }
    ],
    projects: [
        { name: "Transformer From Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Implemented 'Attention Is All You Need' (self-attention, multi-head attention, positional encoding) in PyTorch from scratch." },
        { name: "DeepSeekV3 Architecture", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Reproduced DeepSeek-V3 with MLA attention, MoE layers, and reinforcement learning alignment from scratch." },
        { name: "Fine-Tuning Phi-3 Mini", link: "https://dharssini.github.io/PortfolioWebsite/#/blog/fine-tuning-best-practices", desc: "QLoRA 4-bit PEFT fine-tuning of Phi-3 Mini; explored parameter-efficient techniques and model optimization trade-offs." },
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Facial recognition pipeline using OpenCV + deep learning achieving >90% accuracy on standard benchmarks." }
    ],
    systemProjects: [
        {
            id: "improva-rag",
            title: "Scalable Customer-Facing AI Platform (Multi-Agent RAG)",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "No intelligent customer-facing platform for visitor engagement. Manual support created high L1 ticket volume, slow responses, and inconsistent answer quality across diverse healthcare queries.",
            solution: "· **AI Platform Architecture:** Deployed a production **multi-agent RAG platform** with **Langflow** orchestration - intent classifier routing queries across 8 specialized agents (sales, support, clarification, feedback) using **confidence thresholds (70/50/30%)**. · **ML Pipeline & Model Management:** Built automated **knowledge base pipeline** processing 500+ documents with bi-weekly sync, freshness monitoring, prompt versioning, and **Langfuse** observability covering full model lifecycle. · **Inference at Scale:** Tuned **Qdrant** HNSW search and implemented **hybrid retrieval** (keyword + semantic re-ranking) - achieving **<5s response time** and **~25% accuracy improvement**; blue-green CI/CD with **Kubernetes** on **Azure AKS** achieving 99.5% uptime SLA.",
            impact: [
                "**~30% Reduction** in L1 support tickets",
                "**<5s Response Latency** at production scale",
                "**~25% Accuracy Improvement** via hybrid retrieval + re-ranking",
                "**99.5% Uptime SLA** - Kubernetes blue-green CI/CD"
            ],
            techStack: ["Python", "Langflow", "LangChain", "Qdrant", "DSPy", "Langfuse", "Azure AKS", "Docker"]
        },
        {
            id: "improva-arm",
            title: "Healthcare Data Quality & ML Pipeline (Anomaly Detection)",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low confidence (58% auto-approval) and high manual review load, requiring automated retraining and explainability.",
            solution: "· Built a high-performance **ML data pipeline** with adaptive **FP-Growth** algorithm selection, efficient memory usage, and automated model retraining triggers based on data drift signals. · Developed **Triple-Frequency Validation Framework** combining domain patterns, location clustering, and facility features validated by statistical tests. · Integrated **LLM-Web Search Agent** for autonomous long-tail resolution with **confidence-based routing** and automated validation loops.",
            impact: [
                "**75-85% Auto-Approval** rate (up from 58%)",
                "**50-60% Workload Reduction** for manual reviews",
                "**1.15M+ Providers** processed"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"]
        },
        {
            id: "improva-idp",
            title: "Intelligent Document Processing - End-to-End LLM Platform",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual healthcare roster extraction from complex documents consumed 40+ hrs/week with inconsistent accuracy across diverse multi-format layouts.",
            solution: "· Built an enterprise **end-to-end IDP platform** with multi-stage **LLM inference** routing based on document complexity (table density analysis, row/column rules) and **Retrieval-Augmented Generation** for long document reasoning. · Applied **zero-shot Prompt Engineering** with LLM thinking budgets and robust post-processing validation for structured field extraction.",
            impact: [
                "**95%+ Extraction Accuracy** across 8 structured fields",
                "**85% Reduction** in manual effort (40+ hrs/week saved)"
            ],
            techStack: ["Python", "GPT-4", "Claude", "RAG", "LLM Pipelines"]
        },
        {
            id: "cyber-voice",
            title: "LLM Serving Infrastructure - Voice AI (Self-Hosted GPU)",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Required a privacy-first mental health support agent with <2s end-to-end voice latency - without routing data to external cloud AI vendors.",
            solution: "· **LLM Serving Benchmarking:** Conducted rigorous load testing (Locust) across **vLLM** and **SGLang** inference serving frameworks; selected optimal serving paradigm based on throughput, latency, and memory efficiency for **Llama 3.2 3B** on self-hosted **Azure GPU**. · **GPU Architecture Optimization:** Used **PyTorch profiler** and custom bottleneck scripts to maximize GPU utilization across the 3-stage pipeline (Patient Summary - Intent Classification - Response) - analogous to distributed LLM serving. · **ASR/TTS Pipeline Tuning:** Integrated **Faster Whisper** ASR achieving stable **<2s end-to-end latency** with **100% data privacy** (zero external cloud AI dependencies).",
            impact: [
                "**<2s End-to-End Latency** - LLM + ASR + TTS serving pipeline",
                "**100% Data Privacy** - fully self-hosted GPU infrastructure"
            ],
            techStack: ["Python", "PyTorch", "vLLM", "SGLang", "Llama-3.2", "Faster Whisper", "Locust", "Azure GPU"]
        },
        {
            id: "research-search",
            title: "Distributed Search & Retrieval Platform (Research)",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Cold-start problem and poor results in large-scale e-commerce discovery, with high zero-result query rates and inability to handle unclear searches at scale.",
            solution: "· Designed a **distributed search platform** with **Apache Solr** indexing 500K+ documents, developing a novel **Mixed Ranking Method** combining BM25 keyword search with **vector similarity** for heterogeneous retrieval. · Prototyped **Context-Aware Re-ranking Strategy** with time-based adjustments and real-time data ingestion pipeline.",
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
            solution: "· Constructed a **high-speed route planner** using **Google OR-Tools** and local search logic for Vehicle Routing Problems with advanced constraint handling. · Developed predictive service time model with 5+ features and built distributed map pipeline with multi-provider fallback and local caching.",
            impact: [
                "**15% Cost Reduction** in fleet operations",
                "**85% Speed Improvement** (15s to 2s) for route calculations"
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
