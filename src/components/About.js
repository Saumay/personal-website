import { hobbies } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">// About Me</p>
        <h2 className="text-4xl font-bold mb-12">
          The human behind the{' '}
          <span className="gradient-text">keyboard</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
            <p>
              I&apos;m a Senior Software Engineer at Google (Nest team) in Mountain View, CA.
              I geek out over distributed systems, database internals, and making LLMs do
              genuinely useful things in production.
            </p>
            <p>
              My career started at Sabre (air travel tech), went through fintech at Upstox
              where I watched user counts explode 20x, then through ad-tech at Uber, and
              now I&apos;m building virtual device infrastructure at Google.
            </p>
            <p>
              When I&apos;m not thinking about system design, I&apos;m reading tech research
              papers, staring at stars, losing go-kart races (I&apos;m winning in my head
              though), or deep-diving into physics rabbit holes.
            </p>
          </div>

          {/* Fun facts card */}
          <div className="card font-mono text-sm">
            <p className="section-tag mb-5">fun_facts.json</p>
            <div className="space-y-1.5 text-slate-400">
              <p><span className="text-accent-primary">"location"</span>: <span className="text-accent-green">"Mountain View, CA 🌁"</span>,</p>
              <p><span className="text-accent-primary">"education"</span>: <span className="text-accent-green">"VIT Vellore (CGPA 9.35)"</span>,</p>
              <p><span className="text-accent-primary">"hobbies"</span>: [</p>
              {hobbies.map(({ name, emoji }, i) => (
                <p key={name} className="pl-5">
                  <span className="text-accent-green">&quot;{name}&quot;</span>
                  <span className="ml-2 text-slate-600">{emoji}</span>
                  {i < hobbies.length - 1 && <span className="text-slate-600">,</span>}
                </p>
              ))}
              <p>],</p>
              <p><span className="text-accent-primary">"fun_fact"</span>: <span className="text-accent-green">"Built a Mars rover once 🤖"</span>,</p>
              <p><span className="text-accent-primary">"secret"</span>: <span className="text-accent-green">"Reads DB source code for fun"</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
