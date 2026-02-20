import React from 'react';

interface SystemProject {
    id: string;
    title: string;
    client: string;
    role: string;
    period: string;
    problem: string;
    solution: string;
    impact: string[];
    techStack: string[];
    architectureDiagram?: string;
}

interface SystemCardProps {
    project: SystemProject;
}

const SystemCard: React.FC<SystemCardProps> = ({ project }) => {
    return (
        <div
            className="bg-white border text-slate-900 border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative print:border-slate-900 print:shadow-none print:break-inside-avoid"
        >
            {/* Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-start print:bg-white print:border-slate-900 print:border-b-2">
                <div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs font-bold uppercase tracking-wider text-indigo-600 print:text-slate-900">
                        <span>{project.client}</span>
                        <span className="text-slate-300">/</span>
                        <span>{project.role}</span>
                    </div>
                </div>
                <span className="text-xs font-black text-slate-400 bg-white px-2 py-1 rounded border border-slate-100 print:border-none print:text-slate-900">
                    {project.period}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] print:grid-cols-[30%_70%]">
                {/* Left Column: Tech & Architecture */}
                <div className="bg-slate-50/50 p-6 border-r border-slate-100 flex flex-col gap-6 print:bg-white print:border-r print:border-slate-900">
                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 6).map((tech, idx) => (
                                <span key={idx} className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 border border-slate-200 rounded-sm print:border-slate-400 print:text-slate-900">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Architecture Visual */}
                    <div className="flex-grow">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Architecture</h4>
                        <div className="text-[10px] leading-relaxed text-slate-500 font-mono border-l-2 border-indigo-100 pl-3 print:text-slate-900 print:border-slate-900">
                            {project.architectureDiagram?.split('->').map((step, i) => (
                                <div key={i} className="mb-1 flex items-start gap-1">
                                    <span className="text-indigo-400 print:hidden">↓</span>
                                    <span>{step.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Problem, Solution, Impact */}
                <div className="p-6 space-y-5">
                    {/* Problem & Solution */}
                    <div className="space-y-3">
                        <div>
                            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1 block print:text-slate-900">The Challenge</span>
                            <p className="text-sm text-slate-600 italic leading-snug print:text-slate-900">{project.problem}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1 block print:text-slate-900">The Solution</span>
                            <p
                                className="text-sm text-slate-800 leading-snug print:text-slate-900"
                                dangerouslySetInnerHTML={{ __html: project.solution.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-slate-900">$1</strong>') }}
                            />
                        </div>
                    </div>

                    {/* Impact Metrics */}
                    <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block print:text-slate-900">Key Impact</span>
                        <ul className="space-y-2">
                            {project.impact.map((metric, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-slate-700 leading-snug group print:text-slate-900">
                                    <span className="text-indigo-500 font-bold print:hidden">/</span>
                                    <span dangerouslySetInnerHTML={{ __html: metric.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-slate-900">$1</strong>') }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemCard;
