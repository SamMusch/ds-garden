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
_kMDItemDisplayNameWithExtensions: DB-RDS.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-15 02:16:22 +0000
kMDItemContentCreationDate_Ranking: 2026-01-15 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-15 02:16:22 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-15 02:16:22 +0000
kMDItemDocumentIdentifier: '0'
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
kMDItemInterestingDate_Ranking: 2026-01-15 00:00:00 +0000
modified: '2026-01-14'
published: true
reading_time: 0.3
source_file: DB-RDS.md
tags: null
title: DB RDS
word_count: 53
---

**Amazon RDS for PostgreSQL**

AWS Console ⟶ Amazon RDS → Create database → Engine: PostgreSQL

*RDS for PostgreSQL* vs *Aurora PostgreSQL*

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***RDS***

- Simplest setup + lowest baseline cost

- One primary + (optional) Multi-AZ standby/readable standbys 

- EBS-backed storage with autoscaling.
  </div>
  <div class="hb-col" markdown="block">
***Aurora***

- Serverless scaling (Aurora Serverless) / variable workloads. 

- High read scaling

- Aurora’s architecture/perf features
  </div>
</div>