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

      /* expose the component used by the plugin */
      components: {
        Admonition: './src/components/Admonition.astro'
      },

      /* markdown pipeline that Starlight actually executes */
      markdown: {
        remarkPlugins: [
          [
            wikiLink,
            /** @type {import('remark-wiki-link').Options} */
            {
              hrefTemplate: p => `/${p}/`,
              pageResolver: n => [
                n.toLowerCase()
                 .replace(/\.mdx?|(markdown)$/i, '')
                 .replace(/[^a-z0-9]+/g, '-')
                 .replace(/(^-|-$)/g, '')
              ]
            }
          ],
          remarkAdmonition            // ← our custom plugin
        ]
      }
    })
  ],

  /* this part is still honoured by Astro and Shiki */
  markdown: {
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    }
  }
});
