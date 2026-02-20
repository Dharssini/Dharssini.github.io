import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { systemProjects } = resumeData;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">System Projects</span>
          </h1>
          <p className="text-xl text-dark-300">
            End-to-end AI architectures and production systems
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-6xl mx-auto space-y-16">
          {systemProjects.map((project, idx) => (
            <div key={idx} className="card hover:scale-[1.005] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Context & Problem */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                      {project.client}
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                    <p className="text-sm text-dark-400 font-medium">{project.role} • {project.period}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">The Challenge</h3>
                    <p className="text-sm text-dark-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">Tech Stack</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2.5 py-1 bg-dark-800 border border-dark-700 rounded text-[11px] text-dark-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Solution & Architecture */}
                <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-dark-800 lg:pl-8">
                  <div>
                    <h3 className="text-sm font-semibold text-dark-200 mb-2 uppercase tracking-wide">The Solution</h3>
                    <p
                      className="text-sm text-dark-300 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: project.solution.replace(/\*\*(.*?)\*\*/g, '<strong class="text-dark-200 font-semibold">$1</strong>') }}
                    />
                  </div>

                  <div className="bg-dark-900 border border-dark-700 rounded-lg p-4">
                    <h3 className="text-xs font-semibold text-dark-400 mb-2 uppercase">System Architecture</h3>
                    <div className="font-mono text-xs text-primary-300 break-words bg-dark-950 p-2 rounded border border-dark-800/50">
                      {project.architectureDiagram}
                    </div>
                  </div>
                </div>

                {/* Right: Impact */}
                <div className="lg:col-span-3 lg:border-l lg:border-dark-800 lg:pl-8">
                  <h3 className="text-sm font-semibold text-dark-200 mb-4 uppercase tracking-wide">Key Impact</h3>
                  <ul className="space-y-3">
                    {project.impact.map((item, iIdx) => (
                      <li key={iIdx} className="flex gap-2 text-sm text-dark-400">
                        <span className="text-accent-400 mt-0.5 font-bold">›</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-dark-200 font-semibold">$1</span>') }} />
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
          <p className="text-dark-300 mb-8">
            Open to senior roles in AI Engineering and Research.
          </p>
          <a
            href="/resume"
            className="btn-primary"
          >
            View Full Resume
          </a>
        </div>
      </section>
    </div>
  );
}
