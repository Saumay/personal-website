import { useState, useEffect } from 'react';
import { profile } from '../data/content';

function TypeWriter({ texts }) {
  const [idx, setIdx]             = useState(0);
  const [display, setDisplay]     = useState('');
  const [deleting, setDeleting]   = useState(false);
  const [paused, setPaused]       = useState(false);

  useEffect(() => {
    if (paused) return;
    const text = texts[idx];
    let timer;

    if (!deleting) {
      if (display.length < text.length) {
        timer = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), 75);
      } else {
        setPaused(true);
        timer = setTimeout(() => { setPaused(false); setDeleting(true); }, 2500);
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(d => d.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % texts.length);
      }
    }
    return () => clearTimeout(timer);
  }, [display, deleting, paused, idx, texts]);

  return (
    <span className="text-accent-primary font-mono">
      {display}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full">

        {/* Fake terminal prompt */}
        <div className="font-mono text-slate-500 text-sm mb-8 animate-fade-in">
          <span className="text-accent-green">~/saumay</span>
          <span className="text-slate-400"> $ </span>
          <span className="text-slate-300">cat about.txt</span>
        </div>

        <div className="animate-slide-up">
          <p className="font-mono text-accent-primary text-lg mb-4">
            {`// Hello, World! 👋`}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            I&apos;m{' '}
            <span className="gradient-text">Saumay</span>
            <br />
            <span className="text-slate-300">Khandelwal.</span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-400 mb-8 h-8">
            <TypeWriter texts={profile.taglines} />
          </div>

          <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 transition-opacity font-mono text-sm"
            >
              Say Hello →
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-dark-border text-slate-300 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 font-mono text-sm"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-dark-border text-slate-300 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-200 font-mono text-sm"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
