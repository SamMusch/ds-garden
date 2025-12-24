---
published: true
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