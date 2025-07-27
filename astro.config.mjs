import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import remarkAdmonition from './src/remark/admonition.js';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

// Recursively search for a file within your vault root
function findFile(dir, filename) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(fullPath, filename);
      if (found) return found;
    } else if (entry.name === filename) {
      return fullPath;
    }
  }
  return null;
}

export default defineConfig({
  base: '/ds-garden/',
  markdown: {
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    },
    remarkPlugins: [
      [
        wikiLink,
        {
          hrefTemplate: (permalink, page) => {
            const vaultRoot = '/Users/Sam/Desktop/notes-vault';
            const linkFile = permalink.endsWith('.md') ? permalink : `${permalink}.md`;
            const currentFile = page.filePath;
            // Try resolving relative to the current file
            let absolutePath = path.resolve(path.dirname(currentFile), linkFile);
            // If not found, search entire vault
            if (!fs.existsSync(absolutePath)) {
              absolutePath = findFile(vaultRoot, linkFile);
            }
            // If still not found, fallback to simple slug
            if (!absolutePath) {
              const fallback = slugify(permalink, { lower: true });
              return `/${fallback}/`;
            }
            // Compute the URL path from vault root
            const relativePath = path.relative(vaultRoot, absolutePath);
            const parts = relativePath
              .replace(/\.md$/, '')
              .split(path.sep)
              .map(segment => slugify(segment, { lower: true }));
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
        Admonition: './src/components/Admonition.astro'
      },
      customCss: ['./src/styles/Mado-Miniflow.css', './src/styles/admonitions.css']
    })
  ]
});
