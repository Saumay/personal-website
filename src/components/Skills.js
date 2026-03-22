import { skills } from '../data/content';

function SkillGroup({ command, items, accentClass }) {
  return (
    <div className="card">
      <p className={`font-mono text-sm font-semibold mb-4 ${accentClass}`}>{command}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(skill => (
          <span
            key={skill}
            className="text-sm px-3 py-1.5 bg-dark-bg border border-dark-border rounded-lg text-slate-300 hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-surface/50">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">{`/* Skills */`}</p>
        <h2 className="text-4xl font-bold mb-12">
          Tools of the{' '}
          <span className="gradient-text">trade</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillGroup
            command="$ languages --list"
            items={skills.languages}
            accentClass="text-accent-primary"
          />
          <SkillGroup
            command="$ systems --list"
            items={skills.systems}
            accentClass="text-accent-secondary"
          />
          <SkillGroup
            command="$ ai --list"
            items={skills.ai}
            accentClass="text-accent-green"
          />
        </div>
      </div>
    </section>
  );
}
