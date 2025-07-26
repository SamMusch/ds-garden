---
title: Ontology-Primer
---

In short, ontologies and taxonomies both organize information, but ==ontologies are more expressive and detailed than taxonomies==, capturing relationships between concepts beyond simple hierarchical structures. Taxonomies focus on classification, while ontologies enable richer semantic understanding.

## Workflow

1. **Determine Scope**
2. **Consider Reuse**
3. **Enumerate Terms**
4. **Define Classes**
5. **Define Properties**
6. **Define Constraints**
7. **Create Instances**



## Primer - for details

[protégé](https://protege.stanford.edu/)
[OWL 2 Web Ontology Language Primer (Second Edition)](https://www.w3.org/TR/owl2-primer/#Introduction)

### Intro

**OWL**: 
- *Definition*: logic-based language
- *Purpose*: represent knowledge so computers can reason

### 2 | What is OWL 2?

Quick terms
- **OWL 2**: a declarative, logic‑based language for writing ontologies.
- **Ontology**: a set of precise descriptive statements about some "part" of the world (with "part" being the *domain of interest*.)
- **Terminology**: includes vocabulary (terms & meanings) AND inter-relations (how terms inter-connect)

Key points for OWL 2
1. **Purpose** – Supplies a precise, shared vocabulary for a domain by capturing both _terminological_ (concept definitions) and _assertional_ (facts about specific objects) knowledge.

2. **What OWL 2 is _not_** –  
    • A programming language
    • A schema language (eg xml)
    • A database framework


### 3 | Modeling Knowledge: Basic Notions

OWL 2 represents knowledge with 3 building blocks.
- **Axioms**: basic statements asserted to be true. (In reality, could by wrong.)
- **Entities** are the names that appear in those statements:
    - _Individuals_ (objects)
    - _Classes_ (categories)
    - _Properties_ (relations/attributes).  
- **Expressions** are compound phrases you build from entities.


Results are called _ontologies_.

**Properties** are further subdivided. 
- _Object properties_ relate objects to objects (spouse to spouse)
- _Datatype properties_ assign data values to objects (like an age to a person). 
- _Annotation properties_ are used to encode information about parts of the ontology itself (eg, creation date of axiom)





## Context - Where it Sits

[Metaphysics and epistemology](https://philpapers.org/utils/struct.pl?cId=10)
- [Metaphysics](https://philpapers.org/browse/metaphysics/)
    - [Ontology](https://philpapers.org/browse/ontology)
        - [Objects](https://philpapers.org/browse/objects/)
            - [Mereology](https://philpapers.org/browse/mereology)
        - [Properties](https://philpapers.org/browse/properties/)
    - **Causation**
    - **Teleology**: Explaining phenomena in terms of the **purpose** they serve

[Taxonomy](https://www.wikiwand.com/en/articles/Taxonomy): For classification
- Develop underlying scheme of classes (taxonomy), allocate things to classes (classification)

[Ontology](https://www.wikiwand.com/en/articles/Ontology): For classification & richer semantic meaning
- A comprehensive inventory of reality

