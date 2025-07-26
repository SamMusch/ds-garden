// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonitions from 'remark-admonitions';

export default defineConfig({
  integrations: [
    starlight({
      title: '',
      social: [],

      markdown: {
        remarkPlugins: [
          [
            wikiLink,
            /** @type {import('remark-wiki-link').Options} */
            { hrefTemplate: p => `/${p}/` }
          ],
          [
            remarkAdmonitions,
            /** @type {import('remark-admonitions').Options} */
            {
              // recognises ```ad-sam``` … fences automatically
              tag: 'ad',        // default
              // feel free to tweak styling later (Infima, icons, etc.)
            }
          ]
        ]
      }
    })
  ],

  markdown: {
    // silence “ad-sam” Shiki warning
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    }
  }
});
