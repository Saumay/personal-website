/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // ─── THEME ───────────────────────────────────────────────────────────
        // Values live as RGB triples in CSS variables (see globals.css).
        // Toggling [data-theme="light"] on <html> swaps the entire palette.
        dark: {
          bg:      'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          card:    'rgb(var(--color-card) / <alpha-value>)',
          border:  'rgb(var(--color-border) / <alpha-value>)',
        },
        accent: {
          primary:   'rgb(var(--color-accent-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-accent-secondary) / <alpha-value>)',
          green:     'rgb(var(--color-accent-green) / <alpha-value>)',
          pink:      'rgb(var(--color-accent-pink) / <alpha-value>)',
        },
        // ─────────────────────────────────────────────────────────────────────
      },
      animation: {
        blink:     'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%':       { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(24px)', opacity: 0 },
          to:   { transform: 'translateY(0)',    opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
