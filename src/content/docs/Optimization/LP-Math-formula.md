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
_kMDItemDisplayNameWithExtensions: LP Math formula.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-25'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2022-08-10 14:57:32 +0000
kMDItemContentCreationDate_Ranking: 2022-08-10 00:00:00 +0000
kMDItemContentModificationDate: 2024-12-27 23:43:24 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-02-01 17:16:38 +0000
kMDItemDocumentIdentifier: '97059'
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
kMDItemInterestingDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemLastUsedDate: 2024-09-06 22:23:13 +0000
kMDItemLastUsedDate_Ranking: 2024-09-06 00:00:00 +0000
kMDItemUseCount: '4'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2024-12-27'
published: true
reading_time: 0.8
source_file: LP Math formula.md
tags: null
title: LP Math formula
word_count: 154
---

## Math formula

[Book, page 7](https://play.google.com/books/reader?id=nWaFCgAAQBAJ&pg=GBS.PA11&hl=en) |  [ChatGPT](https://chatgpt.com/share/b16e4fc1-7cd7-494e-8d39-111bb12165ef)

**Formula (canonical form):**

$Maximize \:\: z=c^Tx$
$\small\text{where..}$
$\small\text{c = coefs of decision variables (vector)}$
$\small\text{x = decisions variables (vector)}$
$c^Tx \small\text{ = dot product}$


$s.t. \:\: Ax \leq b$
$\small\text{where..}$
$\small\text{A = matrix of coefficients for the constraints}$
$\small\text{x = vector of decision variables}$
$\small\text{b = vector representing the RHS of the constraints}$

---

**Example:**

$\text{Maximize} \:\: z= 3x_1 + 5x_2$

$\text{Subject to:}$
$2x_1 + 3x_2 \leq 12$
$x_1 + 2x_2 \leq 8$
$x_1 \leq 4$

$\text{Non-negativity:}$
$x_1 \geq 0$
$x_2 \geq 0$

Here:
$$C^T = [3 \:\: 5]$$
$$
x = \begin{bmatrix}
    x_{1} \\
    x_{2} \\
\end{bmatrix} 
\\
$$
$$A = \begin{bmatrix}
    2       & 3 \\
    1       & 2 \\
    1       & 0
\end{bmatrix}$$
$$b = \begin{bmatrix}
    12        \\
    8        \\
    4      
\end{bmatrix}$$

---