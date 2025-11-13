---
'"https://chatgpt.com/backend-api/estuary/content?id': file_000000006a9061f5a489358a52fcac8e&ts=488993&p=fs&cid=1&sig=d158c19abebd21b1f6867752c913d4a83db2e97d968e7b3816b682a758f3f72d&v=0",
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
_kMDItemDisplayNameWithExtensions: Hadoop.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-10-23'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-13 17:58:20 +0000
kMDItemContentCreationDate_Ranking: 2025-10-13 00:00:00 +0000
kMDItemContentModificationDate: 2025-10-15 16:41:47 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-13 20:41:40 +0000
kMDItemDocumentIdentifier: '223490'
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
kMDItemInterestingDate_Ranking: 2025-10-13 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-13 17:58:37 +0000
kMDItemLastUsedDate_Ranking: 2025-10-13 00:00:00 +0000
kMDItemUseCount: '141'
kMDItemUsedDates: (
kMDItemWhereFroms: (
modified: '2025-10-15'
published: true
reading_time: 1.6
source_file: Hadoop.md
tags: null
title: Hadoop
word_count: 321
---

| Layer            | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| **Purpose**      | Distributed processing of large data sets                    |
| **Capabilities** | Store + process massive data across clusters                 |
| **Mechanisms**   | Batch parallelism (MapReduce), distributed storage (HDFS)    |
| **Architecture** | Master/Worker model: NameNode + DataNodes + YARN             |
| **Components**   | HDFS, MapReduce, YARN, Hive, Pig, Spark (extended ecosystem) |


### Overview

!!! sam
    Hadoop 

    - **definition**: *a distributed data platform* (`HDFS` + `YARN`) that hosts engines (eg `Spark`/`Hive`)

    - **capabilities**:

        - *reliable* data storage

        - *parallel* data analysis

    - **mechanisms**: 

        - *horizontal scaling*: adds more servers (ie *nodes*)

        - *fault tolerance*: built in data redundancy (3 copies) in case a node fails

        - *resource isolation:* `YARN` containers (CPU/RAM) allocated to engines

    - **components**:

        - `HDFS` (storage)

        - `YARN` (cluster resource manager)

        - Common services like cataloging / security / coordination.


### Sequential process

!!! sam
    Hadoop flow: **Ingest ⟶ Store ⟶ Govern ⟶ Coordinate ⟶ Process/Analyze/Serve ⟶ Persist**

    - *ingest* with **Sqoop/Kafka/Flume**

    - *store* with **HDFS**

    - *govern* with **Ranger**

    - *coordinate* with **YARN**

    - *process/analyze/serve* with **MR/Spark/Hive**

    - *persist* with **HDFS/HBase**


!!! sam
    Hadoop flow in more detail:

    1. **Ingest**

        - _Batch_: **Sqoop** from RDBMS.

        - _Real-time_: **Kafka** (or **Flume**) events.

    2. **Store**

        - *In blocks*: **HDFS** (blocks + replication)

        - *In tables*: **Kudu** (mutable columnar)

        - *In wide-rows*: **HBase** (NoSQL)  

    3. **Govern**

        - *auth/security*: **Ranger**

        - *catalogs schemas*: **Hive Metastore**

    4. **Coordinate**

        - *provides cluster resources*: **YARN**

    5. **Process/Analyze/Serve**

        - *Batch*: **Spark** or **MR** jobs.

        - *Stream*: **Spark Structured Streaming**

        - *SQL*: **Hive**

        - *Search*: **Solr** (text indexing/query)

    6. **Persist**

        - *Write back to storage*: **HDFS/Kudu/HBase**

        - *publish aggregates*

        - *serve*: via BI/ML/search


- Modern stacks typically:

    - favor **Spark** over classic MR,

    - use **Ranger** (Cloudera) more often than Sentry

    - lean on **Parquet/ORC** or **table formats** for manageability

---

### Ontology
(Core Entities & Relations)

!!! sam

    - **HDFS**

        - *stores* ⟶ **Files** (⟶ *broken_into* ⟶ **Blocks** (≈128 MB))

        - *replicated_on* ⟶ **DataNodes** (×3 by default)

        - *managed_by* ⟶ **NameNode** (namespace + block metadata)

    - **YARN**

        - *schedules / allocates resources for* ⟶ **MR**, **Spark**

    - **Spark**

        - *reads/writes* ⟶ **HDFS/Kudu/HBase**; 

        - *managed_by* ⟶ **YARN**; 

        - *provides* ⟶ **SQL, Streaming, MLlib, GraphX**.

    - **Hive/Drill**

        - *execute_SQL_over* ⟶ **HDFS/HBase/Kudu** (varying latency and source support).

    - **Sqoop**

        - *moves_between* ⟶ **RDBMS** ↔ **HDFS** (imports/exports; parallel by key; incremental options).