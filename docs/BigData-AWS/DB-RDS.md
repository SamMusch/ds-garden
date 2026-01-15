---
published: true
---

**Amazon RDS for PostgreSQL**

AWS Console ⟶ Amazon RDS → Create database → Engine: PostgreSQL

*RDS for PostgreSQL* vs *Aurora PostgreSQL*

<div class="hb-row" markdown="block">
  <div class="hb-col" markdown="block">
***RDS***

- Simplest setup + lowest baseline cost

- One primary + (optional) Multi-AZ standby/readable standbys 

- EBS-backed storage with autoscaling.
  </div>
  <div class="hb-col" markdown="block">
***Aurora***

- Serverless scaling (Aurora Serverless) / variable workloads. 

- High read scaling

- Aurora’s architecture/perf features
  </div>
</div>