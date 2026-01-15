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
_kMDItemDisplayNameWithExtensions: XMAS HTTPS + Domain Name.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2026-01-14'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2026-01-10 18:26:29 +0000
kMDItemContentCreationDate_Ranking: 2026-01-10 00:00:00 +0000
kMDItemContentModificationDate: 2026-01-14 15:05:58 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2026-01-10 18:26:29 +0000
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
kMDItemInterestingDate_Ranking: 2026-01-13 00:00:00 +0000
kMDItemLastUsedDate: 2026-01-13 19:10:48 +0000
kMDItemLastUsedDate_Ranking: 2026-01-13 00:00:00 +0000
kMDItemUseCount: '19'
kMDItemUsedDates: (
modified: '2026-01-14'
published: true
reading_time: 1.4
source_file: XMAS HTTPS + Domain Name.md
tags: null
title: XMAS HTTPS + Domain Name
word_count: 288
---

**Purpose:** Make your RAG API **secure and publicly accessible**.

- eg, https://chat.yourcompany.com/chat/stream

TL;DR

1. **Get a domain name** (use Route 53 or buy elsewhere)

2. **Request SSL certificate** in AWS (ACM)

3. **Update ALB** to handle HTTPS on port 443

4. **Point DNS** of your domain to your ALB DNS name

## **1.** Add a domain

Terms

- **Domain**: `example.com`

- **DNS Manager**: directs traffic to the right server

2 options:

- **Route 53**: AWS’s built-in domain + DNS manager

- **Other registrar**: GoDaddy / Namecheap / Google Domains. Point to AWS later.




## 2.  Attach an SSL certificate via ACM

Terms

- **ACM** = AWS Certificate Manager

- **SSL** (Secure Sockets Layer): ensures data is secure in transit

    - Modern replacement is **TLS** (Transport Layer Security)

**ACM** gives you a **free SSL certificate**, so your API works over https://.

## **🔹 3.** **Update ALB listener to use HTTPS (443)**

Right now, your ALB listens on port 80 (*HTTP*).

Steps:

- Add a **new listener** on port 443 (*HTTPS*)

- Attach the SSL certificate from ACM

- Set it to forward traffic to your ECS target group (same as HTTP does now)

## **🔹 4.** **Point DNS to your ALB**

To connect your **domain name** to the ALB:

- Go to your DNS settings (Route 53 or wherever your domain lives)

- Add an **A record** (or CNAME) pointing your subdomain to the **ALB DNS name**

Now when someone visits https://chat.yourcompany.com, they’ll hit your ECS app securely.

---

## 5. Auth

**auth model**: AWS-native auth

- Cognito + ALB auth or app-level auth

- More setup, scalable

- Required later for company rollout

**where this lives**: ALB-level auth

- Auth enforced **before** traffic hits FastAPI.

- Uses **Cognito User Pool** + ALB listener rule.

- Zero app code changes.

- Fastest, cleanest for your current setup.