import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();

    // This is temporary mock data logic. In a real app, you'd fetch this or look it up properly.
    // We will look up in resumeData.projects first, but those have limited info.
    // For now, I'll define the extended content here based on the ID.

    const projectContent: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
        "google-photos-clone": {
            title: "Google Photos Clone",
            subtitle: "Facial recognition (>90% acc) w/ InsightFace",
            content: (
                <div className="space-y-4">
                    <p>A comprehensive clone of Google Photos that implements advanced facial recognition capabilities using InsightFace.</p>
                    <h3 className="text-xl font-bold mt-4">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>High-accuracy facial recognition (&gt;90%)</li>
                        <li>Automatic album grouping by face</li>
                        <li>Efficient image indexing and retrieval</li>
                    </ul>
                    <div className="bg-slate-100 p-4 rounded-lg mt-4">
                        <h4 className="font-mono font-bold text-sm text-slate-600 mb-2">Tech Stack</h4>
                        <p className="font-mono text-sm">Python, InsightFace, React, Node.js</p>
                    </div>
                </div>
            )
        },
        "finetuning-phi3": {
            title: "FineTuning Phi3",
            subtitle: "Optimizing Small Language Models for Bioprotein Data",
            content: (
                <div className="space-y-4">
                    <p>Research and implementation of fine-tuning strategies for Microsoft's Phi-3 model, specifically adapted for bioprotein sequence analysis and generation.</p>
                    <h3 className="text-xl font-bold mt-4">Methodology</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Dataset preparation and tokenization for protein sequences</li>
                        <li>QLoRA (Quantized Low-Rank Adaptation) implementation for efficient training</li>
                        <li>Evaluation against standard benchmarks</li>
                    </ul>
                </div>
            )
        },
        "transformer-scratch": {
            title: "Transformer from Scratch",
            subtitle: "Deep Dive into Attention Mechanisms",
            content: (
                <div className="space-y-4">
                    <p>A first-principles implementation of the Transformer architecture (Attention Is All You Need) using PyTorch, built to gain deep intuitive understanding of the mechanics.</p>
                    <h3 className="text-xl font-bold mt-4">Components Implemented</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Multi-Head Self-Attention</li>
                        <li>Positional Encodings</li>
                        <li>Encoder-Decoder Stack</li>
                        <li>Feed-Forward Networks</li>
                    </ul>
                </div>
            )
        },
        "deepseek-v3": {
            title: "DeepSeek V3",
            subtitle: "Paper to Code & Architecture Analysis",
            content: (
                <div className="space-y-4">
                    <p>A detailed breakdown and partial implementation of the DeepSeek V3 architecture based on the published research paper.</p>
                    <h3 className="text-xl font-bold mt-4">Research Focus</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Architecture improvements over V2</li>
                        <li>Mixture-of-Experts (MoE) routing analysis</li>
                        <li>Training stability techniques</li>
                    </ul>
                </div>
            )
        }
    };

    const project = projectId ? projectContent[projectId] : null;

    if (!project) {
        return <div className="p-8">Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-slate-900 text-white p-8">
                    <Link to="/resume" className="text-indigo-400 hover:text-indigo-300 text-sm font-bold uppercase tracking-wider mb-4 block">&larr; Back to Resume</Link>
                    <h1 className="text-3xl font-black mb-2">{project.title}</h1>
                    <p className="text-slate-300 text-lg">{project.subtitle}</p>
                </div>
                <div className="p-8 text-slate-800 leading-relaxed">
                    {project.content}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
