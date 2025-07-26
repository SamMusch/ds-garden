---
title: Glossary
created: '2025-07-25'
modified: '2025-07-25'
source_file: Glossary.md
word_count: 1286
reading_time: 6.4
children: 0
grandchildren: 0
ai_abstract: null
ai_key_terms: []
_kMDItemDisplayNameWithExtensions: Glossary.md
kMDItemContentCreationDate: 2025-07-19 17:04:54 +0000
kMDItemContentCreationDate_Ranking: 2025-07-19 00:00:00 +0000
kMDItemContentModificationDate: 2025-07-26 00:22:33 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-07-19 17:04:54 +0000
kMDItemDocumentIdentifier: '169753'
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
kMDItemInterestingDate_Ranking: 2025-07-26 00:00:00 +0000
Due: null
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
CoverImage: null
HoursDone: null
HoursRemain: null
tags: null
TimeSpent: null
TimeSpent2: null
Covers: null
cssclasses: null
aliases: null
---



“Greatest-hits” schema patterns

| Category                          | Most-used pattern                         | Why it dominates (one-liner)                                                                          |
| --------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Operational / OLTP**            | **3rd-normal-form relational**            | Decades-old default for transactional apps—avoids data duplication and keeps writes cheap.            |
| **Analytical / OLAP**             | **Star schema**                           | Simple joins + predictable grain make it the go-to for BI tools and aggregated reporting.             |
| **NoSQL**                         | **Document (JSON) model**                 | Fits modern micro-services and mobile apps: schema-on-read, easy to evolve, one doc ≈ one object.     |
| **Lakehouse / Modern data stack** | **Medallion (Bronze-Silver-Gold) layers** | Clear “raw → cleaned → curated” zones standardised by Databricks/Iceberg; meshes well with ELT & dbt. |



Ask for clusters instead of items.
"Provide me with a mental framework for learning and organizing *xyz*."



---


You have:
- **High-level**: Summaries, purposes
- **Low-level**: Building blocks, atoms, pieces
- Need to *map* low-level --> high-level


**The SPI Lens**: a metric‑lineage framework
1. **Structure**: _What is it composed of?_
2. **Product**: _What does it do?_
3. **Impact**: _Why does it do it?_
    - Map the output to the business question it answers or the decision it informs.
    - Flag downstream uses—bidding automation, budget re‑allocation, exec dashboard.



### Python

| Term                  | What it is                                                                                                         | Typical “shape” in code         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| **Class**             | A _template_ that groups data and behavior                                                                         | `class Car: ...`                |
| **Object / Instance** | A _real-life_ manifestation of a class                                                                             | `my_car = Car("blue")`          |
| **Attribute**         | A _name → value_ pair stored on a class or object                                                                  | `my_car.color`, `Car.wheels`    |
| **Property**          | An attribute whose value is computed by getter / setter logic                                                      | `my_car.is_red`                 |
| **Method**            | A **function** defined _inside_ a class                                                                            | `my_car.drive()`                |


## Philosophy

- Axioms
- Syllogisms
- **Pedagogical**: related to teaching
- **Aphorisms**: pithy observation that contains a general truth, such as, “if it ain't broke, don't fix it.”


#### Explaining Nature & Change

Aristotle's four ~~causes~~ (explanations) explain why something either *exists* or *changes* in nature.
1. **Matter**: The physical "stuff" its made from (capital, people, technology). 
2. **Form**: The organizing "structure" or patterns (org chart, workflows).
3. **Efficient**: The "agent" or process that brings it into existence (management, employees).
4. **Final**: The end "goal" it serves (profit, mission statement) - ***TELEOLOGY***

| 4 Explanations | Phil Concept        | Layman               |
| -------------- | ------------------- | -------------------- |
| Matter         | Structure           | Physical composition |
| Form           | Modality            | Patterns             |
| Efficient      | Causation/Function  | Catalyst             |
| Final          | Purpose/Normativity | TELEOLOGY            |
**Teleology**: the explanation of phenomena in terms of the *purpose* they serve rather than of the cause by which they arise.
[]()

##### Metaphysics

[Source](https://philpapers.org/browse/metaphysics/)

**Metaphysics**
- Causation
- Global Metaphysical Theories
- Interlevel Metaphysics
- Metaontology
- Modality
- Objects
- Ontology
- Persons
- Properties
- Realism and Anti-Realism
- Time


### TL;DR

All four clusters are **descriptive metaphysics**—they aim to map what exists and how it fits together, not to give moral prescriptions. “Persons” appears because many philosophers treat personhood as a distinctive kind of entity; “Realism & Anti‑Realism” here targets truth‑conditions for metaphysical claims, not ethics.

Four clusters: 
- **Meta‑level questions** (Metaontology, Realism & Anti‑Realism)
- **Big‑picture commitments** (Ontology, Global Metaphysical Theories)
- **Fundamental kinds** (Objects, Properties, Persons)
- **Relations & dimensions** (Causation, Modality, Time, Interlevel Metaphysics)

---

Meta‑Level Questions (rules of the inquiry)
- **Metaontology**: Investigates what it means to ask “what exists?” and how such questions can be answered.
- **Realism & Anti‑Realism**: Debates whether metaphysical statements aim at mind‑independent truth or depend on our conceptual schemes.

Big‑Picture Commitments (overall blueprints)
- **Ontology**: Systematic inventory of the basic categories of being and their hierarchical relations.
- **Global Metaphysical Theories**: Competing overarching pictures of reality (e.g., monism, pluralism, substance–attribute, process).

Fundamental Kinds (building blocks)
- **Objects**: Concrete particulars that persist and participate in causal interactions.
- **Properties**: Qualities or universals that objects exemplify or share.
- **Persons**: Self‑aware beings with psychological continuity and moral status.

Relations & Dimensions of Reality
- **Causation**: Relation explaining how events bring about or influence other events.
- **Modality**: Realm of possibility, necessity, and counterfactual dependence.
- **Time**: Ordering of events and the ontology of past, present, and future.
- **Interlevel Metaphysics**: How higher‑level phenomena relate to their lower‑level bases (e.g., mind–brain, social–individual).


### TL;DR

Treat the metaphysics clusters as a checklist: (1) nail down **what is even in play**, (2) pick an overall modeling picture, (3) catalogue the concrete elements you can measure, and (4) use causation + modality + time to estimate the campaign’s true lift.

---


***Meta‑Level Questions*** → Frame the inquiry
- **Metaontology**: Determine the in-scope "universe". (e.g., customers, sessions, impressions, revenue)
- **Realism & Anti‑Realism**: Do my metrics track a _real_ business outcome? If only proxies, conclude with caution.

 ***Big‑Picture Commitments*** → Pick a modeling stance
- **Ontology**: Draw the ERD and corresponding hierarchy (customer > session > impression).
- **Global Metaphysical Theories**: Choose your modeling worldview:
    - **Process‑centric**: Treat the campaign as a flow of interactions (eg Markov chains / MMM).
    - **Substance‑attribute**: Treat each customer as a substance with changing attributes (good for panel regressions).  

***Fundamental Kinds*** → Identify the data "atoms"
- **Objects**: The "events" that occur (ad impressions, site visits, orders).
- **Properties**: Impression cost, creative type, user segment, device.
- **Persons**: The customers themselves.

***Relations & Dimensions*** → Answer the “did it work?” question
- **Causation**: Specify the causal graph, pick a method (A/B test, diff‑in‑diff, propensity score, causal forests) to isolate the campaign’s effect.
- **Modality**: Construct the counterfactual—what would sales have been _without_ the campaign? This underlies uplift or incremental ROAS calculations.
- **Time**: Control for time trends, seasonality, lagged effects; decide pre‑ and post‑period windows.
- **Interlevel Metaphysics**: Map how micro‑level actions (impression → click) roll up to macro KPIs (weekly revenue). This guards against Simpson’s Paradox when aggregating.




## Probability and Statistics

Etymology

Categories / classes / (structures?)

Entities

"Objects and properties"

"Frameworks and models"

Toolkits

"Methodological categories"




Python | objects, methods, functions:
- **Functions**: independent code blocks not tied to any specific object.
- 

methods are functions that belong to a class and operate on its instances, while functions are independent code blocks that are not tied to any specific object.
- Methods are functions that are associated with a particular object or class.


Ontology vs Process
- **Ontology** | STATIC: Focus is on being, existence, categorization.
- **Process** | DYNAMIC: Change, dynamic interaction


| Feature         | Ontology                              | Process Philosophy                                   |
| --------------- | ------------------------------------- | ---------------------------------------------------- |
| Core Focus      | Being, existence, categorization      | Change, becoming, dynamic interaction                |
| View of Reality | Static, composed of discrete entities | Dynamic, constantly in flux                          |
| Key Questions   | What is? What exists?                 | How does it become? How do things change?            |
| Concepts        | Object, property, event, substance    | Flux, becoming, creativity, relation                 |
| Example         | Classifying a chair as an object      | Describing the process of a seed growing into a tree |


---

### CCS

**Statistical Modeling Workflow** | [ChatGPT](https://chatgpt.com/share/687bd24c-7a04-8000-9863-6608838a5898)

| Workflow Step       |                                          | What It Does                                                              | ACM CCS                                                       | Examples from Your List                             |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| **Representation**  | What is the model?                       | Describes the **structure of the model** and how uncertainty is encoded   | Probabilistic representations                                 | Bayesian networks, Factor graphs, Decision diagrams |
| **Inference**       | How to estimate it?                      | Methods for **estimating parameters** or computing posteriors             | Probabilistic inference problems                              | MLE, Bayesian computation, Hypothesis testing       |
| **Computation**     | How do we actually do it?                | **Algorithms** that make inference tractable or efficient                 | Probabilistic reasoning algorithms, Probabilistic algorithms  | EM, MCMC, Variational methods                       |
| **Extension**       | How does it behave over time?            | Handles **temporal structure**, uncertainty over time, dynamic processes  | Stochastic processes, Sequential methods                      | Markov processes, Kalman filters                    |
| **Framework**       | What philosophical stance are we taking? | The **statistical paradigm** or modeling philosophy being used            | Statistical paradigms, Nonparametric statistics               | Bayesian, Frequentist, Nonparametric                |
| **Functional Form** | What math mappings are being used?       | The **mathematical shape** of the relationship between inputs and outputs | Regression analysis, Cluster analysis, Survival analysis, EDA | GLMs, Time series, Clustering, Dimension reduction  |


**Functions** in the statistical modeling workflow

|Category|Includes|Description|
|---|---|---|
|**Model Structure**|Representations|How the world is modeled (e.g., graphs, equations, distributions)|
|**Inference Tasks**|Inference, Reasoning Algorithms|Drawing conclusions given models and data|
|**Computation**|Algorithms, Reasoning Algorithms|Actual procedures to carry out inference or learning|
|**Temporal Modeling**|Processes|Modeling uncertainty and change over time|
|**Statistical Frameworks**|Statistics, Paradigms|Overall approach (frequentist, Bayesian, nonparametric)|
|**Function Mapping**|Functions|How inputs (features) map to outputs (predictions, decisions)|
