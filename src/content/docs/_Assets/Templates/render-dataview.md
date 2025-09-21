---
CoverImage: null
Covers: null
Due: null
Function: null
HoursDone: null
HoursRemain: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
TimeSpent: null
TimeSpent2: null
_kMDItemDisplayNameWithExtensions: render-dataview.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-09-21'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-09-21 17:00:57 +0000
kMDItemContentCreationDate_Ranking: 2025-09-21 00:00:00 +0000
kMDItemContentModificationDate: 2025-09-21 17:15:43 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-09-21 17:16:54 +0000
kMDItemDocumentIdentifier: '177215'
kMDItemFSCreatorCode: ''
kMDItemFSFinderFlags: '0'
kMDItemFSHasCustomIcon: (null)
kMDItemFSInvisible: '0'
kMDItemFSIsExtensionHidden: '0'
kMDItemFSIsStationery: (null)
kMDItemFSLabel: '0'
kMDItemFSNodeCount: (null)
kMDItemFSOwnerGroupID: '20'
kMDItemFSOwnerUserID: '502'
kMDItemFSTypeCode: ''
kMDItemInterestingDate_Ranking: 2025-09-21 00:00:00 +0000
kMDItemLastUsedDate: 2025-09-21 17:52:31 +0000
kMDItemLastUsedDate_Ranking: 2025-09-21 00:00:00 +0000
kMDItemUseCount: '7'
kMDItemUsedDates: (
modified: '2025-09-21'
published: true
reading_time: 2.8
source_file: render-dataview.md
tags: null
title: render dataview
word_count: 556
---

<%*
const tfile = tp.file.find_tfile(tp.file.path(true));
if (!tfile) {
  new Notice("Templater: active file not found");
  return;
}

const vault = app.vault;
const mdCache = app.metadataCache;

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
  return new Date(ms).toISOString();
}

function fileWikilink(tf) {
  const base = tf.basename;
  return `${base}.md`;
}

function listMarkdown(files) {
  return files.map(f => `- ${fileWikilink(f)}`).join('\n') + '\n';
}

function tableMarkdown(rows) {
  let out = `| Note | Modified |\n| --- | --- |\n`;
  for (const r of rows) out += `| ${r.note} | ${r.modified} |\n`;
  return out + '\n';
}

function gatherMarkdownFilesUnder(folderPath) {
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

function renderQuery(q) {
  const qq = q.trim().replace(/\s+/g, ' ');
  let m = qq.match(/^LIST FROM "([^"]+)" WHERE publish$/i);
  if (m) {
    const from = m[1];
    const files = gatherMarkdownFilesUnder(from)
      .filter(isPublish)
      .sort((a,b) => a.basename.localeCompare(b.basename));
    return '\n' + listMarkdown(files);
  }

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

  return `\n\`\`\`\n${q.trim()}\n\`\`\`\n`;
}

let src = await vault.read(tfile);

const re = /```dataview\s+([\s\S]*?)```/gi;
let changed = false;
let out = src.replace(re, (full, inner) => {
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