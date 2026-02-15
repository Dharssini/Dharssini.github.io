import { resumeData } from '../data/resumeData';

export default function ResumeMarkdown() {
    const { personalInfo, summary, experience, skills, systemProjects, education } = resumeData;

    const downloadPDF = () => {
        window.print();
    };

    // Generate Markdown Text
    // Group projects by client (Same logic as SystemResume)
    const groupedProjects = systemProjects.reduce((acc: any, project: any) => {
        if (!acc[project.client]) {
            acc[project.client] = [];
        }
        acc[project.client].push(project);
        return acc;
    }, {});

    const { achievements, projects, leadership } = resumeData;

    // Generate Markdown Text
    const markdownContent = `
# ${personalInfo.name}
${personalInfo.title}
${personalInfo.location} | ${personalInfo.phone} | ${personalInfo.email}
GitHub: github.com/${personalInfo.github} | LinkedIn: linkedin.com/in/${personalInfo.linkedin}

## SUMMARY
${summary}

## KEY ACHIEVEMENTS
${achievements.map((a: any) => `- **${a.label}** (${a.company})`).join('\n')}

## TECHNICAL SKILLS
${skills.map((s: any) => `- **${s.category}**: ${s.items.join(', ')}`).join('\n')}

## EXPERIENCE
${Object.entries(groupedProjects).map(([client, projs]: [string, any]) => {
        const role = projs[0].role;
        const period = projs[0].period;
        const location = projs[0].location;
        return `### ${client} | ${role}
${period} | ${location}

${projs.map((p: any) => `**${p.title}**
- **Problem**: ${p.problem}
- **Solution**: ${p.solution.split('·').map((s: string) => s.trim()).filter(Boolean).map((s: string) => s.endsWith('.') ? s : s + '.').join(' ')}
- **Impact**: ${p.impact.map((i: string) => i.replace(/\*\*/g, '')).join('; ')}`).join('\n\n')}`;
    }).join('\n\n')}

## PROFESSIONAL HISTORY
${experience
            .filter((e: any) => !['Improva', 'CyberTranscend'].includes(e.company))
            .map((role: any) => `### ${role.company} | ${role.role}
${role.period} | ${role.location}
${role.bullets.map((b: string) => `- ${b.replace(/\*\*/g, '')}`).join('\n')}`).join('\n\n')}

## ADDITIONAL PROJECTS
${projects.map((p: any) => `- **${p.name}**: ${p.desc} ${p.link && p.link !== '#' ? `(${p.link})` : ''}`).join('\n')}

## EDUCATION
${education.map((e: any) => `**${e.institution}** | ${e.degree}
${e.period} | ${e.location} | ${e.details}`).join('\n')}

## LEADERSHIP
${leadership.map((l: any) => `- **${l.role}**, ${l.org} (${l.period})`).join('\n')}
`.trim();

    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-12 max-w-[210mm] mx-auto print:p-0 print:max-w-none">
            {/* Human Check Banner - Hidden in print */}
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm text-center rounded print:hidden">
                If you are a human viewing this resume <a href="/#/resume" className="underline font-bold hover:text-yellow-900">click here</a> to view the styled version.
            </div>

            {/* Controls - Hidden in print */}
            <div className="mb-8 flex justify-end print:hidden">
                <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors font-sans text-sm"
                >
                    Download PDF
                </button>
            </div>

            <pre className="whitespace-pre-wrap font-mono text-[10pt] leading-snug">
                {markdownContent}
            </pre>
        </div>
    );
}
