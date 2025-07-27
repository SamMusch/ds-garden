import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
// import remarkAdmonition from './src/remark/admonition.js';
import path from 'path';
import slugify from 'slugify';

export default defineConfig({
  base: '/ds-garden/',
  markdown: {
    // 1. Shiki configuration for ad-sam syntax
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    },
    // 2. Remark plugins run on all Markdown files
    remarkPlugins: [
      [
        wikiLink,
        {
          hrefTemplate: (permalink, page) => {
            // Local vault root path
            const vaultRoot = '/Users/Sam/Desktop/notes-vault';
            // Ensure the link includes .md
            const linkFile = permalink.endsWith('.md') ? permalink : `${permalink}.md`;
            // Resolve absolute path based on the current file
            const currentFile = page.filePath;
            const absolutePath = path.resolve(path.dirname(currentFile), linkFile);
            // Compute relative path from vault root
            const relativePath = path.relative(vaultRoot, absolutePath);
            // Split into segments, strip .md, slugify each segment
            const parts = relativePath
              .replace(/\.md$/, '')
              .split(path.sep)
              .map(segment => slugify(segment, { lower: true }));
            // Construct URL
            return '/' + parts.join('/') + '/';
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
        // Admonition: './src/components/Admonition.astro'
      },
      customCss: ['./src/styles/Mado-Miniflow.css'] // './src/styles/admonitions.css'
    })
  ]
});
