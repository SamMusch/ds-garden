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
_kMDItemDisplayNameWithExtensions: XMAS-Guide.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-12 00:06:23 +0000
kMDItemContentCreationDate_Ranking: 2026-01-12 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-14 15:05:58 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-12 00:06:23 +0000
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
kMDItemInterestingDate_Ranking: 2026-01-14 00:00:00 +0000
modified: '2026-01-14'
published: true
reading_time: 3.0
source_file: XMAS-Guide.md
tags: null
title: XMAS Guide
word_count: 599
---

### **What’s left: nothing “unknown”; now write the rebuild guide**

You’ve captured all moving parts:

- **ECR**:

    - image: `571155619056.dkr.ecr.us-east-1.amazonaws.com/smoke-web:bedrock-test`

- **ECS**:

    - **cluster**: smoke-cluster

    - **service**: smoke-web-service-8080

    - **task def**: smoke-web-task:27

    - **container port**: 8080

- **Network**: 

    - **VPC**: vpc-0ae873eb3b96461ae, 

    - **subnets** 

        - subnet-0006311704536cf11

        - subnet-01e4031f448f9fa4a 

    - **ECS SG**: sg-0c723dd942e9aabb3 

        - allowing 8080 from ALB SG sg-0b0fae019aad159b0, 

        - ALB SG allows 80/443 from world

- **ALB**: 

    - alb-smoke-web, 

        - 80⟶443 redirect

        - 443 forwards to TG and uses Cognito auth on /app*, /chat*, /api*

        - /logout* redirects to Cognito logout

- **Target group**: 

    - **HTTP**: 8080

    - **health check**: GET /health => 200

- **ACM**: 

    - **cert**: chat.sammusch-ds.com

    - **DNS validation CNAME record**: already issued

- **Cognito**: 

    - **user pool**: us-east-1_bxIvMfRzy, 

    - **domain**: us-east-1bxivmfrzy, 

    - **app client**: alb-auth (has secret)

- **DynamoDB** (PAY_PER_REQUEST): 

    - **table**: *rag_chat_history* 

    - **keys**: (session_id, ts)

- **IAM**:

    - **smoke-web-task-role**: 

        - Bedrock invoke for Nova Pro + Titan embed; 

        - Dynamo read/write for rag_chat_history

    - **ecsTaskExecutionRole**: managed AmazonECSTaskExecutionRolePolicy

---

## Rebuild guide

### **0) Local prerequisites**

1. **Install**: Docker Desktop, AWS CLI v2

2. **Configure AWS creds**: match 571155619056

```bash
aws configure set region us-east-1
export AWS_PAGER=""
```

### **1) Pull code**

1. Clone repo

2. Verify AWS “bedrock” runtime path is selected by env vars:

    - **LLM_PROVIDER**=bedrock

    - **LLM_MODEL**=amazon.nova-pro-v1:0

    - **EMBEDDING_MODEL**=amazon.titan-embed-text-v2:0

    - **AWS_REGION**=us-east-1

    - **DDB_TABLE**=rag_chat_history


### **2) ECR: build + push image**
```bash
docker compose build

aws ecr get-login-password --region us-east-1 \
| docker login --username AWS --password-stdin 571155619056.dkr.ecr.us-east-1.amazonaws.com

docker tag llm_code-llm_code:latest 571155619056.dkr.ecr.us-east-1.amazonaws.com/smoke-web:bedrock-test
docker push 571155619056.dkr.ecr.us-east-1.amazonaws.com/smoke-web:bedrock-test
```

### **3) DynamoDB: ensure table exists**

- If table already exists: nothing to do.

- If not: recreate with keys (session_id S, ts N) and billing PAY_PER_REQUEST.

(You already have the schema.)

### **4) IAM: ensure roles + policies exist**

- ecsTaskExecutionRole with managed policy AmazonECSTaskExecutionRolePolicy

- smoke-web-task-role with:

    - Bedrock invoke permissions for:

        - amazon.nova-pro-v1:0

        - amazon.titan-embed-text-v2:0

    - DynamoDB perms on rag_chat_history for PutItem/Query/Scan/GetItem

### **5) ECS: register task definition + update service**

1. If you keep the same image tag (bedrock-test) and same task def revision, you can **just force a new deployment** in the existing service.
    
2. If you change env vars/CPU/memory/ports/logging, register a new task definition revision and update the service to it.

Minimum CLI approach (force redeploy only):

```bash
aws ecs update-service --region us-east-1 \
  --cluster smoke-cluster \
  --service smoke-web-service-8080 \
  --force-new-deployment
```

### **6) ALB + Cognito: only needed if recreating infra from scratch**

If you ever rebuild infra from zero, recreate in this order:

1. ACM cert for chat.sammusch-ds.com (DNS validation CNAME in GoDaddy)

2. Cognito user pool + hosted domain + app client

3. ALB + SG (80/443 public) + listeners

4. Target group (health check /health)

5. Listener rules:

    - 80 default: redirect to 443

    - 443 rules:

        - /app* authenticate-cognito ⟶ forward TG

        - /chat* /api* authenticate-cognito ⟶ forward TG

        - /logout* redirect to Cognito logout with logout_uri=https://chat.sammusch-ds.com

        - default: forward TG

6. ECS service points at the target group and allows inbound 8080 from the ALB SG.

### **7) Smoke test**

Your llm-cmds.md uses HTTP; but your ALB forces HTTPS. Use HTTPS now:

```bash
curl -i -N "https://chat.sammusch-ds.com/chat/stream?message=hello"
```

(Or hit the ALB DNS over HTTPS if your cert + host header works; the clean path is the custom domain.)