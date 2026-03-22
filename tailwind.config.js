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
        // To change the look, edit the values below and run `npm run dev`
        dark: {
          bg:      '#0d1117', // page background
          surface: '#161c27', // subtle section background
          card:    '#1c2333', // card background
          border:  '#2a3347', // border color
        },
        accent: {
          primary:   '#5eead4', // soft teal  — main accent, links, highlights
          secondary: '#a78bfa', // soft lavender — gradient end, secondary accent
          green:     '#6ee7b7', // mint green — success / active states
          pink:      '#f9a8d4', // soft rose  — tertiary accent
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
