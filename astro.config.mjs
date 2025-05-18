// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';          // ← import the plugin

export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
      ],
    }),
  ],

  markdown: {
    remarkPlugins: [
      [
        wikiLink,
        /** @type {import('remark-wiki-link').Options} */
        {
          // [[My Note]] → /my-note/
          hrefTemplate: (permalink) => `/${permalink}/`,
          pageResolver: (name) => [
            name
              .toLowerCase()
              .replace(/\.(mdx?|markdown)$/, '')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, ''),
          ],
        },
      ],
    ],
  },
});
