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
_kMDItemDisplayNameWithExtensions: API-1-Overview.md
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
description: Chapter 1. What’s an API? “What’s an API?” When a new programmer asks
  this question, they typically get the answer, “an application programming interface.”
  But APIs are so much more than their...
grandchildren: 0
kMDItemContentCreationDate: 2025-12-30 21:11:39 +0000
kMDItemContentCreationDate_Ranking: 2025-12-30 00:00:00 +0000
kMDItemContentModificationDate: 2025-12-30 21:14:32 +0000
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
reading_time: 1.2
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch01.html#why_do_we_need_apisquestion_mark
source_file: API-1-Overview.md
tags: null
title: API 1 Overview
word_count: 246
---

## OVERVIEW

An API is a contract that lets software systems talk to each other in a predictable way.
It defines _what you can ask for_, _how you ask_, and _what you get back_.


### What an API is
!!! sam
    An API is a **structured interface** between 2 systems.  
    One system asks for something. The other responds in a defined format.

    Think:

    - You ask a question ⟶ request

    - The system answers ⟶ response

    The API defines **how that conversation must happen**.


### Why APIs exist
!!! sam
    APIs exist to:

    - Hide internal complexity

    - Allow systems to change internally without breaking users

    - Enable reuse across teams/products/companies

    Without APIs, every system would need to know how every other system works internally.


### Web APIs
!!! sam
    Most modern APIs use:

    - HTTP (the web protocol)

    - URLs to identify resources

    - JSON for data

    Example mental model:

    - Client ⟶ HTTP request ⟶ Server ⟶ HTTP response

    This is exactly how:

    - Browsers talk to websites

    - ChatGPT calls tools

    - Your RAG system receives questions



## PARADIGMS

APIs are about *how* clients talk to servers.

An API “*paradigm*”: a pattern for how requests & responses are shaped.

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
# Request
POST /ask
{ "question": "What is X?" }

# Response
{ "answer": "..." }
```

### Resource-based thinking
Instead of “doing actions”, APIs expose *resources*. Why?

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


### Synchronous vs asynchronous APIs
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



## SECURITY

Since APIs are exposed to the internet, anyone can **try** to call them.

Security questions to answer:

- _Who is calling me?_

- _Are they allowed to do this?_

### Authentication vs Authorization
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Authentication = who are you?**  

Examples:

- API keys

- Tokens

- OAuth
  </div>
  <div class="hb-col" markdown="block">
**Authorization = what are you allowed to do?**  

Examples:

- Read-only vs write access

- Admin vs user
  </div>
</div>


### HTTPS
!!! sam
    HTTPS is mandatory for modern APIs:

    - Encrypts data in transit

    - Prevents eavesdropping

    - Verifies the server identity


### CORS

CORS are a **browser safety rule** to protect users.

Browsers block requests when:

- A web page tries to call a different domain

- The server doesn’t allow the requests

That’s why:

- Curl works

- Server-to-server calls work

- **Browsers** sometimes fail