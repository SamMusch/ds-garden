---
published: true
---

### Already done

#### Local app
!!! sam

    * Python FastAPI app

    * Exposes `/health`

    * Runs locally on port **8080**

    * Works correctly in Docker


#### AWS/FastAPI
!!! sam
    a simple FastAPI service (`/health` endpoint) on ECS Fargate behind an ALB.

    **ALB ⟶ ECS ⟶ container ⟶ /health returns 200**
    [Link](http://alb-smoke-web-950568391.us-east-1.elb.amazonaws.com/health)


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
#### ECS/Fargate | *COMPUTE*

* Cluster: `smoke-cluster`

  * Service: `smoke-web-service-8080`

  * Tasks

* Task definitions

  * `smoke-web-task`
  </div>
  <div class="hb-col" markdown="block">
#### ECR | *REGISTRY*

* Repo: `smoke-web`
  </div>
  <div class="hb-col" markdown="block">
#### EC2 | *NETWORKING*

* LBs: `alb-smoke-web`

  * Listener on `HTTP : 80`

* TGs: `tg-smoke-web-8080-242pm`

  * Type: IP

  * Protocol: HTTP

  * Port: 8080

  * Health check path: `/health` 

* SGs

  * ALB SG

  * ECS/task SG
  </div>
</div>


Notes

- **LBs** are (1) internet-facing and (2) routes traffic to the correct target group

- **TGs** registers ECS task IPs



**Clarifications**:

1. “Task registers automatically” ⟶ **ECS registers task ENI IPs with the target group automatically**.

2. “Container reachable from ALB” ⟶ true because:

    1. ALB SG allows inbound 80

    2. Task SG allows inbound 8080 **from the ALB SG**

    3. App listens on `0.0.0.0:8080`


!!! sam
    Not shown

    - **CloudWatch**

        - Logs

            - Log groups (ECS task logs)

    - **IAM**

        - Users

        - Roles

            - ecsTaskExecutionRole

            - smoke-web-task-role

        - Policies

    - **Systems Manager (SSM)**

        - Session Manager (plugin on your laptop; used by ECS Exec)



# NEXT

### Tiers

**Tier 2 — Still simple, more usable**

- Add **HTTPS (ACM + 443 listener)**

- Add **custom domain (Route 53)**

- Optional **Cognito (auth)**

- Optional **DynamoDB** (state / chat history)

- **Autoscaling** (ECS Service Auto Scaling)

- **IAM hardening**

- **Multiple environments** (dev / prod)  
    ➡️ Still ECS-centric, no architecture shift.


**Tier 3 — “Reference architecture”**

- **API Gateway** (front door instead of ALB)

- **Lambda** (event-driven / serverless logic)

- **Bedrock / OpenSearch / vector stores**

- **CloudFront + WAF**  
    ➡️ Architectural shift, not just scaling.

MCP (implies orchestration, tool routing, and multi-consumer access)


---

### Website

Hosting: *ECS/Fargate*: managed, integrates with ECR + CloudWatch; pay-per-uptime.

Web

- **backend**: *FastAPI*

- **frontend**: *Jinja2 template*

I want a single container with one build step ⟶ **templates** (FastAPI + Jinja2 + a little JS for streaming).


==HERE==

Next logical steps (pick one):

1. Wire /chat/stream to your real llm_code Bedrock streaming call

2. Add DynamoDB table for chat/session state (no auth yet)

3. Add HTTPS + domain (ACM + ALB)


---



Considerations for both my personal use & work use:

- I don't want to spend too much money.

- I don't want to get too complex.

- I want this to be recognized as something that's "mine", not just something I'm "buying".

Considerations for my personal use:

- I want my notes to stay mine and not go to the internet (but with the ability to pull info from the internet).

- I want to be able to connect to my Obsidian notes / vscode scripts (and probably others).

Considerations for my work use:

- I want this to be either better (or at least different) than what my company already uses (openai + sharepoint)

- It'd need to be able to work "within" a website, meaning a chatbot or some way to create summaries based on user input.