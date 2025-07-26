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
      components: {
        Admonition: './src/components/Admonition.astro'   // you already have this
      },

      markdown: {
        remarkPlugins: [
          [wikiLink, { hrefTemplate: p => `/${p}/` }],
          remarkAdmonition                               // ← now it actually runs
        ]
      }
    })
  ],

  markdown: {
    // keep the Shiki tweak here
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    }
  }
});
