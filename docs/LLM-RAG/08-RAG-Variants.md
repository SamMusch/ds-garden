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
_kMDItemDisplayNameWithExtensions: 08-RAG-Variants.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-11-28'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-08-08 21:04:53 +0000
kMDItemContentCreationDate_Ranking: 2025-10-26 00:00:00 +0000
kMDItemContentModificationDate: 2025-11-28 22:47:58 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-10-26 17:13:42 +0000
kMDItemDocumentIdentifier: '624860'
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
kMDItemInterestingDate_Ranking: 2025-10-26 00:00:00 +0000
kMDItemLastUsedDate: 2025-10-26 17:16:09 +0000
kMDItemLastUsedDate_Ranking: 2025-10-26 00:00:00 +0000
kMDItemUseCount: '279'
kMDItemUsedDates: (
modified: '2025-11-28'
published: true
reading_time: 3.3
source_file: 08-RAG-Variants.md
tags: null
title: 08 RAG Variants
word_count: 656
---

## Overview

!!! sam
    RAG variants:

    - **are**: *specializations* of basic RAG that solve limits of naïve, text-only retrieval.

    - **purpose**: make the system both flexible and domain aware.

        - Handle **non-text data** (images, audio, video, tables).

        - Preserve **relationships** across documents (multi-hop reasoning).

        - Add **autonomy** through LLM agents (routing, tool use, planning).

        - Improve **accuracy**, **speed**, or **reasoning** in specific contexts.



3 most popular RAG variants
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
[[#1. Multimodal RAG]]

- Performs R + G across multiple data types.
  </div>
  <div class="hb-col" markdown="block">
[[#2. Knowledge-Graph RAG]]

- Adds *relational reasoning* & *multi-hop context*.
  </div>
  <div class="hb-col" markdown="block">
[[#3. Agentic RAG]]

- Adds LLM agents for *routing*, *tool use*, and *adaptive retrieval*.
  </div>
</div>



## 1. Multimodal RAG
!!! sam
    ***Multimodal RAG***

    **does**: enables retrieve + generate from multiple data types.


    **downsides/challenges**:

    - Slower (latency)

    - More expensive (embedding + multimodal LLMs)

    - Possible information loss if you convert images ⟶ text

    - Alignment errors between embeddings spaces


#### Mechanics: Pipeline Changes
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
###### **Indexing Pipeline**

1. **Loading**: Use image/etc loaders. (PIL, Unstructured, Whisper, CSVLoader).

2. **Chunking**:

    - Text ⟶ normal chunking

    - Audio ⟶ VAD (split on silence)

    - Video ⟶ scene detection

    - Tables ⟶ row/column chunks

3. **Embeddings** (3 strategies)

    1. **Shared multimodal embeddings** ⟶ one vector space for all modalities.

    2. **Modality-specific embeddings** ⟶ CLIP (image-text), CLAP (audio-text).

    3. **Convert everything to text** ⟶ multimodal LLM describes files ⟶ embed as text.

4. **Storage**

    - **Embeddings**: no change

    - **Raw files**: Need document store (Redis, etc.).
  </div>
  <div class="hb-col" markdown="block">
###### **Generation Pipeline**

- **Retrieval** depends on embedding strategy:

    - Shared ⟶ one similarity search.

    - Modality-specific ⟶ multi-vector retrieval across spaces.

    - Converted-to-text ⟶ normal text retrieval + raw files for generation.

- **Augmentation** includes raw images/audio/video as LLM inputs.

- **Generation** uses a **multimodal LLM**
  </div>
</div>


## 2. Knowledge-Graph RAG
!!! sam
    ***Graph RAG*** 

    **purpose**: vector search can't answer questions requiring *relationships* across chunks.

    **does**: adds *relational reasoning* and *context stitching* that vectors alone can’t provide.

    **solves**:

    - *Multi-hop questions*: “Which products are endorsed by the same celebrity?”

    - *Theme synthesis*: “What are the main themes across all these reports?”

    - *Entity-level reasoning*: “Link symptoms ⟶ drugs ⟶ dosage interactions.”

    **challenges**:

    - Hard to build/maintain a clean ontology

    - Expensive to generate/maintain (LLM passes)

    - Requires domain constraints (entity types)


#### Mechanics: 3 Approaches
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Structure-Aware Retrieval (Simple)**

- Build a **hierarchy** (parent summaries ⟶ child chunks).

- Retrieve at the leaf level ⟶ add parents automatically.

- Implementable w or w/o a graph DB.
  </div>
  <div class="hb-col" markdown="block">
**Graph-Enhanced Vector Search (Hybrid)**

1. Do a normal vector search.
    
2. Look at the **entities** inside retrieved chunks.
    
3. Traverse the **graph** to get related entities/chunks.
    
4. Add those to the retrieved set.

This adds multi-hop relevance without replacing vectors.
  </div>
  <div class="hb-col" markdown="block">
**Community Summaries (Theme-Level Answers)**

1. Use graph algorithms (Louvain/Leiden) to find densely connected areas.
    
2. LLM summarizes each community.
    
3. Retrieval can fetch summaries directly.

This solves broad queries without enumerating chunks.
  </div>
</div>


#### Mechanics: Pipeline Changes
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Indexing**

- Load + chunk (same as RAG).

- Extract entities + relationships using an LLM.

- Store in a **graph DB** (Neo4j).

- Detect **communities**, gen **summaries**.

- Could store summaries as vectors for hybrid retrieval.
  </div>
  <div class="hb-col" markdown="block">
**Generation**

- Convert natural query ⟶ graph query (Cypher).

- Traverse graph to find nodes/relationships.

- Augment prompt with retrieved graph data.

- Generate normally.
  </div>
</div>


## 3. Agentic RAG
!!! sam
    ***Agentic RAG***

    **purpose**:

    1. makes sure each Q searches the right database(s)

    2. enables multi-step reasoning

    **does**: adds an LLM “brain” that makes decisions at every RAG stage.

    **adds**:

    - *Query routing* ⟶ “This is a code question; search the docs DB only.”

    - *Tool use* ⟶ search web, call SQL, call APIs.

    - *Adaptive retrieval* ⟶ agent decides: retrieve more? refine query? switch DB?

    - *Iterative generation* (`ReAct` / `IterRetGen`) ⟶ revise ⟶ retrieve ⟶ revise again.

    **challenges**

    - Hard to control (agents can misfire)

    - Needs strict safety checks

    - Multi-agent systems multiply errors

    - More compute

    - Workflow complexity increases


#### Mechanics: Pipeline Changes
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Indexing** | agents can:

- **loading**: improve parsing, gen metadata

- **chunking**: task-specific chunking via sentiment/entity grouping

- **embedding**: dynamically choose embedding models 

- **store**: route doc chunks ⟶ different collections
  </div>
  <div class="hb-col" markdown="block">
**Generation** | agents can:

1. **retrieval**: determine *which* KB, tool reqs, query refinement reqs

2. **augmentation**: dynamically builds prompts

3. **generation**: use iterative patterns:
    *Generate ⟶ critique ⟶ retrieve ⟶ regenerate*
  </div>
</div>