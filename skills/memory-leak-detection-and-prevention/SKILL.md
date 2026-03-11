---
name: memory-leak-detection-and-prevention
description: Detecta e previne vazamentos de memória através de análise de heap e boas práticas de gerenciamento de referências.
---
# `memory-leak-detection-and-prevention`
Mantendo a pegada de memória estável ao longo do tempo.
## Regras
1. Limpe sempre `EventListeners` e `Intervals` no desmonte de componentes ou serviços.
2. Utilize `WeakMap` e `WeakSet` para referenciar objetos sem impedir que eles sejam coletados pelo GC.
3. Realize testes de longa duração (Soak Tests) para observar se o consumo de memória sobe linearmente sem estabilizar.
---
