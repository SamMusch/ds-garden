// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';

export default defineConfig({
  integrations: [
    starlight({
      title: ' ',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
      ],

      style: ['src/styles/custom_callouts.css'],

      markdown: {
        // register a dummy lexer so Shiki stops warning about “ad‑sam”
        shikiConfig: {
          langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
        }
      }
    })
  ],

  markdown: {
    remarkPlugins: [
      [
        wikiLink,
        /** @type {import('remark-wiki-link').Options} */
        {
          hrefTemplate: (permaLink) => `/${permaLink}/`,
          pageResolver: (name) => [
            name
              .toLowerCase()
              .replace(/\.mdx?|(markdown)$/,'')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          ]
        }
      ],
      // convert ```ad-sam fenced blocks to <Admonition type="sam">…</Admonition>
      remarkAdmonition
    ]
  }
});
