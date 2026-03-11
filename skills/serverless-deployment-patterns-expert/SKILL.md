---
name: serverless-deployment-patterns-expert
description: Implementa padrões de deploy para arquiteturas Serverless (Lambda, Cloud Functions) focando em cold-starts e custos.
---
# `serverless-deployment-patterns-expert`
Escalabilidade infinita e custo zero em repouso.
## Regras
1. Minimize o tamanho do pacote de deploy para reduzir o tempo de Cold Start.
2. Utilize "Provisioned Concurrency" apenas para funções críticas que não toleram latência inicial.
3. Configure alertas de custo agressivos e limites de execução para evitar surpresas na fatura da nuvem.
---
