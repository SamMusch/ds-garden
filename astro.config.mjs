// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';

export default defineConfig({
  // ─────────────────── integrations ───────────────────
  integrations: [
    starlight({
      title: '',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
      ],

      /* make <Admonition …> available in Markdown */
      components: {
        Admonition: './src/components/Admonition.astro'
      }
    })
  ],

  // ─────────────────── global markdown opts ───────────────────
  markdown: {
    remarkPlugins: [
      [
        wikiLink,
        /** @type {import('remark-wiki-link').Options} */
        {
          hrefTemplate: p => `/${p}/`,
          pageResolver: name => [
            name
              .toLowerCase()
              .replace(/\.mdx?|(markdown)$/i, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          ]
        }
      ],
      remarkAdmonition
    ],

    /* dummy lexer so Shiki stops warning about “ad‑sam” */
    shikiConfig: {
      langs: [
        { id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }
      ]
    }
  }
});
