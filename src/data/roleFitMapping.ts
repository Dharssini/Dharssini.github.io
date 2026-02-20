import type { RoleType, RoleSignal, RoleFitReport, ContentReference } from '../types/intent';

// Role fit mapping - connects roles to relevant content
export const roleFitMap: Record<RoleType, {
  strongSignals: ContentReference[];
  relevantDepth: ContentReference[];
  communicationStyle: ContentReference[];
  gaps: string[];
  overallFit: 'strong' | 'good' | 'moderate';
}> = {
  'ml-engineer': {
    strongSignals: [
      { type: 'project', id: 'multiagent-healthcare', reason: 'Scalable multi-agent system with routing based on confidence', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'QLoRA fine-tuning reducing manual effort by 70%', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'Full-stack platform with 5-tier crisis detection', priority: 'high' },
      { type: 'project', id: 'location-chatbot', reason: '80% latency reduction through intelligent caching', priority: 'medium' },
    ],
    relevantDepth: [
      { type: 'skill', id: 'qora-finetuning', reason: 'Parameter-efficient fine-tuning expertise', priority: 'high' },
      { type: 'skill', id: 'vector-search', reason: 'Advanced search with multiple fusion strategies', priority: 'high' },
      { type: 'project', id: 'ocr-pipeline', reason: 'Scalable OCR deployment on Triton', priority: 'medium' },
    ],
    communicationStyle: [
      { type: 'skill', id: 'prompt-engineering', reason: 'Systematic prompt design for enterprise systems', priority: 'medium' },
    ],
    gaps: ['Limited public cloud infrastructure visibility (primarily Azure)'],
    overallFit: 'strong',
  },
  'research-engineer': {
    strongSignals: [
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'QLoRA domain adaptation research', priority: 'high' },
      { type: 'research', id: 'safety-alignment', reason: 'Multi-layered safety systems for therapeutic AI', priority: 'high' },
      { type: 'research', id: 'embedding-optimization', reason: 'Efficient vector search strategies', priority: 'high' },
      { type: 'skill', id: 'vector-search', reason: 'RRF, weighted fusion, cascade retrieval', priority: 'medium' },
    ],
    relevantDepth: [
      { type: 'skill', id: 'qora-finetuning', reason: 'LoRA/QLoRA implementation from research', priority: 'high' },
      { type: 'project', id: 'multiagent-healthcare', reason: '7 specialized agents with hybrid vector search', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'FAISS-powered RAG with 34 psychological dimensions', priority: 'medium' },
    ],
    communicationStyle: [
      { type: 'research', id: 'safety-alignment', reason: 'Research mindset with practical implementation', priority: 'high' },
    ],
    gaps: ['Limited academic publications (industry-focused experience)'],
    overallFit: 'strong',
  },
  'ai-product-engineer': {
    strongSignals: [
      { type: 'project', id: 'multiagent-healthcare', reason: 'LangFlow orchestration with 7 specialized agents', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'WebSocket voice + REST chat with crisis detection', priority: 'high' },
      { type: 'achievement', id: 'pdf-highlighting', reason: '45% UX enhancement with source highlighting', priority: 'medium' },
      { type: 'project', id: 'analytics-dashboard', reason: 'React dashboard with 17+ real-time visualizations', priority: 'medium' },
    ],
    relevantDepth: [
      { type: 'project', id: 'location-chatbot', reason: 'Multi-provider geocoding with 95%+ accuracy', priority: 'high' },
      { type: 'achievement', id: 'llm-excel-automation', reason: 'Hybrid LLM+ML for data irregularities', priority: 'medium' },
      { type: 'skill', id: 'microservices', reason: '5 containerized microservices on Azure', priority: 'high' },
    ],
    communicationStyle: [
      { type: 'skill', id: 'prompt-engineering', reason: 'User-facing prompt design', priority: 'medium' },
    ],
    gaps: ['Limited mobile experience'],
    overallFit: 'strong',
  },
  'founding-engineer': {
    strongSignals: [
      { type: 'project', id: 'multiagent-healthcare', reason: 'End-to-end multi-agent system design', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'Full-stack microservices with safety protocols', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: '$4,500+ operational savings', priority: 'high' },
      { type: 'skill', id: 'microservices', reason: 'Enterprise deployment on Azure with monitoring', priority: 'high' },
    ],
    relevantDepth: [
      { type: 'project', id: 'route-optimization', reason: 'OR-Tools optimization with adaptive strategies', priority: 'medium' },
      { type: 'project', id: 'location-chatbot', reason: '80% latency reduction through caching', priority: 'medium' },
      { type: 'project', id: 'analytics-dashboard', reason: 'Full-stack React + Node.js with RBAC', priority: 'medium' },
    ],
    communicationStyle: [
      { type: 'skill', id: 'prompt-engineering', reason: 'Rapid prototyping mindset', priority: 'medium' },
    ],
    gaps: ['Limited fundraising/GTM experience'],
    overallFit: 'good',
  },
  'research-scientist': {
    strongSignals: [
      { type: 'research', id: 'safety-alignment', reason: 'Multi-layered safety framework design', priority: 'high' },
      { type: 'research', id: 'embedding-optimization', reason: '768-dim optimization with recall@k metrics', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'QLoRA domain adaptation', priority: 'high' },
    ],
    relevantDepth: [
      { type: 'skill', id: 'qora-finetuning', reason: 'Parameter-efficient fine-tuning theory', priority: 'high' },
      { type: 'skill', id: 'vector-search', reason: 'Multiple fusion strategies research', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: '34 psychological dimensions with FAISS', priority: 'medium' },
    ],
    communicationStyle: [
      { type: 'research', id: 'safety-alignment', reason: 'Rigorous safety evaluation framework', priority: 'high' },
    ],
    gaps: ['Limited peer-reviewed publications', 'Industry-focused vs pure research'],
    overallFit: 'moderate',
  },
  'other': {
    strongSignals: [
      { type: 'project', id: 'multiagent-healthcare', reason: 'Flagship multi-agent system', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'RAG with fine-tuning', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'Healthcare AI with safety', priority: 'high' },
    ],
    relevantDepth: [
      { type: 'skill', id: 'qora-finetuning', reason: 'LLM fine-tuning expertise', priority: 'medium' },
      { type: 'skill', id: 'vector-search', reason: 'Vector search strategies', priority: 'medium' },
    ],
    communicationStyle: [
      { type: 'skill', id: 'prompt-engineering', reason: 'Prompt engineering skills', priority: 'medium' },
    ],
    gaps: [],
    overallFit: 'good',
  },
};

// Signal priority mapping - what content best demonstrates each signal
export const signalMap: Record<RoleSignal, ContentReference[]> = {
  'deep-learning-fundamentals': [
    { type: 'skill', id: 'qora-finetuning', reason: 'LoRA/QLoRA theory and implementation', priority: 'high' },
    { type: 'skill', id: 'vector-search', reason: 'Search optimization strategies', priority: 'high' },
    { type: 'research', id: 'embedding-optimization', reason: '768-dimensional embedding research', priority: 'medium' },
  ],
  'system-design': [
    { type: 'skill', id: 'microservices', reason: '5 containerized microservices on Azure', priority: 'high' },
    { type: 'project', id: 'multiagent-healthcare', reason: 'Multi-agent system design', priority: 'high' },
    { type: 'project', id: 'mental-health-platform', reason: 'Microservices with WebSocket + REST', priority: 'high' },
  ],
  'research-depth': [
    { type: 'research', id: 'safety-alignment', reason: '5-tier risk assessment framework', priority: 'high' },
    { type: 'research', id: 'embedding-optimization', reason: 'Vector search optimization research', priority: 'high' },
    { type: 'achievement', id: 'rag-document-retrieval', reason: 'QLoRA domain adaptation', priority: 'medium' },
  ],
  'shipping-speed': [
    { type: 'achievement', id: 'rag-document-retrieval', reason: '$4,500 savings, 70% effort reduction', priority: 'high' },
    { type: 'project', id: 'location-chatbot', reason: '80% latency reduction', priority: 'high' },
    { type: 'achievement', id: 'pdf-highlighting', reason: '45% UX enhancement', priority: 'medium' },
  ],
  'communication': [
    { type: 'skill', id: 'prompt-engineering', reason: 'Clear prompt design patterns', priority: 'high' },
    { type: 'research', id: 'safety-alignment', reason: 'Structured safety documentation', priority: 'medium' },
  ],
  'debugging-resilience': [
    { type: 'project', id: 'mental-health-platform', reason: '5-tier crisis detection with fallbacks', priority: 'high' },
    { type: 'project', id: 'location-chatbot', reason: 'Multi-provider fallback system', priority: 'high' },
    { type: 'skill', id: 'vector-search', reason: '6-tier cascade retrieval', priority: 'medium' },
  ],
};

// Generate role fit report based on role type and selected signals
export function generateRoleFitReport(
  roleType: RoleType,
  selectedSignals?: RoleSignal[],
  customRole?: string
): RoleFitReport {
  const baseReport = roleFitMap[roleType];

  let content = { ...baseReport };

  // If signals are selected, filter and rerank content
  if (selectedSignals && selectedSignals.length > 0) {
    const signalContent = selectedSignals.flatMap(signal => signalMap[signal] || []);

    // Add signal-specific content to relevant sections
    content.relevantDepth = [
      ...content.relevantDepth,
      ...signalContent.filter(item =>
        !content.relevantDepth.some(existing => existing.id === item.id)
      ),
    ].slice(0, 5); // Limit to top 5
  }

  return {
    roleType: customRole || getRoleDisplayName(roleType),
    strongSignals: content.strongSignals,
    relevantDepth: content.relevantDepth,
    communicationStyle: content.communicationStyle,
    potentialGaps: content.gaps,
    overallFit: content.overallFit,
    customNotes: customRole ? 'Custom role - general fit assessment' : undefined,
  };
}

function getRoleDisplayName(roleType: RoleType): string {
  const displayNames: Record<RoleType, string> = {
    'ml-engineer': 'ML Engineer (Scalable Systems)',
    'research-engineer': 'Research Engineer (Applied Research)',
    'ai-product-engineer': 'AI Product Engineer (Prototype → Scale)',
    'founding-engineer': 'Founding Engineer (AI Startup)',
    'research-scientist': 'Research Scientist (Deep Research)',
    'other': 'Custom Role',
  };
  return displayNames[roleType];
}

// Intent-based content recommendations
export function getIntentRecommendations(
  intent: string,
  timeConstraint: string
): ContentReference[] {
  const intentMap: Record<string, ContentReference[]> = {
    'depth-understanding': [
      { type: 'research', id: 'safety-alignment', reason: 'Multi-layered safety research', priority: 'high' },
      { type: 'research', id: 'embedding-optimization', reason: 'Search optimization', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'QLoRA fine-tuning research', priority: 'high' },
      { type: 'skill', id: 'qora-finetuning', reason: 'Deep technical knowledge', priority: 'medium' },
      { type: 'skill', id: 'vector-search', reason: 'Multiple fusion strategies', priority: 'medium' },
    ],
    'build-systems': [
      { type: 'project', id: 'multiagent-healthcare', reason: 'Complex multi-agent system', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'Full-stack microservices', priority: 'high' },
      { type: 'skill', id: 'microservices', reason: 'Enterprise architecture', priority: 'high' },
      { type: 'project', id: 'ocr-pipeline', reason: 'Triton deployment', priority: 'medium' },
    ],
    'research-mindset': [
      { type: 'research', id: 'safety-alignment', reason: 'Safety framework design', priority: 'high' },
      { type: 'research', id: 'embedding-optimization', reason: 'Optimization research', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'Domain adaptation', priority: 'medium' },
    ],
    'teaching-communication': [
      { type: 'skill', id: 'prompt-engineering', reason: 'Clear design patterns', priority: 'high' },
      { type: 'research', id: 'safety-alignment', reason: 'Structured documentation', priority: 'medium' },
    ],
    'quick-signal': [
      { type: 'project', id: 'multiagent-healthcare', reason: 'Flagship project', priority: 'high' },
      { type: 'achievement', id: 'rag-document-retrieval', reason: 'Key achievement', priority: 'high' },
      { type: 'project', id: 'mental-health-platform', reason: 'Technical depth', priority: 'medium' },
    ],
  };

  const baseContent = intentMap[intent] || intentMap['quick-signal'];

  // Filter by time constraint
  const timeConstraintMap: Record<string, number> = {
    '2min': 2,
    '5min': 3,
    '10min': 5,
    '30min': 8,
    'deep-dive': 100,
  };

  const limit = timeConstraintMap[timeConstraint] || 3;
  return baseContent.slice(0, limit);
}
