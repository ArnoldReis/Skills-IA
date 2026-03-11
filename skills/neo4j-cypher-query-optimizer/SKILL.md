---
name: neo4j-cypher-query-optimizer
description: Otimiza consultas Cypher para bancos de dados de grafos, focando em travessias eficientes e redução de carga.
---
# `neo4j-cypher-query-optimizer`
Performance máxima em conexões complexas.
## Regras
1. Utilize `EXPLAIN` e `PROFILE` para identificar gargalos em travessias de grafos.
2. Especifique Labels nos nós da query para reduzir o espaço de busca.
3. Utilize parâmetros em vez de concatenar strings na query para reaproveitar o plano de execução.
