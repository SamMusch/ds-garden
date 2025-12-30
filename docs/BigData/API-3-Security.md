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
_kMDItemDisplayNameWithExtensions: API-3-Security.md
ai_abstract: null
ai_key_terms: []
aliases: null
author:

- '[[Figure 3-2]]'

- '[[Figure 3-4]]'

- '[[Brenda Jin]]'

- '[[Saurabh Sahni]]'

- '[[Amir Shevat]]'

- '[[Authentication and Authorization]]'
children: 0
created: '2025-12-30'
cssclasses: null
description: Chapter 3. API Security Security is a critical element of any web application,
  particularly so for APIs. New security issues and vulnerabilities are always being
  discovered, and it’s important...
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
reading_time: 1.2
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch03.html
source_file: API-3-Security.md
tags: null
title: API 3 Security
word_count: 234
---

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