---
published: true
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