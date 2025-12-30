---
author:

- '[[Figure 3-2]]'

- '[[Figure 3-4]]'

- '[[Brenda Jin]]'

- '[[Saurabh Sahni]]'

- '[[Amir Shevat]]'

- '[[Authentication and Authorization]]'
created: 2025-12-29
description: Chapter 3. API Security Security is a critical element of any web application,
  particularly so for APIs. New security issues and vulnerabilities are always being
  discovered, and it’s important...
published: true
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch03.html
tags:

- clippings
title: API Security
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