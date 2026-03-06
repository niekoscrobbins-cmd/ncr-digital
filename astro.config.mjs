import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ncr-digital.vercel.app',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
