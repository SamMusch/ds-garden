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
_kMDItemDisplayNameWithExtensions: Networking-Servers.md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-12-30'
cssclasses: null
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
reading_time: 1.7
source_file: Networking-Servers.md
tags: null
title: Networking Servers
word_count: 342
---

A **server** is a software program that waits for requests ⟶ does work when asked ⟶ sends results back.

Everything *else* exists to make that exchange reliable/scalable/reachable.

- networking, ports, APIs, containers, cloud 

### 2. What a server _does_

Chronological flow:

1. A client sends a request.

2. The request reaches an IP address + port.

3. A server process is listening on that port.    

4. The server runs some logic (code).

5. The server returns a response (HTML, JSON, text, etc.).

Example:

- Browser ⟶ asks for `/docs`

- Server ⟶ runs Python code

- Server ⟶ returns JSON or HTML

### 3. What makes something a “server”

A program becomes a server when it:

- **Listens** on a network interface

- **Accepts incoming connections**

- **Responds deterministically**


### 4. Client vs Server

- **Client**: initiates requests (browser, curl, app)

- **Server**: waits and responds
They are roles, not types of machines.

### 5. Ports (why they exist)

A computer can run many servers at once.

Ports tell the OS _which program_ should receive the request.

Examples:

- `:80` ⟶ HTTP

- `:443` ⟶ HTTPS

- `:2024` ⟶ your local app

### 6. What “networking” really means

Networking is just:

1. Finding the server (IP / DNS)

2. Reaching the right port

3. Sending bytes

4. Getting bytes back

Everything else is abstraction.

### 7. What APIs are

An **API** is just an agreed-upon request/response format.

```
Request:  GET /ask?q=hello
Response: { "answer": "Hi" }
```

Your server defines the rules.

### 8. Where frameworks fit

Frameworks (FastAPI, Flask, Express):

- Handle request parsing

- Route URLs to functions

- Format responses

- Manage errors

They don’t replace the server; they sit _inside_ it.

### 9. What Docker adds

Docker:

- Packages the server + dependencies

- Makes it run the same everywhere

- Does not change what a server is

### 10. What cloud adds

Cloud platforms:

- Run servers for you

- Restart them if they crash

- Expose them to the internet

- Scale them when needed

Your code does not change.

### 11. Mental model (simple)

```
Client ⟶ Network ⟶ Server ⟶ Code ⟶ Response
```

Everything else is tooling around this.

### 12. Where you are now

You already built servers:

- Your LangGraph app

- Your Docker containers

- Your local endpoints on `localhost:2024`