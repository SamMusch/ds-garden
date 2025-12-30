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
_kMDItemDisplayNameWithExtensions: Containers.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-12-23 17:36:26 +0000
kMDItemContentCreationDate_Ranking: 2025-12-23 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-12-23 17:36:41 +0000
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
reading_time: 1.0
source_file: Containers.md
tags: null
title: Containers
word_count: 198
---

**Context for this doc**: Assume you have a Docker container.

[AWS Documentation - Containers](https://aws.amazon.com/containers/)

- [Choosing an AWS container service](https://docs.aws.amazon.com/decision-guides/latest/containers-on-aws-how-to-choose/choosing-aws-container-service.html)

- [Image](https://i.imgur.com/WmyNIZW.png)


!!! sam
    **AWS container services** (not exhaustive)

    - *ECR*: Elastic Container **Registry** (*store*)

    - *ECS*: Elastic Container **Service** (*orchestration*)

        - [[Compute#Fargate]] (*compute*)

    **Flow** (containers):

    1. **ECR** → *Store* C's images

    2. **ECS** → *Orchestrates* which Cs to run & where

        1. **Fargate** → *Compute* engine that executes containers



---

### ECR & ECS

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
ECR

- **is**: a fully managed Docker *container registry*

- **purpose**: where devs store + manage + deploy Docker container images. 

ECR

- integrates with *ECS* to simplify dev ⟶ prod workflow

- hosts images in a highly scalable architecture

- 0 upfront fixed costs, pay for data you store
  </div>
  <div class="hb-col" markdown="block">
ECS

- **is**: a container *orchestration service*

- **purpose**: enables running containerized apps on AWS



API calls lets you

- launch & stop Docker-enabled apps

- query app's complete state

- access <abbr title="IAM roles + security groups + load balancers + CloudWatch Events + CloudFormation templates + CloudTrail logs">other features</abbr>


ECS eliminates need to manage/scale clusters of VMs, and also schedule containers on those VMs.
  </div>
</div>