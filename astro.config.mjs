
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  markdown: {
      remarkPlugins: [],
      rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
        behavior: 'wrap'
      }]],
      shikiConfig: {
        theme: 'poimandres',
        langs: [],
        wrap: false
      }
  },
  site: 'http://localhost:3000/',
  integrations: [svelte(), sitemap()]
});