import { openSource } from '../data/content';

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">// Open Source</p>
        <h2 className="text-4xl font-bold mb-4">
          Contributing back to the{' '}
          <span className="gradient-text">tools I use</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Recent merged contributions to the ML/AI ecosystem. Mostly small,
          surgical patches — the sort that earn no headlines but keep the
          stack honest.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {openSource.map(({ repo, blurb, url, contributions }) => (
            <div key={repo} className="card flex flex-col">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent-primary hover:underline mb-1 break-all"
              >
                {repo} ↗
              </a>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">{blurb}</p>

              <ul className="space-y-2.5 flex-1">
                {contributions.map(({ title, url: prUrl, date }) => (
                  <li key={prUrl} className="text-sm leading-relaxed">
                    <a
                      href={prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-accent-primary transition-colors"
                    >
                      <span className="text-accent-primary mr-2">▸</span>
                      {title}
                    </a>
                    <div className="font-mono text-xs text-slate-600 mt-0.5 ml-5">{date}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-dark-border">
                <span className="font-mono text-xs text-slate-500">
                  {contributions.length} merged PR{contributions.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
