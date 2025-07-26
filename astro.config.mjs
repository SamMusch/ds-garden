// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';

export default defineConfig({
  integrations: [
    starlight({
      title: '',
      social: [],
      components: {
        Admonition: './src/components/Admonition.astro'
      }
    })
  ],

  markdown: {
    remarkPlugins: [
      [wikiLink, { hrefTemplate: p => `/${p}/` }],
      remarkAdmonition
    ],
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    }
  }
});
