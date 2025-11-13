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
_kMDItemDisplayNameWithExtensions: Snowflake.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-23'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-15 16:38:16 +0000
kMDItemContentCreationDate_Ranking: 2025-10-15 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-15 21:36:47 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-15 17:13:58 +0000
kMDItemDocumentIdentifier: '223516'
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
kMDItemInterestingDate_Ranking: 2025-10-15 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-15 21:12:58 +0000
kMDItemLastUsedDate_Ranking: 2025-10-15 00:00:00 +0000
kMDItemUseCount: '55'
kMDItemUsedDates: (
modified: '2025-10-15'
published: true
reading_time: 2.5
source_file: Snowflake.md
tags: null
title: Snowflake
word_count: 507
---

### Systems-Thinking Model

| Layer            | Guiding Question             | Snowflake                                      |
| ---------------- | ---------------------------- | ---------------------------------------------- |
| **Purpose**      | Why does this system exist?  | Enable scalable, cloud-native data warehousing |
| **Capabilities** | What does it do?             | Store / query / share massive datasets         |
| **Mechanisms**   | How does it achieve that?    | Elastic compute, separation of storage/compute |
| **Architecture** | How are parts organized?     | Layers (Cloud Services ⟶ Compute ⟶ Storage)    |
| **Components**   | What are the concrete parts? | VWs, Metadata Services, etc.                   |

### Snowflake Overview

Resources

- [Playlist | Basics](https://www.youtube.com/playlist?list=PLavJpcg8cl1HrgCysWpFVLGczFA1aH8jW)

    - [Architecture](https://www.youtube.com/watch?v=GtVwChmxdpw&list=PLavJpcg8cl1HrgCysWpFVLGczFA1aH8jW&index=3&t=1s)

- [Architecture](https://docs.snowflake.com/en/user-guide/intro-key-concepts)

Key Terms:

- **VWs** (virtual warehouses): Independent compute clusters that execute SQL queries, load data, and run transformations.

- **Architectures**: Overall design of Snowflake. Separates & orchestrates core subsystems.

    - **Layers**: The core subsystems.

        - **Components**: The concrete building blocks inside each layer.

**Snowflake**:

- **Supported workloads**: ML / streaming analytics / BI / unstructured data processing

- **Integrations**: Tableau, Fivetran, APIs

- **Hosted on**: AWS

Over time:

- **2020**: *Snowpark* (framework) for data pipelines (SQL/Python)

- **2021**: *Unistore* (workload) combines transactional & analytical operations within 1 platform

- **2023**: *Native App* (framework) to build / distribute / monetize apps that run securely within Snowflake

- **2024**: *Cortex* (genAI services) embedded into the platform.


## Notes
### 1. Purpose

- **Now**: Lots of manual "glue" code from FiveTran ⟶ postgres ⟶ SQL queries ⟶ Tableau.

- **Snowflake**: Unified single platform. Store ⟶ query ⟶ share.

---

### 2. Capabilities

> **In essence:** Snowflake’s capabilities let you _store once, query anywhere, scale automatically,_ and _share securely._

Core 3 categories:

- **Storage**: Centralizes data from Fivetran + postgres.

- **Compute** / **Processing**: Replaces postgres-based analytics processing

- **Share**: Share across accounts/clouds. Reduces duplication.

---

### 3. Mechanisms

> **In essence:** Snowflake achieves its capabilities by **decoupling storage/compute**, **automating scaling/optimization**, and using **rich metadata** to prune and share data efficiently.

1. **Decoupling storage/compute**: Independent subsystems ⟶ flexibility/scale.

2. **Automating scaling/optimization**: Auto-scale/multi-cluster warehouses, auto-clustering, compression, statistics collection, result caching, managed replication.

3. **Uses rich metadata**: Micro-partition stats enable aggressive pruning; time travel/clone are metadata pointers; secure sharing exposes metadata, not raw copies.

---

### 4. Architecture

[Architecture](https://docs.snowflake.com/en/user-guide/intro-key-concepts) ⟶ [image](https://docs.snowflake.com/en/_images/architecture-overview.png)

Snowflake’s architecture is a 3-layer system: **Storage**, **Compute**, and **Cloud Services**.  

**3 layers**

1. **Storage**: In cloud DBs (schemas ⟶ tables/views)

2. **Compute** / **Processing**: Via [virtual warehouses](https://docs.snowflake.com/en/user-guide/warehouses)

3. **Cloud Services**: Coordination (security, optimization, sharing).

---

### 5. Components

Within the 3 layers:

1. **Storage layer** components:

    - **Databases ⟶ Schemas ⟶ Tables/Views ⟶ Micro-partitions**

2. **Compute / Processing layer** components :

    - **Virtual Warehouses**

    - **Resource Monitors**

3. **Services layer** components:

    - **Catalog/Optimizer/Transactions** (services layer)

    - **RBAC** (**Roles**, **Grants**), **Network Policies**

    - **Policies**: **Masking**, **Row Access**, **Tags/Classification**

    - **Search Optimization Service** (point-lookups), **Query Acceleration Service** (optional)

Other components:

- **For Ingestion/Integration**

    - **Fivetran connectors** ⟶ use **COPY** or **Snowpipe** (auto-ingest)

    - **After-Fivetran transforms** ⟶ **Streams** (change capture) + **Tasks** (scheduled ELT)

    - **Postgres** as source via Fivetran or **External Tables**

- **For Dev**

    - **SQL** + **UDFs**

    - **Snowpark** (Python)

- **For Tableau**

    - **ODBC/JDBC/Snowflake connector** ⟶ each Tableau project uses its own warehouse

    - **Views** for dashboards