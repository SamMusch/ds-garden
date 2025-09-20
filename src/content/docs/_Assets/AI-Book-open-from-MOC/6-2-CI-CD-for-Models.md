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
_kMDItemDisplayNameWithExtensions: 6.2 CI-CD for Models.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-25'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-05-20 16:51:09 +0000
kMDItemContentCreationDate_Ranking: 2025-05-20 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-20 21:50:44 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-20 16:52:19 +0000
kMDItemDocumentIdentifier: '167132'
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
source_file: 6.2 CI-CD for Models.md
tags: null
title: 6.2 CI CD for Models
word_count: 101
---

### 6.2 CI/CD for Models (GitHub Actions)

Each push → test → build Docker → push → deploy.

```yaml
name: CI‑CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { lfs: true }
      - uses: actions/setup-python@v5
        with: { python-version: '3.11' }
      - run: pip install -r requirements.txt
      - run: pytest
      - run: docker build -t ghcr.io/${{ github.repository }}:${{ github.sha }} .
      - run: echo $CR_PAT | docker login ghcr.io -u ${{ github.actor }} --password-stdin
      - run: docker push ghcr.io/${{ github.repository }}:${{ github.sha }}
```

**Secrets**: `CR_PAT` for GHCR, cloud deploy tokens.

*Store weights via Git‑LFS to avoid huge Docker layers.*