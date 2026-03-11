---
name: data-consistency-checker-multi-node
description: Verifica e resolve conflitos de consistência de dados em ambientes distribuídos com múltiplos nós de escrita.
---
# `data-consistency-checker-multi-node`
Integridade absoluta em sistemas distribuídos.
## Regras
1. Utilize relógios lógicos (Vector Clocks) ou Timestamps precisos para resolução de conflitos (Last Write Wins).
2. Implemente processos de reconciliação (Anti-entropy) periódicos entre os nós.
3. Utilize protocolos como Paxos ou Raft para operações que requerem consenso forte.
