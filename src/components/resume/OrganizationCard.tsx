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

interface OrganizationCardProps {
    organization: string;
    role: string;
    period: string;
    location?: string;
    projects: SystemProject[];
    titleColorClass?: string;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization, role, period, location, projects, titleColorClass = 'text-slate-900' }) => {
    return (
        <div className="mb-2 last:mb-0">
            {/* Header: Company | Role | Period | Location */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-0.5 mb-0.5">
                <div className="flex items-center gap-2">
                    <h3 className={`text-[10pt] font-bold uppercase tracking-tight ${titleColorClass}`}>{organization}</h3>
                    <span className="text-slate-300 font-light text-[10px]">|</span>
                    <span className="text-[9pt] font-black text-slate-800">{role}</span>
                </div>
                <div className="flex items-center gap-2 text-[8pt] font-mono text-slate-500">
                    <span>{period}</span>
                    {location && (
                        <>
                            <span className="text-slate-300 text-[10px]">|</span>
                            <span>{location}</span>
                        </>
                    )}
                </div>
            </div>

            <div className="space-y-1.5">
                {projects.map((project, idx) => (
                    <div key={idx} className="relative pb-1 mb-1 border-b border-dashed border-slate-200 last:border-0 last:pb-0 last:mb-0">
                        {/* Project Title */}
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-[9.5pt] font-bold text-slate-800">{project.title}</h4>
                            <div className="flex gap-1.5">
                                {project.techStack.slice(0, 4).map((tech, tIdx) => (
                                    <span key={tIdx} className="text-[7pt] font-mono text-slate-500 bg-slate-50 px-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Challenge / Solution Grid */}
                        <div className="grid grid-cols-[70px_1fr] gap-y-1 text-[9pt] mb-1 leading-tight">
                            <span className="text-[6.5pt] font-bold text-slate-500 uppercase tracking-widest pt-1 self-start">Challenge</span>
                            <div className="bg-slate-50 border-l-2 border-slate-300 px-2 py-0.5 text-slate-700 italic text-[8.5pt]">
                                {project.problem}
                            </div>

                            <span className="text-[6.5pt] font-bold text-slate-900 uppercase tracking-widest pt-1 self-start">Solution</span>
                            <ul className="list-disc pl-3 text-slate-900 space-y-0.5 pt-0.5 font-medium">
                                {project.solution.split('·').map((point, pIdx) => {
                                    if (!point.trim()) return null;
                                    return (
                                        <li key={pIdx}>
                                            {point.trim()}{!point.trim().endsWith('.') && '.'}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* Impact Metrics - Minimal List */}
                        <div className="pl-[70px]">
                            <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                                {project.impact.slice(0, 2).map((metric, mIdx) => (
                                    <li key={mIdx} className="text-[8.5pt] text-slate-700 flex items-center gap-1.5 leading-tight">
                                        <span className="text-indigo-500 font-bold text-[10px]">&gt;</span>
                                        <span
                                            className="text-indigo-700 font-medium"
                                            dangerouslySetInnerHTML={{ __html: metric.replace(/\*\*/g, '') }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganizationCard;
