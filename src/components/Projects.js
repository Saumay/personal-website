import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">// Projects</p>
        <h2 className="text-4xl font-bold mb-12">
          Cool stuff I&apos;ve{' '}
          <span className="gradient-text">built</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="card group relative overflow-hidden">
              {/* Giant background emoji for vibe */}
              <div className="absolute -right-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 select-none pointer-events-none">
                {p.emoji}
              </div>

              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl mt-0.5">{p.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-accent-primary transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs text-accent-primary mt-0.5">
                      {p.role} · {p.period}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-dark-bg border border-dark-border rounded text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 font-mono text-sm text-accent-primary hover:underline"
                  >
                    View project ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
