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
kMDItemContentCreationDate: 2026-03-14 20:34:25 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:24 +0000
kMDItemDateAdded: 2026-03-14 20:34:25 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 0.5
source_file: Compute.md
tags: null
word_count: 100
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


![[AWS-Compute-Services.png]]
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