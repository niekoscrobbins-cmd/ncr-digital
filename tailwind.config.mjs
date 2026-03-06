/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ncr: {
          bg:      '#020509',
          surface: '#050d1a',
          card:    '#071226',
          border:  '#0f2040',
          cyan:    '#00e5ff',
          gold:    '#f5c518',
          green:   '#00ff87',
          text:    '#e8f0fe',
          muted:   '#6b7a99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(0,229,255,0.12), transparent)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
