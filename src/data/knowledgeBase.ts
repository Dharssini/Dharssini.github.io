export interface KnowledgeItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
  type: 'project' | 'skill' | 'achievement' | 'research';
  details?: string[];
  metrics?: string[];
  technologies?: string[];
  link?: string;
  company?: string;
  date?: string;
}

export const topics = [
  { id: 'nlp', name: 'NLP', icon: '🗣️', color: 'primary' },
  { id: 'cv', name: 'Computer Vision', icon: '👁️', color: 'accent' },
  { id: 'robotics', name: 'Robotics', icon: '🤖', color: 'primary' },
  { id: 'llm', name: 'LLM & APIs', icon: '🧠', color: 'accent' },
  { id: 'quantization', name: 'Quantization', icon: '⚡', color: 'primary' },
  { id: 'rag', name: 'RAG Systems', icon: '📚', color: 'accent' },
  { id: 'multiagent', name: 'Multi-Agent', icon: '🤝', color: 'primary' },
  { id: 'mlops', name: 'MLOps', icon: '🔧', color: 'accent' },
  { id: 'optimization', name: 'Optimization', icon: '🚀', color: 'primary' },
  { id: 'healthcare', name: 'Healthcare AI', icon: '🏥', color: 'accent' },
];

export const knowledgeBase: KnowledgeItem[] = [
  // Multi-Agent Systems
  {
    id: 'multiagent-healthcare',
    title: 'Multi-Agent AI System for Healthcare',
    description: 'LangFlow/LangChain system with 7 specialized agents (support, sales, information) using confidence-based routing',
    topics: ['multiagent', 'llm', 'rag', 'healthcare', 'nlp'],
    type: 'project',
    details: [
      'Built confidence-based routing with 70%/50%/30% thresholds',
      'Implemented hybrid search with 3 fusion strategies (RRF, weighted, cascade)',
      'Implemented 768-dimensional embeddings for semantic search',
      'Integrated conversation histories and knowledge base contexts',
    ],
    technologies: ['LangFlow', 'LangChain', 'Qdrant', 'FastAPI', 'React', 'TypeScript'],
    company: 'Improva',
    date: 'Apr 2025 - Present',
  },
  {
    id: 'mental-health-platform',
    title: 'Mental Health AI Platform',
    description: 'Full-stack platform with WebSocket voice + REST chat interfaces and 5-tier crisis detection system',
    topics: ['multiagent', 'nlp', 'rag', 'healthcare', 'mlops'],
    type: 'project',
    details: [
      '5-tier crisis detection (suicide, self-harm, violence) across 40+ keywords',
      'FAISS-powered search with 34 psychological dimensions (IDG, KEDS)',
      'Microservices architecture: FastAPI gateway, Faster Whisper ASR, TTS',
      'Emergency protocols and safety alignment systems',
    ],
    technologies: ['FastAPI', 'FAISS', 'WebSocket', 'SQLite', 'Faster Whisper', 'Docker'],
    metrics: ['5-tier crisis detection', '34 psychological dimensions', '40+ safety keywords'],
    company: 'CyberTranscend',
    date: 'Jan 2025 - Present',
  },

  // RAG Systems
  {
    id: 'rag-document-retrieval',
    title: 'LLM-Powered Document Retrieval with QLoRA',
    description: 'Domain-adaptive RAG system with QLoRA fine-tuning reducing manual effort by 70%',
    topics: ['rag', 'llm', 'quantization', 'nlp', 'optimization'],
    type: 'achievement',
    details: [
      'QLoRA fine-tuning for domain-specific document understanding',
      'Custom prompt engineering for improved retrieval accuracy',
      'Integrated with OCDRNet OCR pipeline on Triton Inference Server',
      'LayoutLM for enhanced document classification (512-token support)',
    ],
    metrics: ['$4,500+ operational savings', '70% manual effort reduction'],
    technologies: ['QLoRA', 'LangChain', 'Triton', 'LayoutLM', 'FastAPI', 'Ngrok'],
    company: 'RNDsoftech',
    date: 'Dec 2023 - Mar 2024',
  },
  {
    id: 'pdf-highlighting',
    title: 'PDF Source Highlighting with ML-Based Blocking',
    description: 'Enhanced enterprise chatbot with PDF source highlighting and out-of-scope query detection',
    topics: ['rag', 'nlp', 'llm'],
    type: 'achievement',
    details: [
      'ML-based out-of-scope blocking for query validation',
      'PDF source highlighting for evidence-based responses',
      'Grounded generation with RAG evidence checking',
    ],
    metrics: ['45% UX enhancement'],
    company: 'Improva',
    date: '2025',
  },

  // LLM & APIs
  {
    id: 'llm-excel-automation',
    title: 'Excel-to-Database Automation with Hybrid LLM+ML',
    description: 'Intelligent data extraction system overcoming irregular data patterns',
    topics: ['llm', 'nlp', 'optimization'],
    type: 'achievement',
    details: [
      'Hybrid LLM+ML approach for handling data irregularities',
      'Automated schema mapping and validation',
      'Error recovery and data quality improvements',
    ],
    metrics: ['32% accuracy improvement'],
    company: 'Improva',
    date: '2025',
  },
  {
    id: 'location-chatbot',
    title: 'Location-Aware Chatbot with Web Search',
    description: 'Intelligent chatbot integrating real-time web search and location services',
    topics: ['llm', 'nlp', 'multiagent', 'optimization'],
    type: 'project',
    details: [
      'Multi-provider geocoding (Nominatim, Photon, MapBox)',
      'Intelligent caching reducing response time by 80% (15s → 2s)',
      '95%+ geocoding accuracy',
      'Web search integration for real-time information',
    ],
    technologies: ['FastAPI', 'Redis', 'Nominatim', 'MapBox API'],
    metrics: ['80% latency reduction', '95%+ accuracy'],
    company: 'Improva',
    date: '2025',
  },

  // Computer Vision
  {
    id: 'ocr-pipeline',
    title: 'Scalable OCR Pipeline with OCDRNet',
    description: 'Automated document OCR using NVIDIA TAO framework on Triton Inference Server',
    topics: ['cv', 'mlops', 'optimization'],
    type: 'project',
    details: [
      'OCDRNet deployment on Triton Inference Server',
      'Optimized cleanup pipeline for higher accuracy',
      'Document classification with LayoutLM',
      'Production deployment with IIS/NSSM/FastAPI',
    ],
    technologies: ['OCDRNet', 'NVIDIA TAO', 'Triton', 'LayoutLM', 'FastAPI'],
    company: 'RNDsoftech',
    date: 'Dec 2023 - Mar 2024',
  },
  {
    id: 'sign-language',
    title: 'Sign Language Detection System',
    description: 'Real-time sign language recognition deployed on Heroku using Streamlit',
    topics: ['cv', 'nlp', 'healthcare'],
    type: 'project',
    details: [
      'AI for Assistive Technology implementation',
      'Real-time gesture recognition',
      'Streamlit web interface for accessibility',
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Streamlit', 'Heroku'],
    date: '2021',
  },

  // Optimization & MLOps
  {
    id: 'route-optimization',
    title: 'VRP Solver with Multi-Provider Geocoding',
    description: 'Google OR-Tools based route planner with location caching',
    topics: ['optimization', 'robotics', 'mlops'],
    type: 'project',
    details: [
      'Adaptive strategies: PATH_CHEAPEST_ARC (<50), PARALLEL_CHEAPEST_INSERTION (large-scale)',
      'OSRM API integration for real-time routing',
      'Capacity and time-window constraints',
      'Multi-provider fallback for reliability',
    ],
    technologies: ['Google OR-Tools', 'OSRM', 'Redis', 'FastAPI'],
    metrics: ['80% latency reduction', '15s → 2s response time'],
    company: 'CyberTranscend',
    date: 'Jan 2025 - Present',
  },
  {
    id: 'vector-search',
    title: 'Hybrid Search Architecture',
    description: 'Advanced vector search with multiple fusion strategies for optimal retrieval',
    topics: ['rag', 'optimization', 'mlops'],
    type: 'skill',
    details: [
      'RRF (Reciprocal Rank Fusion) for balanced results',
      'Weighted fusion for domain-specific prioritization',
      'Cascade retrieval with 6-tier fallback',
      '768-dimensional embeddings optimization',
    ],
    technologies: ['Qdrant', 'FAISS', 'Apache Solr'],
  },
  {
    id: 'microservices',
    title: 'Enterprise AI Microservices Architecture',
    description: 'Enterprise containerized deployment on Azure',
    topics: ['mlops', 'optimization'],
    type: 'skill',
    details: [
      '5 containerized microservices',
      'Azure deployment (ACI, App Service, Kubernetes)',
      'Health monitoring and async worker architecture',
      'JWT authentication with RBAC',
    ],
    technologies: ['Docker', 'Azure', 'Kubernetes', 'FastAPI', 'Node.js'],
    company: 'Improva',
  },

  // NLP & Language Models
  {
    id: 'qora-finetuning',
    title: 'QLoRA Fine-Tuning Expertise',
    description: 'Parameter-efficient fine-tuning for domain adaptation',
    topics: ['quantization', 'llm', 'nlp', 'optimization'],
    type: 'skill',
    details: [
      'LoRA and QLoRA implementation for memory efficiency',
      'Domain-adaptive prompt engineering',
      'Model quantization for inference optimization',
      'Custom training pipelines with MLflow tracking',
    ],
    technologies: ['QLoRA', 'PyTorch', 'Transformers', 'MLflow'],
  },
  {
    id: 'prompt-engineering',
    title: 'Advanced Prompt Engineering',
    description: 'Systematic prompt design for robust LLM systems',
    topics: ['llm', 'nlp'],
    type: 'skill',
    details: [
      'Chain-of-thought prompting',
      'Few-shot learning strategies',
      'Safety alignment and guardrails',
      'Domain-specific prompt templates',
    ],
  },

  // Data Science & Analytics
  {
    id: 'forecasting',
    title: 'Time-Series Forecasting for Inventory Optimization',
    description: 'Multi-model ensemble for sales prediction',
    topics: ['optimization'],
    type: 'project',
    details: [
      '9 forecasting models comparison',
      'CLV-based customer segmentation',
      'Matrix Profiling for pattern detection',
    ],
    metrics: ['20-30% MAPE improvement', '10% accuracy gain'],
    company: 'Buckman',
    date: 'Jun 2023 - Oct 2023',
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'React dashboard with 17+ visualizations for executive reporting',
    topics: ['mlops'],
    type: 'project',
    details: [
      'JWT authentication with RBAC',
      '17+ real-time visualizations using Recharts',
      'Event-driven tracking system',
      'Excel/CSV export functionality',
    ],
    technologies: ['React', 'TypeScript', 'Recharts', 'Node.js'],
    company: 'Improva',
  },

  // Research & Innovation
  {
    id: 'safety-alignment',
    title: 'AI Safety & Alignment Systems',
    description: 'Multi-layered safety systems for therapeutic AI',
    topics: ['healthcare', 'llm', 'nlp'],
    type: 'research',
    details: [
      '5-tier risk assessment framework',
      '40+ keyword crisis detection lexicon',
      'Rule-based + semantic safety filters',
      'Grounded generation with evidence checking',
    ],
  },
  {
    id: 'embedding-optimization',
    title: 'Embedding Optimization Research',
    description: 'Efficient vector search and embedding strategies',
    topics: ['rag', 'optimization', 'nlp'],
    type: 'research',
    details: [
      '768-dimensional embedding optimization',
      'Context compression techniques',
      'Recall@k evaluation metrics',
      'Faithfulness and hallucination detection',
    ],
  },
];

export function getTopicColor(topicId: string): string {
  const topic = topics.find(t => t.id === topicId);
  return topic?.color || 'primary';
}

export function filterByTopics(selectedTopics: string[]): KnowledgeItem[] {
  if (selectedTopics.length === 0) return knowledgeBase;

  return knowledgeBase.filter(item =>
    selectedTopics.some(topic => item.topics.includes(topic))
  );
}

export function getItemsByType(type: KnowledgeItem['type']): KnowledgeItem[] {
  return knowledgeBase.filter(item => item.type === type);
}

export function searchKnowledge(query: string): KnowledgeItem[] {
  const lowerQuery = query.toLowerCase();

  return knowledgeBase.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.topics.some(topic => topic.toLowerCase().includes(lowerQuery)) ||
    item.technologies?.some(tech => tech.toLowerCase().includes(lowerQuery)) ||
    item.company?.toLowerCase().includes(lowerQuery)
  );
}
