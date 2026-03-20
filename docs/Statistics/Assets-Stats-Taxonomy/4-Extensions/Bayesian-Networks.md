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
_kMDItemDisplayNameWithExtensions: Bayesian-Networks.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:42:56 +0000
kMDItemContentCreationDate_Ranking: 2025-01-20 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 22:10:04 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:54 +0000
kMDItemDocumentIdentifier: '627698'
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
kMDItemInterestingDate_Ranking: 2026-03-20 00:00:00 +0000
kMDItemLastUsedDate: 2026-03-20 22:09:45 +0000
kMDItemLastUsedDate_Ranking: 2026-03-20 00:00:00 +0000
kMDItemUseCount: '8'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2026-03-20'
published: true
reading_time: 1.6
source_file: Bayesian-Networks.md
tags: null
title: Bayesian Networks
word_count: 314
---

#### Pre-Notes

- **Acyclic graph**: a graph without any cycles (or loops).

- **BNs**: Bayesian Networks

- **CDs**: conditional dependencies

- **Probability distributions**: everything depends on everything else

    - **Naive Bayes**: everything is conditionally independent

        - The network is compact representation of joint probability distributions.

### Overview
!!! sam
    **BNs**: a general-purpose graphical framework for representing CDs and reasoning under uncertainty.

    **Sequence**: 

    1. Learn parent facts

    2. After accounting for these ^, learn how variables are dependent of independent on each other.



### Anatomy - Analogy

| Term                             | Intuition                            | Example                                           |
| -------------------------------- | ------------------------------------ | ------------------------------------------------- |
| **Node**                         | A measurable fact, an RV.            | `IceCreamSales`                                   |
| **Edge (arrow)**                 | Direct influence.                    | `Season → SharkAttacks`                           |
| **Parents**                      | Immediate influencers of a node.     | `Parents(IceCreamSales) = {Season}`               |
| **Root**                         | Node with no parents.                | `Season`                                          |
| **Leaf**                         | Node with no children.               | `SharkAttacks`                                    |
| **Directed Acyclic Graph (DAG)** | No feedback loops (1-direction only) | `Season → IceCreamSales`, `Season → SharkAttacks` |

### Why Bayesian Networks?

- **Compact:** Instead of listing probabilities for every possible combination of variables, a BN stores only the pieces that really matter.  

- **Intuitive & transparent:** Arrows show “this **causes** that”, easy for stakeholders

- **Efficient inference:** Once built, algorithms can answer “what‑if?” questions faster than brute‑force enumeration.

| Strength | Weakness / Pitfall |
|-------------|----------------------|
| Encodes *why* not just *what*. | Building a reliable structure can be hard without expert input. |
| Handles missing data gracefully. | Parameter explosion if many parents per node. |
| Supports causal reasoning (with caveats). | Assumes the graph is acyclic—loops need Dynamic BNs. |

### Conditional Independence & *d*-Separation
A BN encodes one master rule:
> **Given its parents, a node is conditionally independent of its non‑descendants.**

That rule plus the graph’s geometry lets us test independence with **d‑separation**:

1. **Chain** (A → B → C): Knowing B “blocks” A from C.  

2. **Fork** (A ← B → C): Knowing B blocks A from C.  

3. **Collider** (A → B ← C): *Not* knowing B keeps A and C independent, but *observing* B **unblocks** the path—“explaining away.”

[Imgur | How to compute joint probabilities using a Bayes Net](https://i.imgur.com/oUKb0dk.png)