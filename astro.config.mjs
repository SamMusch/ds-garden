import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';

export default defineConfig({
  base: '/ds-garden/',
  markdown: {
    // Syntax highlighting for ad-sam
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    },
    remarkPlugins: [
      [
        wikiLink,
        {
          // Resolve a [[link]] to the matching Astro page
          pageResolver: (permalink, pages) => {
            const clean = permalink.replace(/\.md$/, '');
            return pages.find(p => {
              const stem = p.filePathStem;
              return (
                stem.toLowerCase() === clean.toLowerCase() ||
                p.filePath.toLowerCase().endsWith(`/${clean.toLowerCase()}.md`)
              );
            });
          },
          // Use the Astro-generated URL for that page
          hrefTemplate: (permalink, foundPage) => {
            return foundPage ? foundPage.url : `/${permalink.replace(/\.md$/, '')}/`;
          }
        }
      ],
      remarkAdmonition
    ]
  },
  integrations: [
    starlight({
      title: 'DS Garden',
      components: {
        Admonition: './src/components/Admonition.astro'
      },
      customCss: ['./src/styles/Mado-Miniflow.css', './src/styles/admonitions.css']
    })
  ]
});
