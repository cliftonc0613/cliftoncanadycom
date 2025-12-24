// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { rehypeWrapTables } from './src/plugins/wrapTables';

// https://astro.build/config
export default defineConfig({
  site: 'https://cliftoncanady.com',
  integrations: [react(), tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
});
