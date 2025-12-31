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
_kMDItemDisplayNameWithExtensions: Networking.md
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
reading_time: 3.5
source_file: Networking.md
tags: null
title: Networking
word_count: 690
---

This doc covers:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Core Networking Concepts

- <abbr title="On a network ⟶ unique ID per device.">IP Addresses</abbr>

- <abbr title="Translates human domain names ⟶ IP addresses.">DNS</abbr>

- <abbr title="Endpoints IDing specific services on a device.">Ports</abbr>
  </div>
  <div class="hb-col" markdown="block">
Security & Network Organization

- <abbr title="Large network ⟶ smaller network segments">Subnets</abbr>

- <abbr title="Directing traffic between networks.">Routing</abbr>

- <abbr title="Rules allowing/blocking network traffic.">Firewalls</abbr>

- <abbr title="Translate private IPs ⟶ public IP.">NAT</abbr>
  </div>
  <div class="hb-col" markdown="block">
Cloud Networking Essentials

- <abbr title="Isolated virtual network within a cloud provider.">VPC</abbr>

- <abbr title="Connects a VPC ⟶ internet.">Internet Gateway</abbr>

- <abbr title="Connects a private subnet ⟶ internet.">NAT Gateway</abbr>

- <abbr title="Rules defining where network traffic is sent.">Route Tables</abbr>
  </div>
  <div class="hb-col" markdown="block">
Container [[Networking-Docker]]
  </div>
</div>


!!! sam
    **Top 5 concepts**

    - *Addressing* (IP, DNS): How devices find each other

    - *Ports*: How multiple apps share one IP

    - *Segmentation* (Subnets, Routing): How we organize networks

    - *Firewalls*: How we control traffic (between segments & ports)

    - *NAT*: How private addresses access the internet


---

## Networking Concepts

[Every Networking Concept](https://www.youtube.com/watch?v=xj_GjnD4uyI)

`TravelBuddy` | The **system**. Broken down:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Frontend **application**

- Website UI
  </div>
  <div class="hb-col" markdown="block">
Backend **application**

- Payment system
  </div>
  <div class="hb-col" markdown="block">
Database **application**

- MySQL database
  </div>
</div>


### 1: Single Server (IP, DNS)
!!! sam
    Assumed we launched TravelBuddy with 1 server running the entire app.

    **Q1**: How do customers **find our server** on the internet?
    **A1**: Our *public IP address* (`203.0.113.10`)


!!! sam
    **Q2**: Do I need to remember IP addresses?
    **A2**: No, use the *DNS*.

    Ex:

    - DNS: `travelbuddy.com`

    - IP: `203.0.113.10`


### 2: Multiple Apps (Ports)
!!! sam
    Our **single server** is now running 3 apps:

    - **website**: `port 80` or `port 443`

    - **MySQL DB**: `port 3306`

    - **payment service**: `port 9090`

    **Q3**: When a client request arrives, where should the **server** direct it?
    **A3**: To the appropriate *port* (in this case, the **website** on `port 80`)


### 3: Security and Segmentation (Subnets, Routing, Firewall)
!!! sam
    Having only **one server** ⟶ security risk.

    **Q4**: What should we do?
    **A4**: Use *network segmentation* to separate apps.


!!! sam
    **Q5**: How do we apply *network segmentation*?
    **A5**: Use *subnets* to divide our *network* into separate sections.

    Most systems have **many apps per subnet**.


!!! sam
    **Q6**: How do apps across subnets talk?
    **A6**: Use *routing* (directs traffic between *segments*).


!!! sam
    **Q7**: How do we **restrict** routing for security?
    **A7**: Use *firewalls*. Restrict traffic based on our rules.

    - *host firewalls* protect **indy** servers

    - *network firewalls* sit **between** subnets


### 4: NAT
!!! sam
    We now have 50 *backend servers* in a private subnet, each with their own *private IP addresses*.

    **Q8**: How can *backend servers* reach the internet?
    **A8**: Via *NAT* (Network Address Translation)


    **Flow**

    - Backend server ⟶ NAT device ⟶ Internet ⟶ NAT device ⟶ Backend server


### 5: Cloud Networking (VPC, Subnets, Gateways)

!!! sam

    - **Problem**: Maintaining **physical servers** is getting expensive and slow.

    - **Solution**: Move to the **cloud**, where served are provided as *managed services*.

    Concepts remain, but tools change:

    - Physical *routers* ⟶ *VPCs*

    - Physical *firewalls* ⟶ *Security Groups*

    - Bare *metal* ⟶ *Containers* ⟶ *Kubernetes*


!!! sam
    **In the cloud**

    1. create a *VPC* (private IP space).

    2. create *subnets* (public/private).

    3. attach *route tables* (where traffic can go).

    4. attach an *Internet Gateway* (public internet path).

    5. attach a *NAT Gateway* (private subnet outbound internet).

    6. lock it down with *Security Groups / NACLs* (ports + allowed sources).
    [Image](https://i.imgur.com/vrjgAu6.png)

### 6: Container Networking
!!! sam
    **Problem**: We move to microservices for scalability, but deployment becomes harder ("it works on my machine").
    **Solution**: A *container* packages **everything an application needs** into 1 portable unit.

    - code

    - runtime

    - libraries

    - settings


!!! sam
    Let's say our *server* has 2 ***containers*** (`TravelBuddy` & Payment system).

    **Q9**: When there are 2+ containers, how do they talk?
    **A9**: Via a *bridge network* that Docker creates.

    *Bridge network*: a private *network* that exists **only on that server**.


!!! sam
    **Q10**: How to go from external requests ⟶ container ⟶ application?
    **A10**: Via *port mapping* (or *binding*).

    Analogy: *Port mapping* is a receptionist routing outside calls ⟶ the right apartment.

    - The building = the *host machine*

    - Front desk phone \# = *host port*

    - Each apartment = a *container*

    - Apartment phone \# = *container ports*



**NEXT**
As we grow further, we run *containers* on multiple *servers*.
Microservices need to communicate across servers, not just within 1 machine.

Docker’s *overlay network* creates a virtual network spanning multiple hosts, making containers on different servers appear to be on the same network.