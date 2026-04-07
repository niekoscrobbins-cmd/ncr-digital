import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://ncrdigi.com',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['noopener', 'noreferrer'], target: '_blank' }],
    ],
  },
  output: 'static',
});