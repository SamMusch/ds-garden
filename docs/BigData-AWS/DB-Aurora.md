---
published: true
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