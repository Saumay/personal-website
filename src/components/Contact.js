import { profile } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-tag mb-3 inline-block">// Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s build something{' '}
          <span className="gradient-text">interesting</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          Whether it&apos;s a cool project, a job opportunity, or you just want to geek out
          about distributed systems — my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-dark-bg font-bold rounded-xl hover:opacity-90 transition-opacity font-mono text-lg"
        >
          Say Hello <span>→</span>
        </a>

        <div className="flex justify-center gap-8 mt-12">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
