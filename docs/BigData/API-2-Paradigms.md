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
_kMDItemDisplayNameWithExtensions: API-2-Paradigms.md
ai_abstract: null
ai_key_terms: []
aliases: null
author:

- '[[Brenda Jin]]'

- '[[Saurabh Sahni]]'

- '[[Amir Shevat]]'
children: 0
created: '2025-12-30'
cssclasses: null
description: Chapter 2. API Paradigms Picking the right API paradigm is important.
  An API paradigm defines the interface exposing backend data of a service to other
  applications. When starting out with APIs,...
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
reading_time: 0.8
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch02.html
source_file: API-2-Paradigms.md
tags: null
title: API 2 Paradigms
word_count: 161
---

APIs are about *how* clients talk to servers.

An API “*paradigm*”: a pattern for how requests & responses are shaped.

Key idea: **APIs are contracts for conversation between systems.**
Everything else (frameworks, tools, cloud services) exists to support that idea.

### REST model
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**How REST works:**

1. Client sends a request

2. Server processes it

3. Server sends a response

4. Connection ends
  </div>
  <div class="hb-col" markdown="block">
**Key properties:**

- *Stateless* (each request stands alone)

- Simple

- Scales well
  </div>
</div>


```bash
# EXAMPLE

# Request
POST /ask
{ "question": "What is X?" }

# Response
{ "answer": "..." }
```

### 3. Resource-based thinking
Instead of “doing actions,” APIs expose *resources*. Why?

- Keeps APIs predictable

- Simplifies integration with tools (eg ChatGPT)

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Example **resources**

- `/documents`

- `/users`

- `/queries`
  </div>
  <div class="hb-col" markdown="block">
You interact with **resources** using **verbs**:

- `GET` ⟶ read

- `POST` ⟶ create

- `PUT`/`PATCH` ⟶ update

- `DELETE` ⟶ remove
  </div>
</div>


### 4. Synchronous vs asynchronous APIs
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Synchronous**

- Client waits for the response

- Simple, common, easy

- Most LLM APIs work this way
  </div>
  <div class="hb-col" markdown="block">
**Asynchronous**

- Client starts a job

- Server finishes later

- Client checks back or receives a callback
  </div>
</div>