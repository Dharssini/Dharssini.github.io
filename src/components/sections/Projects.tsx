const projects = [
  {
    id: 1,
    title: 'Mini GPT: Training a Language Model from Scratch',
    tagline: 'Decoder-only transformer trained on custom dataset',
    description: 'Built and trained a small GPT-like model (12M parameters) from scratch using PyTorch. Includes custom tokenizer, attention visualization, and interactive text generation.',
    problem: 'Most engineers use pretrained models without understanding their internals. I wanted to prove deep knowledge by building one from first principles.',
    approach: [
      'Implemented transformer decoder with multi-head attention',
      'Created custom BPE tokenizer',
      'Trained on 10M tokens of code documentation',
      'Added attention visualization dashboard',
      'Deployed with interactive demo',
    ],
    techStack: ['PyTorch', 'NumPy', 'Transformers', 'Gradio', 'Weights & Biases'],
    metrics: [
      { label: 'Parameters', value: '12M' },
      { label: 'Training Time', value: '8 hours' },
      { label: 'Final Loss', value: '2.34' },
      { label: 'GPU', value: 'RTX 3090' },
    ],
    highlights: [
      'Attention heads learned syntax patterns',
      'Generated coherent technical text',
      'Visualized what each layer learns',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#',
    },
    image: 'mini-gpt.png',
    featured: true,
  },
  {
    id: 2,
    title: 'RAG System with Evaluation Framework',
    tagline: 'Production-ready retrieval augmented generation',
    description: 'Built an enterprise-grade RAG system with comprehensive evaluation metrics. Handles 10K+ documents with hybrid search and re-ranking.',
    problem: 'RAG systems are trending, but most implementations lack proper evaluation. Built a system with measurable performance.',
    approach: [
      'Hybrid retrieval (dense + sparse)',
      'Re-ranking with cross-encoder',
      'Chunk optimization experiments',
      'Custom evaluation metrics (recall@k, MRR, answer quality)',
      'A/B testing framework',
    ],
    techStack: ['LangChain', 'Pinecone', 'OpenAI', 'FAISS', 'FastAPI', 'React'],
    metrics: [
      { label: 'Recall@5', value: '92%' },
      { label: 'Answer Quality', value: '4.2/5' },
      { label: 'Avg Latency', value: '1.2s' },
      { label: 'Documents', value: '10K+' },
    ],
    highlights: [
      'Hybrid search improved recall by 23%',
      'Re-ranking boosted relevance by 18%',
      'Built comprehensive evaluation suite',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#',
    },
    image: 'rag-system.png',
    featured: true,
  },
  {
    id: 3,
    title: 'LLM-Powered Autonomous Agent',
    tagline: 'Multi-step reasoning with tool use',
    description: 'Built an AI agent that can autonomously break down complex tasks, use tools, and maintain conversation context.',
    problem: 'Showcase practical AI engineering — going beyond simple chatbots to agents with real capabilities.',
    approach: [
      'ReAct pattern for reasoning + action',
      'Function calling for tool use',
      'Chain-of-thought logging',
      'Error recovery mechanisms',
      'Interactive UI with thought visualization',
    ],
    techStack: ['GPT-4', 'LangChain', 'Python', 'FastAPI', 'WebSockets', 'Next.js'],
    metrics: [
      { label: 'Task Success', value: '87%' },
      { label: 'Avg Steps', value: '4.2' },
      { label: 'Tool Calls', value: '12 types' },
      { label: 'Recovery Rate', value: '73%' },
    ],
    highlights: [
      'Handles multi-step tasks autonomously',
      'Graceful error recovery',
      'Real-time thought visualization',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#',
    },
    image: 'ai-agent.png',
    featured: true,
  },
  {
    id: 4,
    title: 'Attention Visualization Studio',
    tagline: 'Interactive transformer attention explorer',
    description: 'Web app for visualizing attention patterns in transformers. Upload text, see what each head learns across layers.',
    problem: 'Attention is hard to understand conceptually. Built a tool that makes it visual and interactive.',
    approach: [
      'Load custom transformer models',
      'Extract attention weights from all layers',
      'Interactive heatmap visualization',
      'Head-by-head exploration',
      'Pattern analysis (syntax, semantics, etc.)',
    ],
    techStack: ['PyTorch', 'Transformers', 'D3.js', 'React', 'Flask'],
    metrics: [
      { label: 'Layers Shown', value: '12' },
      { label: 'Heads per Layer', value: '12' },
      { label: 'Models', value: '5+' },
      { label: 'FPS', value: '60' },
    ],
    highlights: [
      'Revealed syntax vs semantic heads',
      'Beautiful, intuitive interface',
      'Educational tool for learners',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#',
    },
    image: 'attention-viz.png',
    featured: false,
  },
  {
    id: 5,
    title: 'Instruction-Tuned Llama with LoRA',
    tagline: 'Efficient fine-tuning for specialized tasks',
    description: 'Fine-tuned Llama 2 (7B) on custom instruction dataset using LoRA. Achieved strong performance with minimal resources.',
    problem: 'Demonstrate ability to work with large pretrained models and apply modern fine-tuning techniques.',
    approach: [
      'Curated 5K instruction-response pairs',
      'Implemented LoRA (rank=8)',
      'Quantization with bitsandbytes',
      'Training on single GPU',
      'Before/after behavior analysis',
    ],
    techStack: ['Llama 2', 'PEFT', 'bitsandbytes', 'Hugging Face', 'PyTorch'],
    metrics: [
      { label: 'Parameters Trained', value: '0.3M' },
      { label: 'GPU Memory', value: '16GB' },
      { label: 'Training Time', value: '12 hours' },
      { label: 'Improvement', value: '+34%' },
    ],
    highlights: [
      'LoRA reduced trainable params by 99.5%',
      'Model learned task-specific behavior',
      'Maintained general knowledge',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#',
    },
    image: 'lora-llama.png',
    featured: false,
  },
  {
    id: 6,
    title: 'FineTuning Phi3',
    tagline: 'Optimized Phi-3 Mini on biology dataset',
    description: 'Optimized Phi-3 Mini on biology dataset for specific content generation. Used QLoRA for efficient training.',
    problem: 'Need to adapt a small open-source language model to understand and generate accurate biology content without excessive compute.',
    approach: [
      'Prepared biological text dataset',
      'Configured quantization and LoRA parameters',
      'Fine-tuned model using Hugging Face PEFT',
      'Evaluated output quality and perplexity',
    ],
    techStack: ['Phi-3', 'PyTorch', 'PEFT', 'Hugging Face'],
    metrics: [
      { label: 'Parameters', value: '3.8B' },
      { label: 'Domain', value: 'Biology' },
      { label: 'Time', value: '6 hours' },
      { label: 'Method', value: 'QLoRA' },
    ],
    highlights: [
      'Effective domain adaptation',
      'Low memory footprint',
      'High quality specialized text generation',
    ],
    links: {
      github: '#',
      demo: '#',
      video: '#',
      blog: '#/blog/fine-tuning-best-practices',
    },
    image: 'phi3.png',
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-dark-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          Real-world applications demonstrating deep understanding and practical engineering skills
        </p>
      </div>

      {/* What recruiters will see */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">What Recruiters See in These Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-2">
              <span className="text-accent-400">✓</span>
              <span className="text-dark-300">Deep technical understanding (from-scratch implementations)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent-400">✓</span>
              <span className="text-dark-300">Production engineering (deployment, metrics, evaluation)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent-400">✓</span>
              <span className="text-dark-300">Modern AI stack (LLMs, RAG, agents, fine-tuning)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent-400">✓</span>
              <span className="text-dark-300">Communication skills (videos, blogs, demos)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`card hover:scale-[1.01] ${project.featured ? 'border-primary-500/50' : ''}`}
          >
            {project.featured && (
              <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full mb-4">
                Featured Project
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Content */}
              <div>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary-400 font-medium mb-4">{project.tagline}</p>
                <p className="text-dark-300 mb-6">{project.description}</p>

                {/* Problem */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-2">The Problem:</h4>
                  <p className="text-sm text-dark-400">{project.problem}</p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-2">My Approach:</h4>
                  <ul className="space-y-1">
                    {project.approach.map((step, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-dark-400">
                        <span className="text-primary-400 mt-0.5">→</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a href={project.links.github} className="btn-secondary text-sm py-2 px-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </span>
                  </a>
                  <a href={project.links.demo} className="btn-secondary text-sm py-2 px-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </span>
                  </a>
                  <a href={project.links.video} className="btn-secondary text-sm py-2 px-4">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Video
                    </span>
                  </a>
                </div>
              </div>

              {/* Right: Metrics & Highlights */}
              <div className="space-y-6">
                {/* Metrics */}
                <div className="bg-dark-900/50 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-4">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-dark-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-dark-900/50 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-4">Key Highlights:</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-dark-400">
                        <span className="text-accent-400 mt-0.5">★</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placeholder for project image */}
                <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg h-48 flex items-center justify-center border border-primary-500/30">
                  <span className="text-dark-500 text-sm">Project Screenshot</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
