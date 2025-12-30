---
published: true
---

[Every Networking Concept](https://www.youtube.com/watch?v=xj_GjnD4uyI&t=378s)

**In this doc**:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Core Networking Concepts

- IP Addresses

- DNS

- Ports
  </div>
  <div class="hb-col" markdown="block">
Security & Network Organization

- Subnets

- Routing

- Firewalls

- NAT
  </div>
  <div class="hb-col" markdown="block">
Cloud Networking Essentials

- VPC

- Internet Gateway

- NAT Gateway

- Route Tables
  </div>
  <div class="hb-col" markdown="block">
Container Networking (Docker)
  </div>
</div>


**Top 5 concepts**

- *Addressing* (IP, DNS): How devices find each other

- *Ports*: How multiple apps share one IP

- *Segmentation* (Subnets, Routing): How we organize networks

- *Firewalls*: How we control traffic

- *NAT*: How private addresses access the internet

---

`TravelBuddy` | The **system**. Broken down:
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
Frontend **application**

- Web UI
  </div>
  <div class="hb-col" markdown="block">
Backend **application**

- Business logic / APIs
  </div>
  <div class="hb-col" markdown="block">
Database **application**

- Persistent storage
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
    **A3**: The website *port* (`port 80`)


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

- **Problem**: Maintaining **physical servers** is getting expensive and slow.

- **Solution**: Move to the **cloud**, where served are provided as *managed services*.

Concepts remain, but tools change:

- Physical *routers* ⟶ *VPCs*

- Physical *firewalls* ⟶ *Security Groups*

- Bare *metal* ⟶ *Containers* ⟶ *Kubernetes*

**In the cloud**

1. create a *VPC* (private IP space).

2. create *subnets* (public/private).

3. attach *route tables* (where traffic can go).

4. attach an *Internet Gateway* (public internet path).

5. attach a *NAT Gateway* (private subnet outbound internet).

6. lock it down with *Security Groups / NACLs* (ports + allowed sources).
[Image](https://i.imgur.com/vrjgAu6.png)

### 6: Container Networking

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


As we grow further, we run *containers* on multiple *servers*.
Microservices need to communicate across servers, not just within 1 machine.

Docker’s *overlay network* creates a virtual network spanning multiple hosts, making containers on different servers appear to be on the same network.





### Recap

Foundational networking concepts:

1. **IP addresses** identify devices so they can be found and contacted.

2. **DNS** translates human-friendly names into IP addresses.

3. **Ports** let multiple apps on the same server receive the right traffic.

4. **Subnets + routing** divide networks into sections and connect them.

5. **Firewalls** control which traffic is allowed between segments and ports.

6. **NAT** lets private systems reach the internet using a shared public IP.