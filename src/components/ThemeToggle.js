import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    setTheme(next);
  };

  // Pre-hydration: render placeholder so the bootstrap script's class on <html>
  // controls everything until React knows the theme.
  if (theme === null) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400"
      >
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="10" cy="10" r="4" />
        </svg>
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:text-accent-primary hover:bg-dark-card transition-colors"
    >
      {isDark ? (
        // sun
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="10" cy="10" r="3.5" />
          <line x1="10" y1="2"  x2="10" y2="4"  />
          <line x1="10" y1="16" x2="10" y2="18" />
          <line x1="2"  y1="10" x2="4"  y2="10" />
          <line x1="16" y1="10" x2="18" y2="10" />
          <line x1="4.2"  y1="4.2"  x2="5.6"  y2="5.6" />
          <line x1="14.4" y1="14.4" x2="15.8" y2="15.8" />
          <line x1="4.2"  y1="15.8" x2="5.6"  y2="14.4" />
          <line x1="14.4" y1="5.6"  x2="15.8" y2="4.2" />
        </svg>
      ) : (
        // moon
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path d="M14.5 12.5A6.5 6.5 0 0 1 7.5 5.5c0-.7.1-1.4.3-2A7 7 0 1 0 16.5 12.2a6.5 6.5 0 0 1-2 .3z" />
        </svg>
      )}
    </button>
  );
}
