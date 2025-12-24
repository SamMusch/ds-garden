---
published: true
---

This document is heavier in detail. Information might be outdated.

[Hadoop Ecosystem](https://i.imgur.com/NktUrwM.png)

!!! sam
    **Why Hadoop?** Its cheap to store big data, but its hard to process with traditional tools

    - **Problem 1**: Storing data *reliably*

    - **Problem 2**: Reading data into memory & *analyzing*

    Hadoop's solution:
    1) *HDFS*: Reliable & distributed data across a cluster
    2) *MapReduce*: Framework for parallel processing


`Hadoop 2.0` supports non MapReduce applications, also supports interactive and streaming applications (that will not use MapReduce)

---

!!! sam
    *Horizontal scaling*: scale by adding more machines

    Hadoop is run on a *collection of servers*, as opposed to running on a "super computer".

    - *Node*: the name of each server. Each node stores & processes data (called *data locality*).



**Benefit of Hadoop**:

- *Fault tolerance*. Hadoop has built in data redundancy (3 copies) in case a node fails.

**Over time**:

- Old way: `Data warehouse` ⟶ stores structured data

- Newer way: `Data Lakes` ⟶ stores structured & unstructured data. Hadoop is a platform for building a data lake.

**Providers** | On-prem vs cloud

- **On-prem**: Cloudera

- **Cloud**: AWS, Azure, Google

### Task 1 - Processing
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
##### Batch Processing Tools

1. *Hadoop MapReduce*

2. *Apache Pig*: offers higher level data processing than Hadoop. Useful for ETL - commands are more "human friendly", similar to SQL language

3. *Apache Hive*: data warehouse application for Hadoop. Similar to SQL but for big data.

4. *Spark*: fast in-memory processing engine
  </div>
  <div class="hb-col" markdown="block">
##### Interactive Query Tools

1. *Apache Impala*: interactive SQL engine, low latency (interactive query tool)

2. *Apache Drill*: high performance SQL engine. Can query semi structured data (eg HDFS, HBase, JSON, MongoDB, Amazon S3)
  </div>
  <div class="hb-col" markdown="block">
##### ML

1. *Apache Mahout*: ML for Hadoop

2. *Apache Spark MLlib*: ML component of Spark

3. *H2O*: in-memory, distributed - can be used with R, Python
  </div>
  <div class="hb-col" markdown="block">
##### Streaming

1. *Apache Storm*

2. *Spark Streaming*

3. *Apache Flink*
  </div>
</div>


#### MapReduce
!!! sam
    MR

    - **is**: a programming model, typically uses Java/Python

    - **architecture**: "shared-nothing", tasks do not dependent on each other

    2 functions

    1. *Map*: take input pair ⟶ produce set of intermediate pairs ⟶ group values based on matching key ⟶ pass KV pair to reduce

    2. *Reduce*: take KV pair ⟶ shuffle & sort ⟶ merges values together

    [Image-Example](https://i.imgur.com/JcxE2Sa.jpeg)

    MR is simple, flexible, and scalable. However, it's quickly losing ground to Spark and other engines.


#### MapReduce Lab
[Lab](https://pages.github.umn.edu/deliu/bigdata19/02-Hadoop/lab02-mapreduce.html) + [Solution](https://pages.github.umn.edu/deliu/bigdata19/02-Hadoop/lab02-mapreduce-solution.html)

```bash
# For each state, how many employees earn > 75k?

# 1: enter the directory
cd ADIR/exercises/data_ingest/bonus_01
ls -l

# 2: clean output destination
rm results.txt
hadoop fs -rm -r /user/cloudera/empcounts


# 3: view mapper, reducer, and runjob shell script
cat mapper.py
cat reducer.py
cat runjob.sh

# 4: verify results
# does this directory already exist?
hadoop fs -ls /user/cloudera/empcounts

# debug
hadoop fs -cat input_data | head -n 100 | python mapper.py | sort | python reducer.py

# run job
./runjob.sh

# download results to a local file
hadoop fs -getmerge /user/cloudera/empcounts results.txt

# view results
less results.txt
```

---

### Task 2 - Storage
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
*HDFS*

- inexpensive & reliable, but high latency.

- hierarchical directory storage
  </div>
  <div class="hb-col" markdown="block">
*Apache HBase*

- noSQL database built on HDFS

- scales well, but no high-level query language, no SQL support, API access only.
  </div>
  <div class="hb-col" markdown="block">
*Apache Kudu*

- designed for SQL/analytics

- columnar storage
  </div>
</div>


#### HDFS
HDFS stores files as large, replicated blocks managed by a central *NameNode*; scalability is limited by block count because metadata is kept in memory and blocks are processed via JVMs.

!!! sam
    HDFS Structure

    1. A file is written to HDFS.

    2. HDFS splits the file into large fixed-size blocks (typically **128 MB**, vs **4 KB** on Windows).

    3. Each block is replicated **three times**.

    4. Replicas are distributed across many **DataNodes**, which store and read/write the actual data.

    ---

    The cluster uses a **master/slave** architecture:

    - **NameNode (master, 1 active + optional standby)**

        - Tracks files, blocks, and their DataNode locations.

        - Stores all metadata in memory (~**150 bytes per block**).

    - **DataNodes (slaves, many)**

        - Hold the block replicas and serve data requests.

    Block processing relies on **Java VMs**; excessive block counts increase JVM and metadata overhead, limiting scalability.


#### HDFS example
```bash
# copy local files to HDFS
hadoop fs -put

# copy HDFS to local files
hadoop fs -get

# List contents of hdfs root directory
hadoop fs -ls /dualcore

# Rm directories
hadoop fs -rm -r /dualcore
hadoop fs -rm -r weblog
hadoop fs -rm -r testlog

# create a `/dualcore` directory
hadoop fs -mkdir /dualcore
```

```bash
# From local --> hdfs

# Take a web server log file from our course materials folder into dualcore
hadoop fs -put ADIR/data/access.log /dualcore

# Deleting a file
hadoop fs -rm /dualcore/access.log
```

```bash
### Take compressed web file ⟶ send to hdfs (skips the local part)

# Make directory in hdfs
hadoop fs -mkdir weblog

# unzip and upload access_log.gz
gunzip -c ~/training_materials/developer/data/access_log.gz | hadoop fs -put - weblog/access_log

# Save first 5000 rows
hadoop fs -mkdir testlog
```

### TASK 3 - Integration

1. *HDFS*: for direct file transfer

2. *Sqoop*: mainly for moving relational data between Hadoop and other databases

3. *Kafka*: for streaming data, messaging systems

4. *Flume*: for streaming data, messaging systems

#### Sqoop

- **is**: a CLI

- **purpose**: transfer data between RDMS & Hadoop

```bash
# Core commands
import
import-all-tables
export
list-tables
```

```bash
# importing partial tables
--column 			# filter cols
--where 			# filter rows
--incremental # requires --check-column & --last-value
```

```bash
# EXAMPLE | import order_details

# see our main directories in the local host
hadoop fs -ls /

# Import tables into dualcore folder
sqoop import \
--connect jdbc:mysql://localhost/dualcore \
--username training --password training \
--fields-terminated-by '\t' \
--warehouse-dir /dualcore \
--table order_details \
--split-by=order_id # if there isnt one single primary key

# Mysql database --> local
# Import table into dualcore
sqoop import \
--connect jdbc:mysql://localhost/dualcore \
--username root --password cloudera \
--fields-terminated-by '\t' \
--warehouse-dir /dualcore \
--table employees

# Local --> hdfs
# From dualcore to hdfs
sqoop import \
--connect jdbc:mysql://localhost/dualcore \
--username root --password cloudera \
--fields-terminated-by '\t' \
--warehouse-dir /dualcore \
--table order_details \
--split-by=order_id
```