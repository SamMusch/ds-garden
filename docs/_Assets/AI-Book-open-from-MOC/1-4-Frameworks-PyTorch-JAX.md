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
_kMDItemDisplayNameWithExtensions: 1.4 Modern Frameworks (PyTorch, JAX).md
ai_abstract: null
ai_key_terms: []
aliases: null
children: 0
created: '2025-07-18'
cssclasses: null
grandchildren: 0
kMDItemContentCreationDate: 2025-05-24 15:16:28 +0000
kMDItemContentCreationDate_Ranking: 2025-05-24 00:00:00 +0000
kMDItemContentModificationDate: 2025-05-24 16:20:09 +0000
kMDItemContentType: net.daringfireball.markdown
kMDItemContentTypeTree: (
kMDItemDateAdded: 2025-05-24 15:17:01 +0000
kMDItemDocumentIdentifier: '167273'
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
kMDItemInterestingDate_Ranking: 2025-05-24 00:00:00 +0000
modified: '2025-05-24'
published: true
reading_time: 1.4
source_file: 1.4 Modern Frameworks (PyTorch, JAX).md
tags: null
title: 1.4 Modern Frameworks (PyTorch, JAX)
word_count: 270
---

## High-Level
### Business Analogy
!!! note
    - **PyTorch**: kitchen that lets chefs experiment with recipes, then creates ready-to-serve meals. 
    - **JAX**: a factory line that automates recipe execution at scale


### High-Level Concept
Modern ML frameworks combine ease of use with performance optimizations.
- PyTorch 2.x emphasizes flexible, Python‑style development with optional compilation for speed.
- JAX offers a functional approach, automatically parallelizing and optimizing computations.

### Connections to Other Topics
- **Quantization and Deployment**: Framework compilation features simplify converting models to lighter formats for edge devices.  
- **MLOps Pipelines**: Integrates seamlessly with CI/CD workflows by scripting model definitions as pure functions.  
- **Hardware Awareness**: Both frameworks adapt to different accelerators—GPUs, TPUs, and even mobile chips—enabling on‑device AI.

## Details
### PyTorch
- **torch.compile**  
  Compiles eager models into optimized kernels via TorchInductor and AOTAutograd.
- **Dynamic Eager Execution**  
  Allows Python-native debugging and control flow, with optional compilation.
- **TorchScript Hybridization**  
  Export parts of the model to an intermediate representation for deployment.

### JAX
- **Functional NumPy API**  
  Drop-in replacement for NumPy with `jit`, `grad`, `vmap`, `pmap`.
- **XLA Compilation**  
  Just-In-Time-compiles code for CPU, GPU, and TPU targets.
- **Purely Functional Paradigm**  
  Emphasizes immutability and function transformations.

### Feature Comparison
| Feature            | PyTorch 2.x             | JAX                       |
|--------------------|-------------------------|---------------------------|
| Compilation        | `torch.compile`         | `jax.jit` & XLA           |
| Autograd           | Eager Autograd Engine   | Functional `grad` API     |
| Vectorization      | Manual/`torch.vmap`     | Automatic `vmap`          |
| Parallelism        | `DistributedDataParallel` | `pmap`                    |

### Quick Start Examples
```python
# PyTorch 2.x compilation
import torch
model = torch.nn.Linear(10, 5)
compiled_model = torch.compile(model)
```

```python
# JAX jit and grad
import jax
import jax.numpy as jnp

def loss_fn(x):
    return jnp.sum(x ** 2)

jit_loss = jax.jit(loss_fn)
grad_loss = jax.grad(loss_fn)
```