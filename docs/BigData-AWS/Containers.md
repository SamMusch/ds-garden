---
published: true
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