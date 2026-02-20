import React from 'react';

interface SystemProject {
    id: string;
    title: string;
    client: string;
    period: string;
    problem: string;
    solution: string;
    impact: string[];
    techStack: string[];
}

interface CondensedOrganizationProps {
    organization: string;
    role: string;
    period: string;
    projects: SystemProject[];
}

const CondensedOrganization: React.FC<CondensedOrganizationProps> = ({ organization, role, period, projects }) => {
    return (
        <div className="mb-6 last:mb-0">
            {/* Organization Header */}
            <div className="flex justify-between items-baseline mb-2 border-b border-slate-200 pb-1">
                <div>
                    <h3 className="text-xl font-black text-slate-950 tracking-tight leading-none">{organization}</h3>
                    <p className="text-indigo-600 font-black text-xs mt-0.5 uppercase tracking-wider">{role}</p>
                </div>
                <span className="text-[9pt] font-black text-slate-400 tabular-nums">{period}</span>
            </div>

            {/* Projects List */}
            <div className="space-y-3">
                {projects.map((project) => (
                    <div key={project.id} className="relative pl-0">
                        {/* Project Title & Tech */}
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-[10pt] font-black text-slate-800 leading-tight">{project.title}</h4>
                            <div className="text-[7pt] font-medium text-slate-400 text-right ml-2 max-w-[40%] leading-tight">
                                {project.techStack.slice(0, 4).join(' · ')}
                            </div>
                        </div>

                        {/* Challenge & Solution (Stacked) */}
                        <div className="mb-2 text-[8.5pt] leading-[1.35] text-slate-700 pl-2 border-l-2 border-slate-100">
                            <div className="mb-0.5">
                                <span className="font-bold text-slate-900">Challenge: </span>
                                <span className="italic text-slate-600">{project.problem}</span>
                            </div>
                            <div>
                                <span className="font-bold text-slate-900">Solution: </span>
                                <span
                                    className="font-medium text-slate-800"
                                    dangerouslySetInnerHTML={{ __html: project.solution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                                />
                            </div>
                        </div>

                        {/* Impact Bullets */}
                        <ul className="space-y-0.5 pl-2">
                            {project.impact.map((metric, idx) => (
                                <li key={idx} className="flex gap-2 text-[8.5pt] leading-snug text-slate-700">
                                    <span className="text-indigo-400 font-bold shrink-0 text-[10px]">›</span>
                                    <span dangerouslySetInnerHTML={{ __html: metric.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-950">$1</strong>') }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CondensedOrganization;
