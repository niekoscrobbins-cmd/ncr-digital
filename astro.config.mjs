import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ncrdigi.com',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
