---
published: true
---

Terms

- artifact

- kernel

- software vs apps

- environment

- daemon

- runtime instance


[Cheatsheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)

**Key Problem**: You built an app on your machine. Now, how can we replicate the software our environment needs onto any machine?

**Solution**: Docker packages software into *containers* that can run in any environment.

- Containers virtualize the OS, not the hardware.

- In other words, all software & apps are run by a single kernel.


<img src="https://i.imgur.com/xQGvfrT.png" alt="Docker" width="70%">


---

Docker - 3 elements

1. *Dockerfile* | `.txt` file defining how to build an image

2. *Image* | snapshot of your software & dependencies

3. *Container* | 

**Container**: A runtime instance of an image. 

- It adds a writable layer on top of the image and executes the defined process in an isolated environment.

- Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging.

---

***Dockerfile***

- **is**: a `.txt` build recipe

- **composed of**: Ordered commands (`FROM`, `RUN`, ..)

- **purpose**: Define *how* an image is built


Basic analogy

- **Images**: the recipe containing all ingredients + instructions

- **Container**: the actual meal


<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Image***

- **is**: a packaged snapshot of software & dependencies

- **composed of**: read-only layers from Dockerfile

- **purpose**: provides template for running software
  </div>
  <div class="hb-col" markdown="block">
***Container***

- **is**: a runtime process of an image

- **composed of**: image + runtime layer + a started cmd

- **purpose**: execute the app
  </div>
</div>