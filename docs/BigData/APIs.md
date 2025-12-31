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

An API is **not** about technology first.  
It’s about **agreement and separation of responsibility**.

### 1. What an API is
!!! sam
    An API is a **structured interface** between 2 systems.  
    One system asks for something. The other responds in a defined format.

    Think:

    - You ask a question ⟶ request

    - The system answers ⟶ response

    The API defines **how that conversation must happen**.


### 2. Why APIs exist
!!! sam
    APIs exist to:

    - Hide internal complexity

    - Allow systems to change internally without breaking users

    - Enable reuse across teams/products/companies

    Without APIs, every system would need to know how every other system works internally.


### 3. APIs are contracts
!!! sam
    An API is a promise:

    - If you send _this kind of request_

    - You will get _this kind of response_

    This contract matters more than implementation details.


### 4. APIs are about communication, not code
!!! sam
    APIs are **not libraries** and **not shared code**.  
    They are communication agreements between independent systems.

    This is why APIs work across:

    - Programming languages

    - Machines

    - Companies

    - Cloud boundaries


### 5. Web APIs
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


## SECURITY

> **Security isn’t about blocking users. It’s about knowing who’s talking to you and why.**

Chapter 3 is about **keeping APIs safe without making them unusable**.  

### 1. Why API security exists

Since APIs are exposed to the internet, anyone can **try** to call them.

Security answers:

- _Who is calling me?_

- _Are they allowed to do this?_

- _Can I trust the data in transit?_

### 2. Authentication vs Authorization
You almost always need both.
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


### 3. API keys
An *API key*: a secret string sent with each request.
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
**Pros:**

- Simple

- Easy to implement
  </div>
  <div class="hb-col" markdown="block">
**Cons:**

- Anyone with the key has access

- Hard to manage at scale
  </div>
</div>


### 4. HTTPS
!!! sam
    HTTPS:

    - Encrypts data in transit

    - Prevents eavesdropping

    - Verifies the server identity

    HTTPS is mandatory for modern APIs.


### 5. CORS

(why browsers block things)

CORS exists to protect users.

Browsers block requests when:

- A web page tries to call a different domain

- The server doesn’t explicitly allow it

This is **not a server security feature** — it’s a browser safety rule.

That’s why:

- Curl works

- Server-to-server calls work

- Browsers sometimes fail

### 6. Trust boundaries (mental model)

Every system boundary **matters**:

- Browser ⟶ API

- API ⟶ database

- ChatGPT ⟶ your API

Each boundary **needs**:

- Authentication

- Validation

- Logging