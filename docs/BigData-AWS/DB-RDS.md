---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2026-01-15 02:16:22 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:24 +0000
kMDItemDateAdded: 2026-01-15 02:16:22 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.3
source_file: DB-RDS.md
tags: null
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