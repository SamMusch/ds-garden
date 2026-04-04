---
Function: null
Objective: null
Quality: null
QualityComment: null
ReviewFreq: null
ai_abstract: null
ai_key_terms: []
children: 0
grandchildren: 0
kMDItemContentCreationDate: 2026-01-06 18:13:12 +0000
kMDItemContentModificationDate: 2026-04-04 18:16:25 +0000
kMDItemDateAdded: 2026-01-06 18:13:12 +0000
kMDItemFSFinderFlags: '0'
published: true
reading_time: 2.9
source_file: Networking-2-Containers.md
tags: null
word_count: 583
---

Resources

- [Getting Started with Docker and AI by Nigel Poulton](https://learning.oreilly.com/library/view/getting-started-with/9781837022878/chap02.xhtml)

- [Docker Cheatsheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

- [Docker Hub Container Image Library \| App Containerization](https://hub.docker.com/)

!!! sam
    **Problem**: We move to microservices for scalability, but deployment becomes harder.
    **Solution**: A *container* packages **everything an application needs** into 1 portable unit.

    - code

    - runtime

    - libraries

    - settings


### Glossary
[Figure 1.12 Diagram](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781837022878/files/images/figure1-12.png)
!!! sam
    *Images*: a read-only template containing everything needed to run a container

    *Container*: a running, isolated instance of an image

    ---

    *Registry*: a centralized place for storing and retrieving images

    *Host*: where (physical server or VM) the *container* executes. The host provides the OS that every container shares.

    *Runtime environment*: where the program executes + the necessary resources/services

    *Kernel*: the core features & functions of an OS. (Sometimes *kernel* & *OS* are used interchangeably.)

    *Microservices*: a design pattern where every feature is dev/deployed/managed as its own small app/microservice

    *Bridge network*: a private *network* that exists **only on that server** and allows containers to talk.



### Images & Containers
!!! sam
    **Issue**: dev & prod environments had different versions of libraries & dependencies.

    **Solution**: Docker makes it easy to package **applications** + **dependencies**.

    - ***image***: the standard **package**

    - ***container***: the standard **runtime**


    Containers virtualize the OS, not the hardware.


!!! sam
    The steps in *containerizing* an application:

    1. Dev app

    2. Package app + dependencies as an ***image*** (called *containerization*)

    3. Ship ***image*** to a registry (optional)

    4. Run as a ***container*** (using a tool like Docker)

    A ***container*** is a ring-fenced part of an OS dedicated to a single app. (*isolated execution environment*)


!!! sam
    **Under the hood**:

    Shared OS (kernel)

    - Container 1 (runs 1 app)

    - Container 2 (runs 1 app)

    - Container ...

    Each container is NOT aware of others.


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
### Images

3 layers ⟶ 1 ***image***

![Figure 1.3. Image layering.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781837022878/files/images/figure1-3.png)
  </div>
  <div class="hb-col" markdown="block">
### Containers

1 ***image*** ⟶ 1+ ***containers***

![Figure 1.5. Single image starting three containers.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781837022878/files/images/figure1-5.png)
  </div>
</div>


### Registries
!!! sam
    *registries*

    - **are**: centralized places to store & retrieve images

    - **aka**: container registries | Docker registries | OCI registries.

    actions ([Figure](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781837022878/files/images/figure1-6.png))

    - *pushing*: storing images

    - *pulling*: retrieving images


### Microservices
!!! sam

    - **Old way**: *monolithic applications*. Every feature is dev/deployed/managed as **1 complex app**.

    - **New way**: *microservices*. Every feature is dev/deployed/managed as **its own indy app**.

    ---

    The term *microservice* comes from:

    - Small (micro)

    - Application (service)

    *microservices*: a design pattern where **indy app features** are dev/deployed/managed as **indy apps** running as containers.


!!! sam
    **Example**: 1 microservices **application** with `6` *microservices*.

    Each of the `6` *microservices*:

    - is **built** as its own ***image***

    - is **deployed** as its own ***container***

    - is coupled with **other microservices** over the **IP network**.

    - can be updated & scaled independently


### Docker Compose
!!! sam
    *Docker Compose* is how we can deploy/manage *multi-container apps* (aka *microservices apps*).

    Note that Compose refers to *containers* as *services*.

    The *compose file* is where we define the app.

    - define the **services**

    - define the **network**

    Deploy using **`docker compose`** command.

    Example:[Figure 6.2. The Compose file.](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781837022878/files/images/figure6-2.png)