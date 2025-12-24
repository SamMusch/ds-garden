---
published: true
---

- **is**: Managed NoSQL (key-value & document) *database*

- **designed for**: internet-scale workloads

- removes the need to manage servers, storage, or replication


### Architecture and features

- **does**: auto-partitions data across multiple servers

- **purpose**: deliver low-latency performance.

offers

- **on-demand** and **provisioned** capacity modes

- **ACID transactions**

- **Time-to-Live** expiration for automatic item deletion


- **DynamoDB Accelerator (DAX)** adds in-memory caching

- **DynamoDB Streams** capture real-time item changes for event-driven workflows.


### Integrations and ecosystem

Services

- AWS Lambda for serverless triggers

- Kinesis for streaming analytics 

- Redshift & OpenSearch Service for analytics

- S3 for data export and import

Dev interactions

- AWS Management Console

- CLI

- SDK



# Details
### 1) Define the mental model

**Amazon DynamoDB** is a **managed NoSQL key–value / wide-column store**.

Sequence:

1. AWS runs the database.

2. You define tables.

3. You read/write via API calls.

You do **not** manage servers, disks, or indexes manually.

---
### 2) Learn the data model

Order matters here.

1. **Table**

2. **Primary key**

    - Partition key (required)

    - Sort key (optional)

3. **Item** (row equivalent)

4. **Attributes** (column equivalents)

Key rule:
> Every query must start with a **known partition key**.

---

### 3) Learn access patterns _before_ schema design

With DynamoDB, you do this **backwards** compared to SQL.

Sequence:

1. List questions your app must answer.

2. Translate each question into a key-based lookup.

3. Design keys to support those lookups.

4. Add secondary indexes _only if required_.

If you design tables first, you will redesign them later.


---

### 4) Understand indexes

- **LSI**: same partition key, different sort key (rare).

- **GSI**: different partition key and sort key (common).

GSIs cost money and complexity. Use them deliberately.

---

### 5) Read consistency, performance, cost

After fundamentals:

1. **Eventually vs strongly consistent reads**

2. **RCU / WCU** (or on-demand mode)

3. Hot partitions and uneven key distribution

These explain 90% of DynamoDB “mystery” problems.

---

### 6) Best starting resources (in order)

1. AWS Docs: _“What is DynamoDB?”_

2. AWS Docs: _Primary keys and data modeling_

3. One hands-on tutorial using the AWS Console or SDK

---

### 7) When DynamoDB is the wrong tool

Do **not** use it if you need:

- Ad-hoc querying

- Joins

- Analytics

- Frequent schema evolution without planning

In those cases, Aurora or Postgres wins.