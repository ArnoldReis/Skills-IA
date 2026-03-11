---
name: backend-worker-thread-pool
description: Utiliza Worker Threads para executar computações intensivas sem travar o Event Loop principal.
---
# `backend-worker-thread-pool`
Máxima potência multi-core para o Node.js.
## Regras
1. Utilize um Pool de Workers para evitar o overhead de criar e destruir threads constantemente.
2. Comunique-se com os workers via `parentPort` e `postMessage`.
3. Ideal para cálculos complexos, compressão de vídeo ou mineração de dados.
