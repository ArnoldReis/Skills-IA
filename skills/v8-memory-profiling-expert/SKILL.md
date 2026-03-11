---
name: v8-memory-profiling-expert
description: Realiza análise profunda de memória na engine V8 para identificar Memory Leaks e otimizar a alocação de objetos.
---
# `v8-memory-profiling-expert`
Domando a memória do JavaScript para aplicações de alta performance.
## Regras
1. Utilize `heap snapshots` e `allocation timelines` para identificar objetos que não estão sendo coletados pelo GC.
2. Evite referências circulares em caches de longa duração que impedem a liberação de memória.
3. Monitore o uso de `Buffer` e `Uint8Array` para garantir que a memória off-heap esteja sendo gerenciada corretamente.
---
