// scripts/buildSearchIndex.js
// Usage: node buildSearchIndex.js <notesDir> <outFile>
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

const [ , , notesDir, outFile ] = process.argv;
if (!notesDir || !outFile) {
  console.error("Usage: node buildSearchIndex.js <notesDir> <outFile>");
  process.exit(1);
}

const records = [];

const walk = async dir => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && entry.name.endsWith(".md")) {
      const raw = await fs.readFile(full, "utf8");
      const { data, content } = matter(raw);
      records.push({
        title: data.title || path.parse(entry.name).name,
        tags: data.tags || [],
        path: "/" + path.relative(notesDir, full).replace(/\.md$/, ""),
        body: content
      });
    }
  }
};

await walk(notesDir);
await fs.outputJSON(outFile, records, { spaces: 0 });
console.log(`✓ search index (${records.length} docs) → ${outFile}`);