---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
author:

- '[[Brenda Jin]]'

- '[[Saurabh Sahni]]'

- '[[Amir Shevat]]'
children: 0
description: Chapter 1. What’s an API? “What’s an API?” When a new programmer asks
  this question, they typically get the answer, “an application programming interface.”
  But APIs are so much more than their...
grandchildren: 0
kMDItemContentCreationDate: 2026-01-06 18:13:12 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2026-01-06 18:13:12 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 1.6
source: https://learning.oreilly.com/library/view/designing-web-apis/9781492026914/ch01.html#why_do_we_need_apisquestion_mark
source_file: APIs.md
tags: null
word_count: 313
---

Resources

- [O'Reilly - Designing Web APIs](https://www.oreilly.com/library/view/designing-web-apis/9781492026914/ch01.html)

An API: a **contract** that lets systems talk to each other (w/o learning each other's inner working)
It defines 

- *what you can ask for*

- *how you ask*

- *what you get back*

## PARADIGMS
An API *paradigm*: 

- defines the interface exposing backend data of a service to other applications.

- a pattern for how requests & responses are shaped.

Standards

- **Request-Response APIs** (popular *paradigms* are ==REST== / RPC / GraphQL)

- **Event-Driven** (popular *paradigms* are WebHooks / WebSockets)

### Request-Response APIs
These expose an interface through an HTTP-based web server. 
APIs define a set of endpoints. 
Clients make HTTP requests to those endpoints ⟶ server responds as JSON

#### REST
REST APIs exposes data as <abbr title="entities that can be identified / named / addressed / handled on the web">resources</abbr>. You interact using CRUD verbs.

REST API rules:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
2 URLs per resource:

- `/users`: the collection

- `/users/U123`: the specific element
  </div>
  <div class="hb-col" markdown="block">
_CRUD_ methods

- _Create_: `POST`

- _Read_: `GET`

- _Update_: `PUT` (replace), `PATCH` (edit)

- _Delete_: `DELETE`
  </div>
  <div class="hb-col" markdown="block">
Errors

- 2XX: success

- 3XX: resource has moved

- 4XX: client-side error

- 5XX: server-side errors
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

- Browsers sometimes fail