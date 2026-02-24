import { useState } from 'react';

const blogPosts = [
  {
    title: 'Understanding Attention: Queries, Keys, and Values Explained',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Deep Dive',
    description: 'Breaking down the query-key-value paradigm in attention mechanisms with clear intuitions and visualizations.',
    topics: ['Attention', 'Transformers', 'Fundamentals'],
    excerpt: 'Attention is the core innovation that powers modern NLP, but the query-key-value formulation can seem abstract. In this post, I explain the intuition behind why this design works so well...',
    link: '#',
    featured: true,
    type: 'blog' as const,
  },
  {
    title: 'Building Multi-Head Attention from Scratch in NumPy',
    date: '2024-12-10',
    readTime: '12 min read',
    category: 'Implementation',
    description: 'Step-by-step walkthrough of implementing multi-head attention without any deep learning libraries.',
    topics: ['Implementation', 'NumPy', 'Attention'],
    excerpt: 'The best way to understand attention is to build it yourself. In this hands-on guide, I implement multi-head attention using only NumPy, explaining every line of code...',
    link: '#',
    featured: true,
    type: 'blog' as const,
  },
  {
    title: 'Why My First Transformer Failed (and How I Fixed It)',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Lessons Learned',
    description: 'Common mistakes when training transformers and debugging strategies that actually work.',
    topics: ['Training', 'Debugging', 'Best Practices'],
    excerpt: 'My first attempt at training a transformer from scratch was a disaster - loss would spike, gradients would explode, and nothing seemed to work. Here\'s what I learned...',
    link: '#',
    featured: false,
    type: 'blog' as const,
  },
  {
    title: 'LoRA Explained: Mathematics and Implementation',
    date: '2024-11-28',
    readTime: '15 min read',
    category: 'Deep Dive',
    description: 'Understanding Low-Rank Adaptation (LoRA) for efficient fine-tuning of large language models.',
    topics: ['Fine-tuning', 'LoRA', 'Mathematics'],
    excerpt: 'LoRA achieves 99.9% parameter reduction during fine-tuning while maintaining performance. But how does it actually work? Let\'s dig into the math and implementation...',
    link: '#',
    featured: false,
    type: 'blog' as const,
  },
  {
    title: 'Fine-Tuning Best Practices',
    date: '2024-11-20',
    readTime: '10 min read',
    category: 'Best Practices',
    description: 'A comprehensive guide to preparing data, selecting models, and configuring hyperparameters for successful LLM fine-tuning.',
    topics: ['Fine-Tuning', 'LoRA', 'Best Practices'],
    excerpt: 'Fine-tuning large language models requires careful attention to data quality and hyperparameters...',
    link: '#/blog/fine-tuning-best-practices',
    featured: true,
    type: 'blog' as const,
  },
  {
    title: 'Fine-Tuning Examples',
    date: '2024-11-22',
    readTime: '5 min read',
    category: 'Implementation',
    description: 'Practical examples and code snippets for different fine-tuning tasks including chat, classification, and summarization.',
    topics: ['Fine-Tuning', 'Examples', 'Code'],
    excerpt: 'Real-world examples of how to format datasets and apply fine-tuning techniques for various generative AI tasks...',
    link: '#/blog/fine-tuning-examples',
    featured: false,
    type: 'blog' as const,
  },
  {
    title: 'Quantization Analysis in Model Training',
    date: '2024-11-25',
    readTime: '15 min read',
    category: 'Analysis',
    description: 'An in-depth analysis of quantization techniques like QLoRA and their impact on model performance and memory usage.',
    topics: ['Quantization', 'QLoRA', 'Analysis'],
    excerpt: 'How does quantizing a model to 4-bit affect its downstream performance? A deep dive into the trade-offs...',
    link: '#/blog/quantization_analysis',
    featured: true,
    type: 'blog' as const,
  },
];

const videos = [
  {
    title: 'Building Backpropagation from Scratch',
    duration: '12:34',
    views: '2.3K',
    description: 'Understanding and implementing automatic differentiation',
    topics: ['Autograd', 'Chain Rule', 'Computational Graphs'],
    link: '#',
    category: 'From-Scratch',
    type: 'video' as const,
  },
  {
    title: 'Multi-Head Attention Explained & Coded',
    duration: '18:42',
    views: '5.1K',
    description: 'Why transformers use multiple attention heads',
    topics: ['Attention', 'Transformers', 'PyTorch'],
    link: '#',
    category: 'From-Scratch',
    type: 'video' as const,
  },
  {
    title: 'Training a Mini GPT: Complete Walkthrough',
    duration: '45:23',
    views: '8.7K',
    description: 'End-to-end training of a decoder-only transformer',
    topics: ['GPT', 'Language Models', 'Training'],
    link: '#',
    category: 'From-Scratch',
    type: 'video' as const,
  },
  {
    title: 'Why Attention Actually Works',
    duration: '8:15',
    views: '4.2K',
    description: 'The intuition behind scaled dot-product attention',
    topics: ['Attention', 'Theory', 'Intuition'],
    link: '#',
    category: 'Deep-Dive',
    type: 'video' as const,
  },
  {
    title: 'Understanding Positional Encoding',
    duration: '10:30',
    views: '3.5K',
    description: 'How transformers know about sequence order',
    topics: ['Positional Encoding', 'Transformers', 'Theory'],
    link: '#',
    category: 'Deep-Dive',
    type: 'video' as const,
  },
  {
    title: 'KV Cache: 10x Faster Inference',
    duration: '3:45',
    views: '12K',
    description: 'One trick to dramatically speed up generation',
    topics: ['Optimization', 'Inference', 'Quick Tip'],
    link: '#',
    category: 'Quick-Tips',
    type: 'video' as const,
  },
];

type ContentType = 'all' | 'blog' | 'video';

export default function Content() {
  const [contentType, setContentType] = useState<ContentType>('all');

  const allContent = [...blogPosts, ...videos].sort((a, b) => {
    const dateA = 'date' in a ? new Date(a.date).getTime() : 0;
    const dateB = 'date' in b ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  const filteredContent = contentType === 'all'
    ? allContent
    : allContent.filter(item => item.type === contentType);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blogs & Videos</span>
          </h1>
          <p className="text-xl text-dark-300">
            In-depth articles and engineer-first walkthroughs on transformers, attention mechanisms, and AI research
          </p>
        </div>
      </section>

      {/* Content Type Filter */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setContentType('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${contentType === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
            >
              All Content
            </button>
            <button
              onClick={() => setContentType('blog')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${contentType === 'blog'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
            >
              📝 Blog Posts
            </button>
            <button
              onClick={() => setContentType('video')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${contentType === 'video'
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
            >
              🎥 Videos
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="card hover:scale-[1.03] transition-transform block"
              >
                {item.type === 'video' ? (
                  <>
                    {/* Video thumbnail */}
                    <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg h-40 mb-4 flex items-center justify-center border border-primary-500/30 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-dark-900/50 group-hover:bg-dark-900/30 transition-colors"></div>
                      <svg className="w-16 h-16 text-white/80 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <div className="absolute bottom-2 right-2 bg-dark-900/90 px-2 py-1 rounded text-xs font-semibold">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-semibold rounded-full">
                        VIDEO
                      </span>
                      <span className="text-xs text-dark-500">{item.views} views</span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 text-sm mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="px-2 py-0.5 bg-dark-900 border border-dark-700 rounded text-xs text-dark-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Blog post */}
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full mb-4">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold mb-3 hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark-400 text-sm mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-dark-500 mb-4">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="px-2 py-0.5 bg-dark-900 border border-dark-700 rounded text-xs text-dark-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Philosophy */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">My Content Philosophy</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Clarity First</h3>
              <p className="text-dark-400 text-sm">
                Explain complex topics in simple terms. No unnecessary jargon.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Intuition Over Math</h3>
              <p className="text-dark-400 text-sm">
                Focus on WHY things work, not just the equations.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Code Included</h3>
              <p className="text-dark-400 text-sm">
                Every concept backed by runnable code examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Stay Updated?</h2>
            <p className="text-dark-300 mb-8">
              I publish new articles and videos on transformers, attention mechanisms, and AI research regularly.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#" className="btn-primary">
                Subscribe via Email
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
