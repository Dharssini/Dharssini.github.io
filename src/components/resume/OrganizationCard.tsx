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
            <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-100 pb-0.5 mb-2 md:mb-0.5">
                <div className="flex flex-wrap items-center gap-2 mb-1 md:mb-0">
                    <h3 className={`text-sm md:text-[10pt] font-bold uppercase tracking-tight ${titleColorClass}`}>{organization}</h3>
                    <span className="text-slate-300 font-light text-[10px] hidden md:inline">|</span>
                    <span className="text-sm md:text-[9pt] font-black text-slate-800 w-full md:w-auto">{role}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-[8pt] font-mono text-slate-500">
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
                        <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-2 md:mb-1">
                            <h4 className="text-sm md:text-[9.5pt] font-bold text-slate-800 mb-1 md:mb-0">{project.title}</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {project.techStack.slice(0, 4).map((tech, tIdx) => (
                                    <span key={tIdx} className="text-[10px] md:text-[7pt] font-mono text-slate-500 bg-slate-50 px-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Challenge / Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-[70px_1fr] gap-y-1 text-sm md:text-[9pt] mb-2 md:mb-1 leading-tight">
                            <span className="text-[10px] md:text-[6.5pt] font-bold text-slate-500 uppercase tracking-widest pt-1 md:self-start hidden md:block">Challenge</span>
                            <div className="bg-slate-50 border-l-2 border-slate-300 px-2 py-1 md:py-0.5 text-slate-700 italic text-xs md:text-[8.5pt]">
                                <span className="md:hidden font-bold text-[10px] text-slate-500 uppercase tracking-widest mr-2">Challenge:</span>
                                {project.problem}
                            </div>

                            <span className="text-[10px] md:text-[6.5pt] font-bold text-slate-900 uppercase tracking-widest pt-1 md:self-start hidden md:block">Solution</span>
                            <div className="pl-0 md:pl-3">
                                <span className="md:hidden font-bold text-[10px] text-slate-900 uppercase tracking-widest block mb-1">Solution:</span>
                                <ul className="list-disc pl-4 md:pl-0 text-slate-900 space-y-1 md:space-y-0.5 font-medium">
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
                        </div>

                        {/* Impact Metrics - Minimal List */}
                        <div className="pl-0 md:pl-[70px]">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1 md:gap-y-0.5">
                                {project.impact.slice(0, 2).map((metric, mIdx) => (
                                    <li key={mIdx} className="text-xs md:text-[8.5pt] text-slate-700 flex items-start md:items-center gap-1.5 leading-tight">
                                        <span className="text-indigo-500 font-bold text-[10px] mt-0.5 md:mt-0">&gt;</span>
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
