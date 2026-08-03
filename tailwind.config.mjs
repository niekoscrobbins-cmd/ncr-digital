/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light-first editorial palette. Namespace/class names (ncr-cyan etc.)
        // kept stable even where the underlying color changed, to avoid a
        // repo-wide class rename during the redesign.
        ncr: {
          bg:      '#ffffff',
          surface: '#f7f8fa',
          card:    '#ffffff',
          border:  '#e2e5eb',
          cyan:    '#0072ce',
          text:    '#0b0e14',
          muted:   '#5b6472',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
