import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#terminal',    label: 'Terminal' },
  { href: '#experience',  label: 'Experience' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#projects',    label: 'Projects' },
  { href: '#blog',        label: 'Blog' },
  { href: '#contact',     label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold text-lg text-accent-primary">
          SK<span className="animate-blink">_</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-slate-400 hover:text-accent-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-surface border-t border-dark-border px-6 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-2 font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
