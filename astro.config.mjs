// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import path from 'path';
import slugify from 'slugify';

// ← Import your PageShell component here:
import PageShell from './src/components/PageShell.astro';

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
            const absolutePath = path.resolve(path.dirname(currentFile), linkFile);
            const relativePath = path.relative(vaultRoot, absolutePath);
            const parts = relativePath
              .replace(/\.md$/, '')
              .split(path.sep)
              .map(s => slugify(s, { lower: true }));
            return '/' + parts.join('/') + '/';
          }
        }
      ]
    ]
  },
  integrations: [
    starlight({
      title: 'DS Garden',
      // ← disable auto‑sidebar
      sidebar: [],
      // ← wire up your PageShell component
      components: { PageShell },
      customCss: ['./src/styles/Mado-Miniflow.css'],
    })
  ]
});
