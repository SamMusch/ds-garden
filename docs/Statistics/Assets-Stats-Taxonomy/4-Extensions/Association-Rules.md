---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:24:14 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2025-05-19 18:46:54 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 1.1
source_file: Association-Rules.md
tags: null
word_count: 218
---

### Association Rules

If you bought x, you prob also bought y
(Not necessarily the other way around)

`Total set` - all products in store
`Subset` - a transaction
`Co-occurences` (or `frequent itemset`) - looking across these subsets, what tend to be purchased together?
&nbsp; `Frequent sequential pattern` - first buy a laptop, then a cover, then a mouse  

**Applications**
Product placement (pop to pop)
Product bundling (pop to indy)
User profiling (indy to indy)

**Notes**
Association rules are not causal
Anticipate ripple effects

---

**Rule:** left -> right
**Evaluate**
&nbsp; **Suport:** how often do they appear together? (this **does not** change if we swap left and right)
&nbsp; **Confidence:** given left, how often do we see right? (this **does** change if we swap left and right)
&nbsp; **Lift:** how does the **confidence** compare to random chance?
&nbsp;&nbsp; Lift = 1 means random

**Apriori method** (Parameters we set when finding rules)
Phase 1 - Min support (need to have enough in common)
Phase 2 - Min confidence (one leading to the other)

---

In this example, the combo of `c + d + e` was frequent. By definition, all **subsets** (less detail) above must all be frequent with each other.
[Image](https://i.imgur.com/u5I0RsF.png)


---

The combo `a + b` was infrequent. All resulting **supersets** (greater detail) must also be infrequent
[Image](https://i.imgur.com/uLs4Juv.png)