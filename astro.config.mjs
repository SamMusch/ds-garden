// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import path from 'path';
import slugify from 'slugify';

// ✅ NEW: scan docs & resolve [[wikilinks]] to real routes by file **basename** (ignore folders)
import fs from 'node:fs';

const SITE_BASE = '/ds-garden/';

const normalizeBase = (s) => s
  .toLowerCase()
  .replace(/\.md$/,'')
  .replace(/\s+|_/g,'-')
  .replace(/\./g,'')           // "0.0-foo" → "00-foo"
  .replace(/[^a-z0-9-]/g,'')
  .replace(/-+/g,'-')
  .replace(/^-|-$/g,'');

function scanDocsForRoutes() {
  const ROOT = new URL('./src/content/docs', import.meta.url).pathname;
  const routesByKey = Object.create(null);

  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        const rel = path.relative(ROOT, p).replace(/\\/g,'/').replace(/\.md$/i,''); // e.g. "_Assets/ML"
        const route = SITE_BASE + rel.toLowerCase() + '/';                           // "/ds-garden/_assets/ml/"
        const baseKey = normalizeBase(path.basename(rel));                           // "ml"
        routesByKey[baseKey] = route; // last wins if duplicates by name
      }
    }
  })(ROOT);

  return { routesByKey, routes: Object.values(routesByKey) };
}

const { routesByKey, routes } = scanDocsForRoutes();

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
          // ✅ NEW: let the plugin resolve [[label]] → real route using only the file's basename
          permalinks: routes, // we treat actual routes as "permalinks"
          pageResolver: (name) => {
            const key = normalizeBase(name);
            const route = routesByKey[key];
            return route ? [route] : [];
          },

          // Existing hrefTemplate retained; short-circuit if we already resolved to a route
          hrefTemplate: (permalink, page) => {
            // ✅ If pageResolver found a route, use it as-is
            if (typeof permalink === 'string' && permalink.startsWith('/')) {
              return permalink;
            }

            // (original logic preserved)
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
      // kill the default sidebar
      sidebar: [],
      // point to your Astro component by path string
      components: {
        PageShell: './src/components/PageShell.astro',
      },
      customCss: ['./src/styles/Mado-Miniflow.css'],
    })
  ]
});
