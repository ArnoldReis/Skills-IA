---
name: apollo-federation-subgraph-master
description: Implementa e gerencia Subgraphs eficientes para o Apollo Federation, permitindo que cada serviço contribua para o Supergraph global.
---
# `apollo-federation-subgraph-master`
Contribuindo partes do seu domínio para um grafo unificado.
## Regras
1. Utilize o decorador `@key` para indicar como os outros serviços podem identificar e estender suas entidades.
2. Implemente o resolver de referência `__resolveReference` para permitir que o Gateway carregue dados do seu serviço.
3. Evite sobreposição de campos entre subgraphs; cada campo deve ter um dono claro para simplificar a governança.
---
