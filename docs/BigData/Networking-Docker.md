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
_kMDItemDisplayNameWithExtensions: Networking-Docker.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-30 21:11:39 +0000
kMDItemContentCreationDate_Ranking: 2025-12-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:11:39 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-30 21:11:39 +0000
kMDItemDocumentIdentifier: '0'
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
kMDItemInterestingDate_Ranking: 2025-12-30 00:00:00 +0000
modified: '2025-12-30'
published: true
reading_time: 0.7
source_file: Networking-Docker.md
tags: null
title: Networking Docker
word_count: 144
---

Terms

- artifact

- kernel

- software vs apps

- environment

- daemon

- runtime instance


[Cheatsheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)  |  [Image](https://i.imgur.com/xQGvfrT.png)

!!! sam
    **Key Problem**: After building an app on your machine, how can we replicate the software our environment needs onto any machine?

    **Solution**: Docker packages software into *containers* that can run in any environment.

    - Containers virtualize the OS, not the hardware.

    - In other words, all software & apps are run by a single kernel.



**Docker 3 elements**
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Dockerfile***

- **is**: a `.txt` build recipe

- **composed of**: Ordered commands (`FROM`, `RUN`, ..)

- **purpose**: Define *how* an image is built
  </div>
  <div class="hb-col" markdown="block">
***Image***

- **is**: a packaged snapshot of software & dependencies

- **composed of**: read-only layers from Dockerfile

- **purpose**: provides template for running software
  </div>
  <div class="hb-col" markdown="block">
***Container***

- **is**: a runtime process of an image

- **composed of**: image + runtime layer + a started cmd

- **purpose**: execute the app
  </div>
</div>