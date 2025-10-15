---
published: true
---

### Overview

!!! sam
    Hadoop 

    - **definition**: *a distributed data platform* (`HDFS` + `YARN`) that hosts engines (eg `Spark`/`Hive`)

    - **components**:

        - `HDFS` (storage)

        - `YARN` (cluster resource manager)

        - Common services like cataloging / security / coordination.

    - **capabilities**:

        - *reliable* data storage

        - *parallel* data analysis

    - **mechanisms**: 

        - *horizontal scaling*: adds more servers (ie *nodes*)

        - *fault tolerance*: built in data redundancy (3 copies) in case a node fails

        - *resource isolation:* `YARN` containers (CPU/RAM) allocated to engines


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