/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette. The neutrals are deliberately warm (paper,
        // stone, warm near-black) rather than the cool blue-greys they
        // replaced — the warmth carries as much of the identity as the
        // typefaces do, and cool-grey-on-white is the generic default.
        ncr: {
          bg:      '#fbf8f3', // warm paper
          surface: '#f2eee8', // warm secondary ground
          card:    '#ffffff', // an actual lift now that bg is not white
          border:  '#ded7cb', // warm stone hairline
          rule:    '#c9c0b2', // stronger divider
          text:    '#1b1917', // warm near-black
          muted:   '#6b645c', // warm grey
          accent:  '#173248', // deep ink navy
          accentHover: '#0f2536',
        },
      },
      fontFamily: {
        // Display serif for h1/h2 and pull quotes only. Everything else is
        // sans; mono is reserved for data (metrics, dates, table captions).
        display: ['"Newsreader Variable"', 'Newsreader', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"IBM Plex Sans Variable"', '"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Display sizes carry weight 400/450, not 800. The weight drop matters
        // as much as the serif swap — a serif at 800 with tight tracking is
        // just a different flavour of the same problem.
        'display-xl': ['4.25rem', { lineHeight: '1.06', letterSpacing: '-0.015em', fontWeight: '400' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.012em', fontWeight: '400' }],
        'display-md': ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.008em', fontWeight: '450' }],
      },
      borderRadius: {
        // Pills for buttons/tags/badges, `card` for cards and images, and a
        // deliberate sharp 0 for tables and full-bleed dividers. The mix is
        // what reads as designed; rounding everything does not.
        pill: '999px',
        card: '10px',
      },
    },
  },
  plugins: [],
};
