---
published: true
---

<%*
/**
   * Render Dataview-like blocks to static Markdown (append-only, safe).
   * - Leaves original ```dataview blocks intact
   * - Appends a rendered snapshot between <!-- RENDERED-DV START/END -->
   * Supported query shapes (case-insensitive):

   *   1) LIST FROM "folder" WHERE publish
   *   2) TABLE WITHOUT ID file.link AS Note, dateformat(file.mtime, "ff") AS Modified
   *      FROM "<folder or empty>" WHERE publish SORT file.mtime desc [LIMIT N]
 *
   * Notes:

   * - "publish" is read from frontmatter (true/false)
   * - mtime shown in ISO by default (tweak formatMtime)
   * - Links are Obsidian wikilinks note-name.md for now (safe for your current pipeline)
 */

const tfile = tp.file.find_tfile(tp.file.path(true));
if (!tfile) {
  new Notice("Templater: active file not found");
  return;
}

const vault = app.vault;
const mdCache = app.metadataCache;

// ---------- helpers ----------
function getFrontmatter(tf) {
  const fm = mdCache.getFileCache(tf)?.frontmatter ?? {};
  return fm || {};
}

function isPublish(tf) {
  const fm = getFrontmatter(tf);
  const v = (fm.publish ?? fm.PUBLISH ?? fm.Published ?? false);
  if (typeof v === 'boolean') return v;
  return String(v).toLowerCase() === 'true';
}

function formatMtime(ms) {
  // Tweak this if you want a different format later
  return new Date(ms).toISOString();
}

function fileWikilink(tf) {
  // basename.md (no extension)
  const base = tf.basename;
  return `${base}.md`;
}

function listMarkdown(files) {
  return files.map(f => `- ${fileWikilink(f)}`).join('\n') + '\n';
}

function tableMarkdown(rows) {
  // rows: [{note, modified}]
  let out = `| Note | Modified |\n| --- | --- |\n`;
  for (const r of rows) out += `| ${r.note} | ${r.modified} |\n`;
  return out + '\n';
}

function gatherMarkdownFilesUnder(folderPath) {
  // Accepts "" or relative folder path from vault root
  const root = folderPath ? folderPath : "";
  const abs = root ? root : "";
  const start = abs ? vault.getAbstractFileByPath(abs) : vault.getRoot();
  const results = [];

  function walk(entry) {
    if (!entry) return;
    if (entry.children && entry.children.length) {
      for (const ch of entry.children) walk(ch);
    } else if (entry.extension === 'md') {
      results.push(entry);
    }
  }
  walk(start);
  return results;
}

// Parse & render a single dataview query string
function renderQuery(q) {
  const qq = q.trim().replace(/\s+/g, ' ');
  // Pattern 1: LIST FROM "folder" WHERE publish
  let m = qq.match(/^LIST FROM "([^"]+)" WHERE publish$/i);
  if (m) {
    const from = m[1];
    const files = gatherMarkdownFilesUnder(from)
      .filter(isPublish)
      .sort((a,b) => a.basename.localeCompare(b.basename));
    return '\n' + listMarkdown(files);
  }

  // Pattern 2: TABLE ... FROM "<folder or empty>" WHERE publish SORT ... [LIMIT N]
  m = qq.match(/^TABLE WITHOUT ID file\.link AS Note,\s*dateformat\(file\.mtime,\s*".*?"\)\s*AS\s*Modified\s*FROM\s*"([^"]*)"\s*WHERE\s*publish(?:\s*SORT\s*file\.mtime\s*desc)?(?:\s*LIMIT\s*(\d+))?$/i);
  if (m) {
    const from = m[1] || "";
    const limit = m[2] ? parseInt(m[2], 10) : Infinity;

    const files = gatherMarkdownFilesUnder(from)
      .filter(isPublish)
      .map(tf => ({ tf, mtime: tf.stat.mtime }))
      .sort((a,b) => b.mtime - a.mtime)
      .slice(0, limit);

    const rows = files.map(x => ({
      note: fileWikilink(x.tf),
      modified: formatMtime(x.mtime)
    }));
    return '\n' + tableMarkdown(rows);
  }

  // Fallback: leave the original block as a plain code block snapshot
  return `\n\`\`\`\n${q.trim()}\n\`\`\`\n`;
}

// ---------- main transform ----------
let src = await vault.read(tfile);

// Find ```dataview ... ```
const re = /```dataview\s+([\s\S]*?)```/gi;
let changed = false;
let out = src.replace(re, (full, inner) => {
  // If we already appended a rendered section just below, skip duplicating.
  const marker = '<!-- RENDERED-DV START -->';
  if (full.includes(marker)) return full;

  const rendered = renderQuery(inner);
  changed = true;
  return `${full}\n\n<!-- RENDERED-DV START -->\n${rendered}<!-- RENDERED-DV END -->`;
});

if (changed) {
  await vault.modify(tfile, out);
  new Notice("Rendered Dataview (append-safe) completed.");
} else {
  new Notice("No ```dataview blocks found (or nothing to change).");
}
%>