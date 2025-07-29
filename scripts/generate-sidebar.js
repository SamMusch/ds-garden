// scripts/generate-sidebar.mjs
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

const DOCS_PATH = path.resolve('src/content/docs');
const EXCLUDE = ['_Assets'];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    if (EXCLUDE.includes(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(DOCS_PATH, fullPath);

    if (entry.isDirectory()) {
      const subPages = walk(fullPath);
      if (subPages.length > 0) {
        pages.push({
          label: entry.name,
          items: subPages,
        });
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const baseName = entry.name.replace(/\.md$/, '');
      pages.push({
        label: baseName,
        link: '/' + slugify(relativePath.replace(/\.md$/, ''), { lower: true }),
      });
    }
  }

  return pages;
}

const sidebar = walk(DOCS_PATH);
const output = `export default ${JSON.stringify(sidebar, null, 2)};\n`;

fs.writeFileSync('src/config/sidebar.generated.js', output);
console.log('✅ Sidebar config generated.');
