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
_kMDItemDisplayNameWithExtensions: DB-Aurora.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-22 17:40:45 +0000
kMDItemContentCreationDate_Ranking: 2025-12-22 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-22 18:27:49 +0000
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
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading_time: 1.4
source_file: DB-Aurora.md
tags: null
title: DB Aurora
word_count: 283
---

**Purpose**: Automatically scale capacity

**AWS Aurora**

- **is**: a fully managed RDBMS

- **does**: provides performance & scalability

- **compatible with**: MySQL & PostgreSQL

- **designed for**: enterprise workloads

**architecture**: distributed, shared-storage. (separates compute from storage)

### Aurora vs RDS
*RDS* ecosystem: automates provisioning / scaling

- *Aurora*

1. RDS = managed database on a single primary instance.

2. Aurora = distributed storage + multiple instances.

RDS deployment

- **tools**: AWS Management Console, CLI, or API.

- **Aurora clusters**: Aurora MySQL / Aurora PostgreSQL

### Features and variants

- **Aurora Serverless v2:** automatically scales compute capacity

- **Aurora Global Database:** (global apps) replicates data across multiple regions

- **Aurora DSQL (Distributed SQL):** adds globally distributed query execution for near-limitless scaling within and across regions

All variants include

- continuous backup to S3

- integration with AWS Key Management Service for encryption at rest

---

### 1. What Aurora is (conceptual)

Read first: **Amazon Aurora overview**  
Goal: understand _what problem it solves_.

Focus on:

- Managed **relational** database (MySQL / PostgreSQL compatible).

- Storage and compute are **decoupled**.

- One **writer**, many **readers**.

- Built-in replication, backups, and failover.

### 2. How Aurora differs from RDS

Read next: **Aurora vs Amazon RDS**.
Understand, in order:

1. *RDS*: managed database on a single primary instance.

2. *Aurora*: distributed storage + multiple instances.

3. Result: faster failover, better read scaling, higher availability.

Mental model: _Aurora is “cloud-native Postgres/MySQL,” not just hosted Postgres/MySQL._

### 3. Core Aurora concepts

- **Cluster**

- **Writer endpoint**

- **Reader endpoint**

- **Instances**

- **Storage layer (6 copies across 3 AZs)**

### 4. Hands-on

Follow **one** tutorial:

- Create an Aurora PostgreSQL cluster.

- Connect via psql.

- Add a read replica.

- Observe reader vs writer endpoints.

---

### 5. What to learn _after_

Only proceed if you’ll actually use Aurora:

- Serverless v2

- Auto-scaling readers

- Failover behavior

- Cost model (this is where surprises happen)