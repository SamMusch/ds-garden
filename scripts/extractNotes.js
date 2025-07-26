// scripts/extractNotes.js
// Usage: node extractNotes.js <vault> <targetDir>
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

const [ , , vaultDir, targetDir ] = process.argv;
if (!vaultDir || !targetDir) {
  console.error("Usage: node extractNotes.js <vaultDir> <targetDir>");
  process.exit(1);
}

const copyIfPublish = async (src, dst) => {
  let raw = await fs.readFile(src, "utf8");
  const parsed = matter(raw);

  // Skip only if publish:false appears
  // if (parsed.data.publish === false) return;

  // Inject a title if missing (use filename without extension)
  if (!parsed.data.title) {
    parsed.data.title = path.parse(src).name;
    raw = matter.stringify(parsed.content, parsed.data);
  }

  await fs.ensureDir(path.dirname(dst));
  await fs.writeFile(dst, raw);
  console.log("✓", path.relative(vaultDir, src));
};


const walk = async dir => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(full);
    } else if (e.isFile() && e.name.endsWith(".md")) {
      const rel = path.relative(vaultDir, full);
      await copyIfPublish(full, path.join(targetDir, rel));
    }
  }
};

await fs.remove(targetDir);      // clean old copies
await walk(vaultDir);
