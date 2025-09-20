// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import path from 'path';
import slugify from 'slugify';

export default defineConfig({
  // Required for GitHub Pages (project site)
  site: 'https://sammusch.github.io', // owner site root
  base: '/ds-garden',                  // repo subpath (no trailing slash)
  output: 'static',                    // Pages is static hosting

  markdown: {
    shikiConfig: {
      // keep your custom ad-sam block for syntax highlighting
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }],
    },
    remarkPlugins: [
      [
        wikiLink,
        {
          // Preserve your Obsidian-style wiki-link behavior
          hrefTemplate: (permalink, page) => {
            const vaultRoot = '/Users/Sam/Desktop/notes-vault';
            const linkFile = permalink.endsWith('.md') ? permalink : `${permalink}.md`;
            const currentFile = page.filePath;
            const absolutePath = path.resolve(path.dirname(currentFile), linkFile);
            const relativePath = path.relative(vaultRoot, absolutePath);
            const parts = relativePath
              .replace(/\.md$/, '')
              .split(path.sep)
              .map((s) => slugify(s, { lower: true }));
            return '/' + parts.join('/') + '/';
          },
        },
      ],
    ],
  },

  integrations: [
    starlight({
      title: 'DS Garden',
      // kill the default sidebar
      sidebar: [],
      // point to your Astro component by path string
      components: {
        PageShell: './src/components/PageShell.astro',
      },
      customCss: ['./src/styles/Mado-Miniflow.css'],
    }),
  ],
});
