import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';

export default defineConfig({
  base: '/ds-garden/',
  markdown: {
    // 1. Shiki configuration for ad-sam syntax
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    },
    // 2. Remark plugins run on all Markdown files
    remarkPlugins: [
      [ wikiLink,        { hrefTemplate: p => `/${p}/` } ],
      remarkAdmonition
    ]
  },
  integrations: [
    starlight({
      // Required site title
      title: 'DS Garden',
      // Register the Admonition component for MDX output
      components: {
        Admonition: './src/components/Admonition.astro'
      },
      // Ensure your CSS loads
      customCss: ['./src/styles/Mado-Miniflow.css', './src/styles/admonitions.css']
    })
  ]
});