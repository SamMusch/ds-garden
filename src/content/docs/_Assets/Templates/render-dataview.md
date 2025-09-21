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
if (!tfile) return;

const fileContent = await app.vault.read(tfile);
const re = /```dataview\s+([\s\S]*?)```/gi;

let changed = false;
let out = fileContent.replace(re, async (match, query) => {
  const pages = app.plugins.plugins.dataview.api.pages();
  const selected = pages.where(p => p.publish);

  let md = `\n| Note | Quality | Remain |\n| --- | --- | --- |\n`;
  for (const p of selected) {
    md += `| ${p.file.name}.md | ${p.Quality ?? ""} | ${p.HoursRemain ?? ""} |\n`;
  }
  changed = true;
  return `${match}\n\n<!-- RENDERED-DV START -->\n${md}<!-- RENDERED-DV END -->`;
});

if (changed) {
  await app.vault.modify(tfile, out);
  new Notice("Rendered Dataview → Markdown appended.");
} else {
  new Notice("No dataview block found.");
}
%>