// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import wikiLink from 'remark-wiki-link';
import path from 'path'; 
import slugify from 'slugify';

// ✅ NEW: scan docs & resolve [[wikilinks]] to real routes by file **basename** (ignore folders)
import fs from 'node:fs';
// ✅ NEW: visit utility for a tiny remark plugin that linkifies bare *.md filenames
import { visit } from 'unist-util-visit';

const SITE_BASE = '/ds-garden/';

const normalizeBase = (s) => s
  .toLowerCase()
  .replace(/\.md$/,'')
  .replace(/\s+|_/g,'-')
  .replace(/[^a-z0-9.-]/g,'')  // allow dots
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

// === NEW: remark plugin to linkify bare "something.md" mentions by basename ===
function remarkLinkifyMdFilenames(opts) {
  const MD_RE = /\b([A-Za-z0-9._-]+)\.md\b/g; // captures "name.md"
  const map = opts?.routesByKey || {};

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      // don't touch code blocks or existing links
      if (!parent || ['link', 'linkReference', 'inlineCode', 'code'].includes(parent.type)) return;

      const value = node.value;
      let m, last = 0;
      const out = [];
      MD_RE.lastIndex = 0;

      while ((m = MD_RE.exec(value))) {
        const [full, nameOnly] = m;
        const before = value.slice(last, m.index);
        if (before) out.push({ type: 'text', value: before });

        const key = normalizeBase(nameOnly);
        const route = map[key];
        if (route) {
          out.push({
            type: 'link',
            url: route,
            title: null,
            children: [{ type: 'text', value: full }], // keep original "something.md" text
          });
        } else {
          out.push({ type: 'text', value: full });
        }
        last = m.index + full.length;
      }
      if (out.length) {
        const after = value.slice(last);
        if (after) out.push({ type: 'text', value: after });
        parent.children.splice(index, 1, ...out);
        return index + out.length;
      }
    });
  };
}
// === END NEW ===

export default defineConfig({
  base: '/ds-garden/',
  markdown: {
    shikiConfig: {
      langs: [{ id: 'ad-sam', scopeName: 'text.ad-sam', grammar: {} }]
    },
    remarkPlugins: [
      // NEW: linkify bare *.md mentions (e.g., "0.0-neural-network-taxonomy.md")
      [remarkLinkifyMdFilenames, { routesByKey }],

      // Existing wikilink handling (kept) — now resolves [[label]] by basename
      [
        wikiLink,
        {
          // we treat actual routes as "permalinks"
          permalinks: routes,
          pageResolver: (name) => {
            const key = normalizeBase(name);
            const route = routesByKey[key];
            return route ? [route] : [];
          },

          // Existing hrefTemplate retained; short-circuit if already resolved
          hrefTemplate: (permalink, page) => {
            // ✅ If pageResolver found a route (starts with "/"), use it as-is
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
      customCss: ['./src/styles/Mado-Miniflow.css', './src/styles/list-tighten.css'],
    })
  ]
});
