---
name: distributed-request-counting
description: Implementa contagem de requisições em larga escala através de múltiplos servidores usando técnicas de agregação assíncrona.
---
# `distributed-request-counting`
Contabilidade de alta performance para sistemas de alta volumetria.
## Regras
1. Utilize um contador centralizado e rápido (ex: Redis `INCR`) para métricas em tempo real que exigem baixa latência.
2. Agregue eventos localmente na memória do processo por alguns segundos antes de enviá-los para o agregador central para reduzir a carga de rede.
3. Esteja preparado para eventuais perdas mínimas de precisão em troco de performance extrema (Eventual Consistency).
---
