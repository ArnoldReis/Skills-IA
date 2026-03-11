---
name: graphql-query-complexity-analysis
description: Implementa análise de complexidade em queries GraphQL para prevenir ataques de negação de serviço (DoS) por consultas profundamente aninhadas.
---
# `graphql-query-complexity-analysis`
Protegendo seu servidor GraphQL contra consultas maliciosas e ineficientes.
## Regras
1. Atribua um "Custo" para cada campo no seu schema baseado no peso da operação no backend.
2. Defina um limite máximo de complexidade por requisição (ex: 1000 pontos).
3. Rejeite consultas que excedam o limite antes mesmo de iniciar a execução dos resolvers.
---
