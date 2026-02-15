import React from 'react';
import { resumeData } from '../data/resumeData';
import OrganizationCard from '../components/resume/OrganizationCard';

const SystemResume: React.FC = () => {
    const { personalInfo, summary, skills, education, systemProjects, achievements, projects, leadership } = resumeData;



    const handlePrint = () => {
        const originalTitle = document.title;
        document.title = `${personalInfo.name.replace(' ', '_')}_Resume`;
        window.print();
        document.title = originalTitle;
    };

    // Group projects by client
    // Group projects by client
    const groupedProjects = systemProjects.reduce((acc: any, project: any) => {
        if (!acc[project.client]) {
            acc[project.client] = [];
        }
        acc[project.client].push(project);
        return acc;
    }, {});

    // Helper for icons
    const IconMapPin = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    );
    const IconMail = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    );
    const IconGithub = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    );
    const IconLinkedin = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    );
    const IconExternalLink = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
    );

    return (
        <div className="min-h-screen bg-slate-100 py-12 px-4 resume-print-wrapper">
            {/* Print Control */}
            <div className="fixed bottom-8 right-8 print:hidden z-50">
                <button
                    onClick={handlePrint}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2 font-bold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                    PDF
                </button>
            </div>

            <div className="resume-page max-w-[210mm] mx-auto bg-white shadow-xl relative overflow-hidden">
                {/* Header Section (Compressed) */}
                <header className="bg-slate-950 text-white px-6 py-2 print:p-2">
                    <div className="flex justify-between items-end">
                        <div className="mb-0.5">
                            <h1 className="text-2xl font-black tracking-tighter mb-0 line-height-[1]">{personalInfo.name}</h1>
                            <p className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{personalInfo.title}</p>
                        </div>
                        <div className="text-right space-y-0.5 text-[9pt] font-medium text-slate-400">
                            <p className="flex items-center justify-end gap-2">
                                <IconMapPin /> {personalInfo.location}
                            </p>
                            <p className="flex items-center justify-end gap-2">
                                <IconMail />
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">{personalInfo.email}</a>
                            </p>
                            <div className="flex items-center justify-end gap-2">
                                <p className="text-white font-bold">{personalInfo.phone}</p>
                            </div>
                            <div className="flex justify-end gap-3 mt-0.5">
                                <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                                    <IconGithub /> github.com/{personalInfo.github}
                                </a>
                                <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                                    <IconLinkedin /> linkedin.com/in/{personalInfo.linkedin}
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="px-6 py-1.5 space-y-1.5 print:px-5 print:py-1.5">

                    {/* Summary & Core Signals */}
                    <div className="space-y-1">
                        <section>
                            <p className="text-[9.5pt] leading-snug font-medium text-slate-700 text-justify">
                                {summary}
                            </p>
                        </section>
                        <section className="flex flex-wrap gap-1.5 justify-center text-center mt-0.5">
                            {achievements.map((ach: any, idx: number) => (
                                <div key={idx} className="bg-slate-950 border border-slate-800 p-0.5 px-1.5 rounded-md flex flex-col justify-center items-center h-full min-w-[70px] shadow-sm print:bg-slate-950 print:border-slate-950">
                                    <p className="text-[8pt] font-black leading-none text-white">{ach.label}</p>
                                    <p className="text-[4.5pt] font-black uppercase tracking-[0.05em] text-indigo-400 mt-0.5 text-center leading-none">{ach.company}</p>
                                </div>
                            ))}
                        </section>
                    </div>

                    <section className="relative py-0">
                        <div className="grid grid-cols-6 items-stretch divide-x divide-slate-200">
                            {skills.map((skill: any, idx: number) => (
                                <div key={idx} className="col-span-1 px-1.5 first:pl-0 last:pr-0 space-y-0.5">
                                    <h3 className="text-[6.5pt] font-black text-slate-500 uppercase tracking-widest mb-0.5 leading-none">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-0.5">
                                        {skill.items.map((item: string, iIdx: number) => (
                                            <span key={iIdx} className="bg-slate-100 border border-slate-200 text-slate-700 px-1 py-0.5 rounded text-[6.5pt] font-bold leading-none">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section - Unified Narrative */}
                    <section>
                        <h2 className="text-[10pt] font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1 uppercase tracking-widest">
                            Experience
                        </h2>

                        <div className="space-y-4">
                            {Object.entries(groupedProjects).map(([client, projects]: [string, any], idx) => (
                                <div key={idx} className={`
                                    ${idx === 0 ? 'print:mb-4' : ''} 
                                    ${idx === 1 ? 'print:break-before-page print:pt-6' : ''}
                                `}>
                                    <OrganizationCard
                                        organization={client}
                                        role={projects[0].role}
                                        period={projects[0].period}
                                        location={projects[0].location}
                                        projects={projects}
                                        titleColorClass="text-blue-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Other Experience - Matching OrganizationCard Header Style */}
                    <section>
                        <h2 className="text-[9pt] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5 flex items-center gap-2">
                            Professional History
                            <span className="h-px bg-slate-200 flex-grow"></span>
                        </h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                            {resumeData.experience
                                .filter((exp: any) => !['Improva', 'CyberTranscend'].includes(exp.company))
                                .map((exp: any, idx: number) => (
                                    <div key={idx} className="relative pl-3 border-l border-slate-200 print:border-slate-300">
                                        {/* Header: Company | Role | Period | Location */}
                                        <div className="flex justify-between items-center mb-0.5">
                                            <div className="flex items-center gap-1.5 overflow-hidden">
                                                <div className="text-[8pt] font-bold uppercase tracking-wider leading-none text-blue-700 whitespace-nowrap">{exp.company}</div>
                                                <span className="text-slate-300 text-[8.5pt] font-light">|</span>
                                                <h3 className="text-[8.5pt] font-black text-slate-900 leading-none truncate">{exp.role}</h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[7.5pt] font-bold text-slate-400 print:text-slate-600 mb-0.5">
                                            <span>{exp.period}</span>
                                            {exp.location && (
                                                <>
                                                    <span className="text-slate-300 text-[9px]">|</span>
                                                    <span>{exp.location}</span>
                                                </>
                                            )}
                                        </div>

                                        <ul className="space-y-0.5">
                                            {exp.bullets.slice(0, 2).map((bullet: string, bIdx: number) => (
                                                <li key={bIdx} className="text-[8.5pt] leading-tight text-slate-600 flex gap-1.5 print:text-slate-900">
                                                    <span className="text-slate-300 font-bold shrink-0 print:text-slate-500">•</span>
                                                    <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-800">$1</strong>') }} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </section>

                    {/* Compact Footer Grid: Projects, OS, Leadership */}
                    <div className="pt-2 border-t border-slate-100">
                        {/* Selected Projects */}
                        <section>
                            <h2 className="text-[9pt] font-bold text-slate-800 uppercase tracking-widest mb-1 border-b border-slate-200 pb-1">
                                Additional Projects
                            </h2>
                            <div className="space-y-1">
                                <div className="grid grid-cols-4 gap-3">
                                    {projects.map((project: any, idx: number) => (
                                        <div key={idx} className="flex flex-col gap-0.5">
                                            {project.link && project.link !== '#' ? (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-[8.5pt] font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                                                    {project.name}
                                                    <span className="text-slate-400 group-hover:text-indigo-600">
                                                        <IconExternalLink />
                                                    </span>
                                                </a>
                                            ) : (
                                                <h3 className="text-[8.5pt] font-bold text-slate-900 leading-none">{project.name}</h3>
                                            )}
                                            <p className="text-[7.5pt] text-slate-600 leading-tight">{project.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Education & Leadership */}
                        <section className="grid grid-cols-2 gap-8 pt-2 border-t border-slate-200 mt-2">
                            <div>
                                <h2 className="text-[9pt] font-bold text-slate-800 uppercase tracking-widest mb-1">Education</h2>
                                {education.map((edu: any, idx: number) => (
                                    <div key={idx}>
                                        <p className="text-[9pt] font-bold text-slate-900">{edu.institution}</p>
                                        <p className="text-[8.5pt] text-slate-600">{edu.degree} | {edu.location}</p>
                                        <p className="text-[8.5pt] text-slate-500 mt-0.5">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h2 className="text-[9pt] font-bold text-slate-800 uppercase tracking-widest mb-1">Leadership</h2>
                                <ul className="space-y-0.5">
                                    {leadership.map((item: any, idx: number) => (
                                        <li key={idx} className="text-[8.5pt] text-slate-700">
                                            <span className="font-bold">{item.role}</span>, {item.org}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemResume;
