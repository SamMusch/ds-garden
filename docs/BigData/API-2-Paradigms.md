---
author:

- '[[Brenda Jin]]'

- '[[Saurabh Sahni]]'

- '[[Amir Shevat]]'
created: 2025-12-29
description: Chapter 2. API Paradigms Picking the right API paradigm is important.
  An API paradigm defines the interface exposing backend data of a service to other
  applications. When starting out with APIs,...
published: true
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch02.html
tags:

- clippings
title: API Paradigms
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