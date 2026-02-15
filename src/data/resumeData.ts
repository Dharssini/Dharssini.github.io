export const resumeData = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Research Scientist & Applied AI Engineer",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, production-grade intelligent systems."
    },
    summary: "Research-driven Applied AI Engineer with a strong foundation in Generative AI, Large Language Models (LLMs), and Multi-Agent Systems. Proven track record of architecting scalable, privacy-first AI solutions for healthcare and enterprise domains. Expert in optimizing inference latency, designing novel retrieval algorithms (RAG), and engineering robust MLOps pipelines. Committed to advancing the field of AI through hypothesis-driven experimentation and rigorous evaluation.",
    skills: [
        { category: "Generative AI & LLMs", items: ["LM Agents", "GPT-4", "LLaMA-3", "RAG", "LangChain", "LlamaIndex", "LangGraph", "AutoGen", "DSPy", "MCP", "Langflow", "Langfuse", "PEFT", "QLoRA", "Fine-Tuning"] },
        { category: "Machine Learning & Research", items: ["PyTorch", "TensorFlow", "Transformers", "Computer Vision", "YOLO", "OpenCV", "Deep Learning", "Statistical Modeling", "Algorithm Design", "RLHF"] },
        { category: "MLOps & Cloud Infrastructure", items: ["MLOps", "Docker", "Kubernetes", "Azure AKS", "GCP", "Google ADK", "Triton Server", "Pytest", "E2E Tests", "CI/CD", "Model Serving"] },
        { category: "Data Engineering & Systems", items: ["FastAPI", "Microservices", "Vector DBs", "Qdrant", "Pinecone", "Redis", "Distributed Systems", "Apache Solr", "Event-Driven", "n8n"] },
        { category: "Languages", items: ["Python", "C++", "SQL", "TypeScript", "Bash"] },
        { category: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "SciPy", "Data Visualization", "Information Retrieval"] }
    ],
    researchEngineering: {
        title: "Research Engineering & Technical Innovation",
        highlights: [
            { label: "Algorithm Design", description: "Formulated confidence-aware routing protocols (70/50/30 thresholds) and metadata-driven cascade retrieval, optimizing the precision-recall trade-off in RAG systems." },
            { label: "Safety & Alignment", description: "Implemented deterministic safety filters and grounded generation guardrails, ensuring compliance with strict healthcare data standards and minimizing hallucinations." },
            { label: "Systems Architecture", description: "Architected asynchronous inferencing pipelines and latitude-aware caching strategies, reducing system latency by 80% for high-concurrency workloads." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Enterprise Multi-Agent RAG System:** Architected a Multi-Agent RAG System orchestrated with **LangGraph**, reducing L1 support tickets by **30%**. Engineered a 5-dimensional intent classification engine and optimized **Qdrant** HNSW parameters, achieving **p95 latency <5s** and a **25% increase in retrieval accuracy**.",
                "**Adaptive Association Rule Mining:** Designed a production-grade Association Rule Mining pipeline utilizing **FP-Growth** and sparse matrix optimizations to process 1.15M+ healthcare records. Implemented a deterministic validity framework that increased auto-approval rates to **85%**.",
                "**Intelligent Document Processing (IDP):** Developed a scalable IDP workflow using multi-stage **LLM pipelines** and adaptive complexity routing. Achieved **95%+ F1 score** in entity extraction through zero-shot **Prompt Engineering** and automated verification loops."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**Privacy-Preserving Edge AI:** Engineered a local-first voice assistant using quantized **Small Language Models (SLMs)** like Llama-3 and Mistral. Achieved **<2s end-to-end latency** by optimizing local inference chains and implementing **Voice Activity Detection (VAD)**.",
                "**Hybrid Search Algorithms:** Formulated a novel **Hybrid Ranking Algorithm** combining BM25 and vector similarity within **Apache Solr**, indexing 500K+ documents. Solved the cold-start problem and improved recall for ambiguous queries by **40%**.",
                "**Scalable Optimization Engine:** Built a high-throughput route optimization engine using **Google OR-Tools** and Guided Local Search metaheuristics. Reduced fleet operational costs by **15%** through vectorized geospatial computations and distributed caching."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2023 - Mar. 2024",
            bullets: [
                "**OCR Pipeline Optimization:** Automated OCR processing using **OCDRNet (NVIDIA TAO)** on **Triton Inference Server**. Improved accuracy through advanced image preprocessing and model quantization techniques.",
                "**Document Layout Analysis:** Optimized document classification using **LayoutLM**, extending token handling capabilities and fine-tuning transformers on domain-specific datasets.",
                "**LLM Retrieval System:** Developed an LLM-powered retrieval system leveraging **QLoRA fine-tuning** and domain adaptation, reducing manual information extraction effort by **70%**."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Log Analysis Tooling:** Developed Python-based GUI tools to automate log file processing and KPI calculation, resulting in a **50% reduction** in manual analysis time.",
                "**Data Reporting System:** Implemented a robust data extraction and automated reporting system, improving data processing efficiency and visualization capabilities by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Time-Series Forecasting:** Developed and evaluated **9 different Time-Series Models** to predict sales volumes, optimizing inventory management strategies.",
                "**Predictive Analytics:** Improved MAPE by **20-30%** via Customer Lifetime Value (CLV) analysis and achieved a **10%** improvement using Matrix Profiling techniques.",
                "**Advanced Algorithms:** Applied BetaGeofitter, SCRIMP algorithm, and SAGE logic to handle intermittent demand patterns and enhance model robustness."
            ]
        },
        {
            company: "Amazon",
            role: "ML Summer School Mentee",
            location: "Remote",
            period: "Jul. 2024 - Aug. 2024",
            bullets: [
                "**Applied ML Training:** Gained hands-on experience in advanced **machine learning techniques**, data analysis, and model development under the guidance of industry experts."
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
        { label: "$4.5k+ Operational Savings", company: "RNDsoftech" },
        { label: "70% Faster Systems", company: "CyberTranscend" },
        { label: "45% Productivity Gain", company: "Improva" },
        { label: "32% Accuracy Gain", company: "Improva" }
    ],
    projects: [
        { name: "Google Photos Clone", link: "#/project/google-photos-clone", desc: "Implemented ArcFace/InsightFace achieving >90% accuracy on LFW benchmark." },
        { name: "FineTuning Phi3", link: "#/project/finetuning-phi3", desc: "Optimized Phi-3 Mini on Bioprotein dataset for domain-specific generation." },
        { name: "Transformer Scratch", link: "#/project/transformer-scratch", desc: "Reproduced 'Attention Is All You Need' architecture from scratch in PyTorch." },
        { name: "DeepSeekV3", link: "#/project/deepseek-v3", desc: "Implemented architecture with Multi-Head Latent Attention (MLA), MoE, Multi-Token Prediction (MTP), RoPE, Quantization, Distillation, and RL." }
    ],
    systemProjects: [
        {
            id: "improva-rag",
            title: "Enterprise Multi-Agent RAG System",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "The organization had no intelligent chatbot system for website visitors. Potential leads were struggling to get answers to their questions, resulting in friction, delayed responses, and frequent manual escalation to the marketing and support teams.",
            solution: "· Architected and deployed a production-grade multi-agent RAG chatbot to automate visitor engagement, replacing manual marketing support and reducing L1 tickets by ~30% by designing 5-dimensional intent classification with confidence-based routing across 8 specialized agents (sales, support, clarification, feedback) · Optimized Qdrant HNSW parameters to resolve multi-agent latency issues, achieving p95 response time <5s without compromising retrieval accuracy. · Implemented hybrid retrieval (sparse + dense embeddings) with soft-threshold database selection, re-ranking, and relevance scoring — improving answer accuracy by ~25% and reducing hallucinations. · Engineered structured prompt templates (50–120 tokens/agent) with DSPy optimization, LLM parameter tuning, source citation extraction, and controlled context windows for consistent, human-quality responses. · Built automated AI-powered knowledge base pipeline processing 500+ healthcare documents with bi-weekly sync, freshness monitoring, and developed marketing admin portal with chatbot controls, analytics dashboard (intent distribution, latency, click tracking), and executive-level reporting. · Implemented full MLOps & observability using Langfuse, Azure SQL, CI/CD, and blue-green deployments; achieved 99.5% uptime SLA.",
            impact: [
                "**100+ Daily Conversations** handled",
                "**~30% Reduction** in L1 tickets",
                "**70%+ High-Confidence** detection",
                "**p95 <5s** response time",
                "**~25% Accuracy** improvement",
                "**99.5% Uptime** SLA"
            ],
            techStack: ["Python", "LLM", "LangChain", "Langflow", "Qdrant", "DSPy", "Langfuse", "Azure"],
            architectureDiagram: "User → Intent Classifier (5D) → [Specialized Agents] → Hybrid Retrieval → Response"
        },
        {
            id: "improva-arm",
            title: "Healthcare Data Quality & Anomaly Detection Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low confidence (58% auto-approval) and high manual review load, requiring explainable AI outcomes in resource-constrained environments.",
            solution: "· Architected production-grade Association Rule Mining system with adaptive algorithm selection (HMine/Apriori/FP-Growth) and sparse matrix optimization. · Developed deterministic Triple-Frequency Validation Framework combining domain patterns, geo-spatial clustering, and facility embeddings validated by Fisher's Exact Test. · Integrated LLM-Web Search Agent for autonomous long-tail resolution and confidence-based routing with automated Cartesian validation.",
            impact: [
                "**75-85% Auto-Approval**",
                "**50-60% Workload Reduction** for manual reviews",
                "**1.15M+ Providers** processed"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"],
            architectureDiagram: "Raw Data → Adaptive ARM → Triple Validation → [LLM Agent] → Validated Mappings"
        },
        {
            id: "improva-idp",
            title: "Automatic Provider Extraction (IDP)",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual extraction of healthcare provider rosters from complex documents was slow (40+ hrs/week), error-prone, and costly, with inconsistent data quality across diverse document formats.",
            solution: "· Architected production-grade Intelligent Document Processing system leveraging multi-stage LLM pipelines with adaptive difficulty classification (table density analysis, row/column heuristics) and Retrieval-Augmented Generation for long-context documents. · Implemented zero-shot Prompt Engineering with LLMs using thinking budgets and robust post-processing validation (NPI APIs, USPS standardization).",
            impact: [
                "**95%+ F1 Score** across 8 structured fields",
                "**85% Reduction** in manual effort (40+ hrs/week saved)"
            ],
            techStack: ["LLM", "GPT-4", "Claude", "RAG"],
            architectureDiagram: "Upload → Difficulty Classify → [LLM/RAG Pipeline] → Validation → JSON Output"
        },
        {
            id: "cyber-voice",
            title: "Clinical AI Voice Assistant (Mental Health Support)",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Need for privacy-preserving, low-latency mental health support agent without cloud dependency, maintaining clinical safety compliance and therapeutic continuity on consumer hardware.",
            solution: "· Engineered local-first Edge AI system leveraging Small Language Models (Llama-3/Qwen-3/Mistral) with multi-agent orchestration and dynamic Prompt Engineering chains. · Architected real-time Voice-to-Voice pipeline combining Faster Whisper ASR with streaming TTS and custom Voice Activity Detection. · Implemented deterministic three-tier risk classification with privacy-preserving local RAG for clinical protocol grounding (CBT/DBT).",
            impact: [
                "**<2s End-to-End Latency** for seamless turn-taking",
                "**100% Data Sovereignty** (zero cloud dependency)"
            ],
            techStack: ["Python", "PyTorch", "Faster Whisper", "Llama-3"],
            architectureDiagram: "Audio → VAD → Whisper → Risk Classify → SLM Agent → TTS"
        },
        {
            id: "research-search",
            title: "Search & Retrieval For Food App (Research and Analysis)",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Cold-start problem and poor recall in large-scale e-commerce discovery, with high zero-result query rates and inability to handle semantically ambiguous searches.",
            solution: "· Designed distributed search architecture with Apache Solr capable of indexing 500K+ documents, formulating novel Hybrid Ranking Algorithm combining BM25 probabilistic retrieval with TF-IDF vector similarity. · Modeled real-time data ingestion pipeline integrating PostgreSQL, MongoDB, and Redis, and prototyped Context-Aware Re-ranking Strategy with temporal decay and popularity bias assessment.",
            impact: [
                "**40% Recall Improvement** for ambiguous queries",
                "**<200ms Latency** at 10K+ QPS (simulated)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL"],
            architectureDiagram: "Query → [BM25 + TF-IDF] → Hybrid Rank → Re-rank → Results"
        },
        {
            id: "cyber-logistics",
            title: "Scalable Last-Mile Logistics Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Inefficient routing for high-volume last-mile logistics with time-window, capacity, and priority constraints led to high fuel costs, missed SLAs, and poor driver efficiency.",
            solution: "· Architected high-throughput route optimization engine using Google OR-Tools and Guided Local Search metaheuristic for Vehicle Routing Problems. · Developed predictive service time model with 5+ features (weight, volume, spatial density, fragility) and engineered distributed geospatial pipeline with multi-provider fallback (OSM, Nominatim, Photon, Mapbox) with localized caching and vectorized NumPy operations.",
            impact: [
                "**15% Cost Reduction** in fleet operations",
                "**85% Latency Drop** (15s → 2s) for distance matrix"
            ],
            techStack: ["Python", "Google OR-Tools", "OSRM", "NumPy", "Pandas"],
            architectureDiagram: "Orders → Geo-coding → Distance Matrix → VRP Solver → Routes"
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
