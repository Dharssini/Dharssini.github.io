export const resumeData = {
    personalInfo: {
        name: "Dharssini Karthikeyan",
        title: "AI Research Scientist & Applied AI Engineer",
        location: "Coimbatore, Tamil Nadu, India",
        phone: "+91 7695890560",
        email: "dharssinikarthikeyan@gmail.com",
        github: "Dharssini",
        linkedin: "dharssini-karthikeyan",
        quote: "Bridging the gap between theoretical AI research and scalable, intelligent systems."
    },
    summary: "Research-driven Applied AI Engineer with a strong foundation in Generative AI, Large Language Models (LLMs), and Multi-Agent Systems. Proven track record of building scalable, privacy-first AI solutions for healthcare and enterprise domains. Expert in optimizing inference latency, creating novel retrieval algorithms (RAG), and building robust MLOps pipelines. Committed to advancing the field of AI through hypothesis-driven experimentation and rigorous evaluation.",
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
            { label: "Algorithm Design", description: "Created routing rules based on confidence (70/50/30 thresholds) and layered search using file details, balancing accuracy and completeness in RAG systems." },
            { label: "Safety & Alignment", description: "Built strict safety filters and fact-checking systems, ensuring compliance with strict healthcare data standards and minimizing hallucinations." },
            { label: "Systems Architecture", description: "Built fast processing pipelines and location-based caching, reducing system latency by 80% for high-traffic workloads." }
        ]
    },
    experience: [
        {
            company: "Improva",
            role: "AI Engineer",
            location: "Dover, Delaware, USA (Remote)",
            period: "Apr 2025 - Present",
            bullets: [
                "**Enterprise Multi-Agent RAG System:** Built a Multi-Agent RAG System managed using **LangGraph**, reducing L1 support tickets by **30%**. Implemented a detailed intent classifier and optimized **Qdrant** search settings, achieving **fast response times (<5s)** and a **25% increase in accuracy**.",
                "**Adaptive Association Rule Mining:** Created a scalable data mining pipeline utilizing **FP-Growth** and efficient memory usage to process 1.15M+ healthcare records. Established a strict validity framework that increased auto-approval rates to **85%**.",
                "**Intelligent Document Processing (IDP):** Established a scalable IDP workflow using multi-stage **LLM pipelines** and routing based on complexity. Achieved **95%+ accuracy** in entity extraction through zero-shot **Prompt Engineering** and automated verification loops."
            ],
            isAnchor: true
        },
        {
            company: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            location: "Remote, Sweden",
            period: "Jan 2025 - Present",
            bullets: [
                "**Privacy-Preserving Edge AI:** Developed a Private Local AI voice assistant using efficient **Small Language Models (SLMs)** like Llama-3 and Mistral. Achieved **<2s speed** by optimizing local processing chains and implementing **Voice Activity Detection (VAD)**.",
                "**Hybrid Search Algorithms:** Created a novel **Mixed Ranking Method** combining keyword search and vector similarity within **Apache Solr**, indexing 500K+ documents. Solved the cold-start problem and improved results for unclear queries by **40%**.",
                "**Scalable Optimization Engine:** Built a High-speed route planner using **Google OR-Tools** and advanced logic. Reduced fleet operational costs by **15%** through fast map calculations and distributed caching."
            ]
        },
        {
            company: "RNDsoftech",
            role: "AI Engineer Intern",
            location: "On-site, Coimbatore",
            period: "Dec. 2024 - Mar. 2025",
            bullets: [
                "**OCR Pipeline Optimization:** Automated document reading using **OCDRNet (NVIDIA TAO)** on **Triton Inference Server**. Improved accuracy through advanced image cleanup and model size reduction.",
                "**Document Layout Analysis:** Optimized document sorting using **LayoutLM**, extending text handling capabilities and fine-tuning models on specific datasets.",
                "**LLM Retrieval System:** Developed an LLM-powered search system leveraging **QLoRA fine-tuning**, reducing manual information extraction effort by **70%**."
            ]
        },
        {
            company: "Samsung PRISM",
            role: "R&D Intern",
            location: "Remote",
            period: "Aug. 2023 - Apr. 2024",
            bullets: [
                "**Log Analysis Tooling:** Created Python-based tools to automate log file processing and KPI calculation, resulting in a **50% reduction** in manual analysis time.",
                "**Data Reporting System:** Implemented a robust data extraction and automated reporting system, improving data processing efficiency and visualization capabilities by **40%**."
            ]
        },
        {
            company: "Buckman",
            role: "Data Science Intern",
            location: "Chennai, India",
            period: "Jun. 2023 - Oct. 2023",
            bullets: [
                "**Time-Series Forecasting:** Built and evaluated **9 different Time-Series Models** to predict sales volumes, optimizing inventory management strategies.",
                "**Predictive Analytics:** Improved forecast accuracy by **20-30%** via Customer Lifetime Value (CLV) analysis and achieved a **10%** improvement using pattern matching techniques.",
                "**Advanced Algorithms:** Applied specialized algorithms to handle irregular demand patterns and enhance model reliability."
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
        { name: "Google Photos Clone", link: "https://github.com/Dharssini/GooglePhotosClone", desc: "Implemented facial recognition achieving >90% accuracy on standard benchmarks." },
        { name: "FineTuning Phi3", link: "https://dharssini.github.io/PortfolioWebsite/#/project/finetuning-phi3", desc: "Optimized Phi-3 Mini on biology dataset for specific content generation." },
        { name: "Transformer Scratch", link: "https://dharssini.github.io/PortfolioWebsite/#/project/transformer-scratch", desc: "Built 'Attention Is All You Need' architecture from scratch in PyTorch." },
        { name: "DeepSeekV3", link: "https://dharssini.github.io/PortfolioWebsite/#/project/deepseek-v3", desc: "Implemented architecture with advanced attention mechanisms, model optimization, and reinforcement learning." }
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
            solution: "· Deployed a resilient **multi-agent RAG chatbot** to automate visitor engagement, replacing manual marketing support and reducing L1 tickets by ~30% by designing a **detailed intent classifier** with **routing based on confidence** across 8 specialized agents (sales, support, clarification, feedback) · Optimized **Qdrant** search settings to resolve speed issues, achieving fast response times (<5s) without compromising accuracy. · Implemented **hybrid search** (keyword + meaning) with **dynamic database selection**, re-ranking, and relevance scoring, improving answer accuracy by ~25% and reducing errors. · Crafted structured prompt templates (**50 to 120 tokens/agent**) with optimization, model tuning, source citation extraction, and controlled context windows for consistent, human-quality responses. · Built automated **knowledge base pipeline** processing 500+ healthcare documents with bi-weekly sync, freshness monitoring, and developed marketing admin portal with chatbot controls, analytics dashboard, and executive-level reporting. · Implemented full monitoring using **Langfuse**, **Azure SQL**, CI/CD, and blue-green deployments; achieved 99.5% uptime SLA.",
            impact: [
                "**100+ Daily Conversations** handled",
                "**~30% Reduction** in L1 tickets",
                "**70%+ High-Confidence** detection",
                "**Fast Response** (<5s)",
                "**~25% Accuracy** improvement",
                "**99.5% Uptime** SLA"
            ],
            techStack: ["Python", "LLM", "LangChain", "Langflow", "Qdrant", "DSPy", "Langfuse", "Azure"],
            architectureDiagram: "User → Intent Classifier → [Specialized Agents] → Hybrid Search → Response"
        },
        {
            id: "improva-arm",
            title: "Healthcare Data Quality & Anomaly Detection Pipeline",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Resolving 1.15M+ provider-system mappings across 394K+ domain combinations with low confidence (58% auto-approval) and high manual review load, requiring clear explanations in resource-constrained environments.",
            solution: "· Established a high-performance **data mining system** with adaptive algorithm selection and efficient memory usage. · Developed strict **Triple-Frequency Validation Framework** combining domain patterns, location clustering, and facility details validated by statistical tests. · Integrated **LLM-Web Search Agent** for autonomous long-tail resolution and **routing based on confidence** with automated validation.",
            impact: [
                "**75-85% Auto-Approval**",
                "**50-60% Workload Reduction** for manual reviews",
                "**1.15M+ Providers** processed"
            ],
            techStack: ["Python", "Pandas", "MLxtend", "SciPy"],
            architectureDiagram: "Raw Data → Adaptive Mining → Triple Validation → [LLM Agent] → Validated Mappings"
        },
        {
            id: "improva-idp",
            title: "Automatic Provider Extraction (IDP)",
            client: "Improva",
            role: "AI Engineer",
            period: "Apr 2025 - Present",
            location: "Dover, Delaware, USA (Remote)",
            problem: "Manual extraction of healthcare provider rosters from complex documents was slow (40+ hrs/week), error-prone, and costly, with inconsistent data quality across diverse document formats.",
            solution: "· Built an enterprise-ready **Intelligent Document Processing system** leveraging multi-stage **LLM pipelines** with routing based on complexity (table density analysis, row/column rules) and **Retrieval-Augmented Generation** for long documents. · Implemented zero-shot **Prompt Engineering** with LLMs using thinking budgets and robust post-processing validation.",
            impact: [
                "**95%+ Accuracy** across 8 structured fields",
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
            problem: "Need for private, fast mental health support agent without cloud dependency, maintaining clinical safety compliance and therapeutic continuity on consumer hardware.",
            solution: "· Created a **Private Local AI** system leveraging efficient **Small Language Models** (Llama-3/Qwen-3/Mistral) with multi-agent management and dynamic prompts. · Designed a real-time **Voice-to-Voice pipeline** combining speech-to-text with streaming text-to-speech and custom **Voice Activity Detection**. · Implemented strict three-tier risk classification with **private local search** for clinical protocol grounding.",
            impact: [
                "**<2s Speed** for seamless turn-taking",
                "**100% Data Privacy** (zero cloud dependency)"
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
            problem: "Cold-start problem and poor results in large-scale e-commerce discovery, with high zero-result query rates and inability to handle unclear searches.",
            solution: "· Formulated a distributed search architecture with **Apache Solr** capable of indexing 500K+ documents, developing a novel **Mixed Ranking Method** combining keyword search with vector similarity. · Modeled real-time data ingestion pipeline integrating databases, and prototyped **Context-Aware Re-ranking Strategy** with time-based adjustments.",
            impact: [
                "**40% Improvement** for unclear queries",
                "**<200ms Speed** at high traffic (simulated)"
            ],
            techStack: ["Apache Solr", "Lucene", "Redis", "PostgreSQL"],
            architectureDiagram: "Query → [Keyword + Vector] → Mixed Rank → Re-rank → Results"
        },
        {
            id: "cyber-logistics",
            title: "Scalable Last-Mile Logistics Optimization Engine",
            client: "CyberTranscend",
            role: "Founding System Design & Research Freelancer",
            period: "Jan 2025 - Present",
            location: "Remote, Sweden",
            problem: "Inefficient routing for high-volume last-mile logistics with time, capacity, and priority constraints led to high fuel costs, missed deadlines, and poor driver efficiency.",
            solution: "· Constructed a **High-speed route planner** using **Google OR-Tools** and local search logic for Vehicle Routing Problems. · Developed predictive service time model with 5+ features (weight, volume, density, fragility) and built distributed map pipeline with multi-provider fallback and local caching.",
            impact: [
                "**15% Cost Reduction** in fleet operations",
                "**85% Speed Improvement** (15s → 2s) for calculations"
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
