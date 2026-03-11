---
name: back-pressure-handling-logic
description: Implementa sinais de controle de fluxo (Back-pressure) para impedir que um produtor rápido demais derrube um consumidor lento.
---
# `back-pressure-handling-logic`
Auto-regulação de fluxo para estabilidade do sistema.
## Regras
1. Utilize buffers com limites de tamanho (bounded queues); rejeite ou atrase o produtor se o buffer estiver cheio.
2. Implemente sinais "Stop/Start" na camada de protocolo para pausar o recebimento de dados.
3. Monitore o "lag" de processamento; ele é o principal sinalizador de que a pressão está alta demais.
---
