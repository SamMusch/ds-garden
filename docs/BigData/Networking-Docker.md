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


[Cheatsheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)  |  [Image](https://i.imgur.com/xQGvfrT.png)

!!! sam
    **Key Problem**: After building an app on your machine, how can we replicate the software our environment needs onto any machine?

    **Solution**: Docker packages software into *containers* that can run in any environment.

    - Containers virtualize the OS, not the hardware.

    - In other words, all software & apps are run by a single kernel.



**Docker 3 elements**
<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***Dockerfile***

- **is**: a `.txt` build recipe

- **composed of**: Ordered commands (`FROM`, `RUN`, ..)

- **purpose**: Define *how* an image is built
  </div>
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