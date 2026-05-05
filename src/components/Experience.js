import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">{`/* Experience */`}</p>
        <h2 className="text-4xl font-bold mb-12">
          Where I&apos;ve been{' '}
          <span className="gradient-text">shipping</span>
        </h2>

        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-dark-border hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full border-2 border-accent-primary bg-dark-bg items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                </div>

                <div className="card group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold font-mono flex-shrink-0"
                          style={{ backgroundColor: job.color }}
                        >
                          {job.logo}
                        </span>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-primary transition-colors">
                          {job.company}
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-slate-500 pl-11">
                        {job.role} · {job.team}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 bg-dark-bg px-3 py-1 rounded-full border border-dark-border whitespace-nowrap self-start">
                      {job.period}
                    </span>
                  </div>

                  {job.note && (
                    <p className="text-slate-300 text-sm italic leading-relaxed mb-4 pl-3 border-l-2 border-accent-primary/40">
                      {job.note}
                    </p>
                  )}

                  <ul className="space-y-2.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-accent-primary mt-0.5 flex-shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
