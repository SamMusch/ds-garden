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