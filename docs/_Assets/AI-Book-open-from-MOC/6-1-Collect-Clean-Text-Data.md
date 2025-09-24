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
_kMDItemDisplayNameWithExtensions: 6.1 Collect and Clean Text Data.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-05-20 16:51:09 +0000
kMDItemContentCreationDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-20 21:50:44 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-20 16:52:19 +0000
kMDItemDocumentIdentifier: '167131'
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
kMDItemInterestingDate_Ranking: 2025-05-20 00:00:00 +0000
modified: '2025-05-20'
published: true
reading_time: 0.5
source_file: 6.1 Collect and Clean Text Data.md
tags: null
title: 6.1 Collect and Clean Text Data
word_count: 91
---

### 6.1 Collect & Clean Text Data Fast

A 5‑step pipeline to build quality corpora.

1. **Source**: Common Crawl, arXiv, internal SQL exports.  
2. **License/PII filters**: `scancode-toolkit`, `presidio`.  
3. **Cleaning**: HTML strip, Unicode normalise, dedup MinHash.  
4. **Language filter**: `langdetect` or fastText LID.  
5. **Save**: Parquet + Zstd.

```python
from bs4 import BeautifulSoup, Comment
import re, langdetect
def clean_html(raw):
    soup = BeautifulSoup(raw, "lxml")
    for c in soup(["script","style", Comment]): c.extract()
    txt = re.sub(r'\s+', ' ', soup.get_text(' ')).strip()
    return txt if langdetect.detect(txt) == 'en' else None
```