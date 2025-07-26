---
title: QuantEcon Example
created: '2025-07-25'
modified: '2024-12-27'
source_file: QuantEcon Example.md
word_count: 166
reading_time: 0.8
children: 0
grandchildren: 0
ai_abstract: null
ai_key_terms: []
_kMDItemDisplayNameWithExtensions: QuantEcon Example.md
kMDItemAlternateNames: (
kMDItemContentCreationDate: 2024-09-06 22:20:09 +0000
kMDItemContentCreationDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemContentModificationDate: 2024-12-27 23:43:24 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97057'
kMDItemFSCreatorCode: ''
kMDItemFSFinderFlags: '16'
kMDItemFSHasCustomIcon: (null)
kMDItemFSInvisible: '0'
kMDItemFSIsExtensionHidden: '1'
kMDItemFSIsStationery: (null)
kMDItemFSLabel: '0'
kMDItemFSNodeCount: (null)
kMDItemFSOwnerGroupID: '20'
kMDItemFSOwnerUserID: '502'
kMDItemFSTypeCode: ''
kMDItemInterestingDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemLastUsedDate: 2024-09-06 22:20:09 +0000
kMDItemLastUsedDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemUseCount: '4'
kMDItemUsedDates: (
kMDItemUserCreatedDate: (
kMDItemUserCreatedUserHandle: (
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

## QuantEcon Example

[QuantEcon](https://python.quantecon.org/lp_intro.html), [Google Colab](https://colab.research.google.com/drive/10Hjet_MImjqmyLn3C08aw6mNoG2tsb72#scrollTo=89bd93d8)

![](https://i.imgur.com/Ba5hB8A.png)



```python
# Max function
c = np.array([3, 4])        # Revenue: P1, P2

# Inequality constraints
A = np.array(
    [[2, 5],                # Material
     [4, 2]])								# Labor

# Available quantities
b = np.array([30,20])


# we put a negative sign on the objective as linprog does minimization
res_ex1 = linprog(-c,         # Objective function
                  A_ub = A,   # Inequality constraints
                  b_ub = b,   # Available quantities
                  method = 'revised simplex')
res_ex1

# Results:
  # fun: -27.5
  # x: array([2.5, 5])

# The optimal plan tells the factory to produce 2.5 units of Product 1 and 5 units of Product 2; that generates a maximizing value of revenue of 27.5.
```

```python
# Dual Problem:
res_ex1_dual = linprog(
  b, 
  A_ub=-A.T, 
  b_ub=-c, 
  method='revised simplex')

res_ex1_dual

# Results:
  # fun: 27.5
  # x: array([.625, .4375])

# Shadow prices for materials and labor are 0.625 and 0.4375, respectively.
```

![](https://python.quantecon.org/_images/lp_intro_3_0.png)



