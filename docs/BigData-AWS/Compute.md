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
_kMDItemDisplayNameWithExtensions: Compute.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-22 18:27:06 +0000
kMDItemContentCreationDate_Ranking: 2025-12-22 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-22 18:27:45 +0000
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
reading_time: 0.5
source_file: Compute.md
tags: null
title: Compute
word_count: 96
---

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Amazon

- EC2

- EC2 Auto Scaling

- EC2 Image Builder

- Lightsail

- Linux 2023
  </div>
  <div class="hb-col" markdown="block">
AWS

- App Runner

- Batch

- Elastic Beanstalk

- [[Compute#Fargate]]

- Lambda

- Serverless Application Repository

- Outposts

- Wavelength
  </div>
</div>




### Fargate
!!! sam
    **Process**
    You have a Docker image. You want it running in AWS. You do **not** want to manage servers.  

    1. Docker ⟶ build container image

    2. ECR → stores the image

    3. ECS Task Definition (`Fargate`) ⟶ defines _what_ runs

    4. ECS Execution Mode (`Fargate`) ⟶ defines _how_ it runs

        1. **Service** ⟶ long-running workload, detailed

        2. **Run Task** ⟶ one-off or batch job; starts, runs, exits

    5. CloudWatch → logs + health