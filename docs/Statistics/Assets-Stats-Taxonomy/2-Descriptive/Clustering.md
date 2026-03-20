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
_kMDItemDisplayNameWithExtensions: Clustering.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-03-20'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-01-20 18:39:27 +0000
kMDItemContentCreationDate_Ranking: 2025-01-20 00:00:00 +0000
kMDItemContentModificationDate: 2026-03-20 22:11:19 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-19 18:46:56 +0000
kMDItemDocumentIdentifier: '627725'
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
kMDItemLastUsedDate: 2026-03-20 22:11:11 +0000
kMDItemLastUsedDate_Ranking: 2026-03-20 00:00:00 +0000
kMDItemUseCount: '5'
kMDItemUsedDates: (
kMDItemUserModifiedDate: (
kMDItemUserModifiedUserHandle: (
modified: '2026-03-20'
published: true
reading_time: 2.5
source_file: Clustering.md
tags: null
title: Clustering
word_count: 500
---

### Overview

[Image: Same as table below.](https://i.imgur.com/FOolcRz.png)

| **Method**        | **Characteristics**                      | **Advantages**                                                                                     | **Limitations**                                                                             | **Use Cases**                                         |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Partitioning**  | Distance-based clustering; MECE spheres. | - Simple to understand and implement.<br>- Effective for small to medium datasets.                 | - Assumes spherical clusters.<br>- Sensitive to initial conditions and outliers.            | Clustering small to medium-sized datasets. (<1M rows) |
| **Hierarchical**  | Multi-level cluster structure.           | - Builds a hierarchy for better visualization.<br>- No need to pre-specify the number of clusters. | - Cannot correct wrong merges or splits.<br>- Computationally expensive for large datasets. | Visualizing nested clusters in small datasets.        |
| **Density-based** | Identifies dense regions of points.      | - Handles arbitrary cluster shapes.<br>- Can filter out noise and outliers.                        | - Struggles with varying densities.<br>- Sensitive to parameter tuning.                     | Clustering with noise or irregular cluster shapes.    |
| **Grid-based**    | Grid-based data partitioning.            | - Fast processing regardless of dataset size.<br>- Scalable for large datasets.                    | - Resolution depends on grid size.<br>- Struggles with very high-dimensional data.          | Fast clustering of large-scale datasets.              |


#### Partitioning

K-means

- High influence of outliers

  - Could use k-medioids instead

- Only works for continuous

  - K-modes (Hamming Distance)

  - K-prototype: kmeans + kmode (Gower Distance)

- No hierarchy provided

  - Use hierarchy cluster and then partition cluster

- Bias towards circles

  - Use dbscan instead



#### Hierarchical

1. Agglomerative - opposite of divisive

 1. AGNES (AGglomerative NESting)

2. Divisive - start with 1 cluster, split apart

 1. DIANA (DIvisive ANAlysis)

<img src="https://i.imgur.com/3i4Ma0H.png" style="zoom:67%;" />



#### Density

**Motivation**: What if not circular?   

- General idea of DB = continue growing cluster as long as we are meeting some threshold (min data points)

**DBscan**: continue growing cluster as long as we are meeting some threshold (min data points)

1. **Epsilon**: for each data point, radius of region if its the mean point

2. **Density of neighborhood**: number of data points in the region  

3. **MinPts**: threshold to be considered dense

4. **Core point**: if the data point's region has MinPts

5. **Direct density reachable**: if a point is within the core point's region

6. **Density reachable**: direct density reachable from a point thats direct density reachable to the core point

7. **Density connected**: direct density reachable from a point thats direct density reachable to the neighborhood of a core point

8. **Density based cluster**: group of density connected points

**Mixture model**: start with data, identify true underlying distribution

---

#### Measuring Performance

1. **Silhouette** = max homo within, max hetero between

 1. Are individual points correctly assigned to their clusters?

 2. Coef between -1 and 1

 3. $$\text{Silhouette coef} = \frac{b - a}{Max \: b - max \: a}$$

  a = Avg distance from all points in *its own* cluster

  b = Avg distance from all points in *nearest* cluster

<img src="https://i.imgur.com/54dXKiC.png" style="zoom:80%;" />





2. **Gap statistic**: does the additional cluster add anything meaningful? Visualized with the **elbow plot**.

- x = Number of clusters

- y = **WSS** (Within-Cluster-Sum of Squared Errors)

  $$\sum (\text{each point} - \text{cluster mean})^2$$

<img src="https://i.imgur.com/ox5mMFw.png" style="zoom:80%;" />