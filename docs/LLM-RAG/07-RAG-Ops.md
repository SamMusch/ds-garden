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
_kMDItemDisplayNameWithExtensions: 07-RAG-Ops.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-28'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-10-11 15:57:58 +0000
kMDItemContentCreationDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-28 22:13:28 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-11 15:57:58 +0000
kMDItemDocumentIdentifier: '222999'
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
kMDItemInterestingDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-11 16:41:54 +0000
kMDItemLastUsedDate_Ranking: 2025-10-11 00:00:00 +0000
kMDItemUseCount: '152'
kMDItemUsedDates: (
kMDItemUserCreatedDate: (
kMDItemUserCreatedUserHandle: (
modified: '2025-11-28'
published: true
reading_time: 2.2
source_file: 07-RAG-Ops.md
tags: null
title: 07 RAG Ops
word_count: 437
---

## TL;DR

**RAGOps Stack**

- **purpose** ⟶ enable deployment/maintenance/optimization

- **composed of 3 groups of layers**:

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***[[#1. Critical Layers]]*** (foundation of system operation)

- Data                 ⟶ {Ingest, Transform, Store}

- Model                ⟶ {Embeddings Models, Foundation Models, Task-Specific Models}

- Model Deployment     ⟶ {Fully Managed, Self-Hosted, Local/Edge}

- App Orchestration    ⟶ {Multi-Agent Orchestration, Workflow Automation}
  </div>
  <div class="hb-col" markdown="block">
***[[#2. Essential Layers]]*** (quality, safety, performance)

- Prompt

- Evaluation

- Monitoring

- Security & Privacy

- Caching
  </div>
  <div class="hb-col" markdown="block">
***[[#3. Enhancement Layers]]*** (for adaptability & efficiency)

- Human-in-the-Loop

- Cost Optimization

- Explainability

- Collaboration & Experimentation
  </div>
</div>


These 3 layers form a <abbr title="dev approach that emphasizes starting simple, then incrementally adding complexity as a system evolves">progressive architecture</abbr>.

**System flow**: `Data ⟶ Model ⟶ Deployment ⟶ Orchestration ⟶ Evaluation ⟶ Enhancement`

------

### 1. Critical Layers

- **definition**: Foundational components required for a RAG system to operate.

- includes the following **layers**

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Data**

- **function** ⟶ create & manage the KB.

- **composed_of** ⟶ {Ingestion, Transformation, Storage}

- **feeds** ⟶ Model Layer

- [Figure](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F02_Kimothi.png)
  </div>
  <div class="hb-col" markdown="block">
**Model**

- **function** ⟶ transform/generate/evaluate content.

- **composed_of** ⟶ {Embeddings Models, Foundation Models, Task-Specific Models}

- **interacts_with** ⟶ Data Layer & Deployment Layer

- [Figure](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F03_Kimothi.png)
  </div>
  <div class="hb-col" markdown="block">
**Model Deployment**

- **function** ⟶ host & serve models

- **deployment_modes** ⟶ {Fully Managed, Self-Hosted, Local/Edge}

- **enables** ⟶ efficient inference

- [Figure](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F04_Kimothi.png)
  </div>
  <div class="hb-col" markdown="block">
**App Orchestration**

- **function** ⟶ coordinate flow between Data & Model layers.

- **subcomponents** ⟶ {Q Orchestration, R Coordination, G Coordination}

- **extended_by** ⟶ {Multi-Agent Orchestration, Workflow Automation}

- [Figure](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781633435858/files/OEBPS/Images/CH07_F05_Kimothi.png)
  </div>
</div>


### 2. Essential Layers

- **definition**: Support layers ensuring performance, reliability, and safety.

- includes the following **layers**

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Prompt**

- **function** ⟶ guide LLM behavior through effective prompt design.
  </div>
  <div class="hb-col" markdown="block">
**Evaluation**

- **function** ⟶ assess retrieval accuracy and response quality.
  </div>
  <div class="hb-col" markdown="block">
**Monitoring**

- **function** ⟶ track latency, health, and model behavior over time.
  </div>
  <div class="hb-col" markdown="block">
**Security & Privacy**

- **function** ⟶ protect data integrity and user privacy.

- **methods** ⟶ {Anonymization, Encryption, Differential Privacy, Guardrails}
  </div>
  <div class="hb-col" markdown="block">
**Caching**

- **function** ⟶ store frequent queries and responses to reduce latency and cost.
  </div>
</div>


### 3. Enhancement Layers

- **definition**: Optional layers that improve scalability, usability, and oversight.

- includes the following **layers**

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Human-in-the-Loop**

- **adds** ⟶ expert verification and ethical oversight.
  </div>
  <div class="hb-col" markdown="block">
**Cost Optimization**

- **optimizes** ⟶ infrastructure and inference resources.
  </div>
  <div class="hb-col" markdown="block">
**Explainability**

- **provides** ⟶ transparency for regulated or high-stakes domains.
  </div>
  <div class="hb-col" markdown="block">
**Collaboration & Experimentation**

- **enables** ⟶ shared development and iterative improvement.
  </div>
</div>


### **Production Best Practices**
!!! sam
    Techniques to improve *reliability* & *UX*.

    - *Hybrid filtering* (for *latency*): Combine multiple retrieval filters. 

    - *Validation loops* (for *hallucination*): Run post-R or post-G checks before answering.

    - *Autoscaling*: Dynamically adjust compute resources.

    - *Fine-tuning*: Tune on domain-specific examples.

    - *PII Masking*: Replace PII with placeholders before storage.