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
    featured: true,
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
  },
  {
    title: 'Comparing 8 Linear Attention Mechanisms',
    date: '2024-11-20',
    readTime: '18 min read',
    category: 'Analysis',
    description: 'Comprehensive benchmark of linear attention variants across different tasks and sequence lengths.',
    topics: ['Attention', 'Efficiency', 'Benchmarking'],
    excerpt: 'Linear attention promises O(n) complexity, but different variants make different trade-offs. I tested 8 approaches to see which ones actually deliver...',
    link: '#',
    featured: false,
  },
  {
    title: 'Training Dynamics: What I Learned from 1000+ Runs',
    date: '2024-11-15',
    readTime: '14 min read',
    category: 'Analysis',
    description: 'Patterns and insights from monitoring hundreds of transformer training runs.',
    topics: ['Training', 'Analysis', 'Insights'],
    excerpt: 'After tracking metrics from over 1000 training runs, I noticed consistent patterns in successful vs failed training. Here are the key insights...',
    link: '#',
    featured: false,
  },
  {
    title: 'Flash Attention: Why It\'s Faster',
    date: '2024-11-08',
    readTime: '11 min read',
    category: 'Deep Dive',
    description: 'Understanding the algorithm and implementation details that make Flash Attention so efficient.',
    topics: ['Attention', 'Optimization', 'CUDA'],
    excerpt: 'Flash Attention achieves 2-4x speedups without approximation. The key is understanding memory hierarchy and avoiding unnecessary HBM reads...',
    link: '#',
    featured: false,
  },
  {
    title: 'Positional Encoding: Sinusoidal vs Learned vs RoPE',
    date: '2024-11-01',
    readTime: '13 min read',
    category: 'Comparison',
    description: 'Side-by-side comparison of different positional encoding methods with experimental results.',
    topics: ['Positional Encoding', 'Comparison', 'Experiments'],
    excerpt: 'Different positional encoding methods have different properties. I tested all three on multiple tasks to understand when to use each...',
    link: '#',
    featured: false,
  },
  {
    title: 'What I Wish I Knew Before Training My First LLM',
    date: '2024-10-25',
    readTime: '9 min read',
    category: 'Lessons Learned',
    description: 'Practical advice and gotchas for anyone training language models for the first time.',
    topics: ['Training', 'LLMs', 'Advice'],
    excerpt: 'Training large language models is expensive and full of surprises. Here are the things I wish someone had told me before I started...',
    link: '#',
    featured: false,
  },
];

const categories = ['All', 'Deep Dive', 'Implementation', 'Analysis', 'Lessons Learned', 'Comparison'];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-dark-300">
            In-depth articles on transformers, attention mechanisms, and AI research
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="section-container bg-dark-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <span className="gradient-text">Featured Posts</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, idx) => (
                <a key={idx} href={post.link} className="card hover:scale-[1.03] transition-transform block">
                  <div className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-semibold rounded-full mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-dark-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post, idx) => (
              <a key={idx} href={post.link} className="card hover:scale-[1.01] transition-transform block">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full border border-primary-500/20">
                        {post.category}
                      </span>
                      <span className="text-sm text-dark-500">{post.date}</span>
                      <span className="text-sm text-dark-500">• {post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-dark-400 mb-4">{post.description}</p>

                    <p className="text-dark-400 text-sm mb-4 italic">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="text-primary-400 hover:text-primary-300 transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Philosophy */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">My Writing Philosophy</span>
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
              I publish new articles on transformers, attention mechanisms, and AI research regularly.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="btn-primary">
                Subscribe via Email
              </a>
              <a href="#" className="btn-secondary">
                Follow on Medium
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add at top of file
import { useState } from 'react';
