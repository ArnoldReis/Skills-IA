---
name: graphql-federation-master
description: Implementa uma arquitetura de Supergraph que combina múltiplos subgraphs de GraphQL em uma única interface única.
---
# `graphql-federation-master`
Agregando o domínio de dados de toda a empresa em um único grafo federado.
## Regras
1. Defina entidades que podem ser estendidas por múltiplos serviços (ex: `User` estendido por `Reviews` e `Billing`).
2. Utilize o Gateway da Apollo para compor o esquema global e rotear consultas para os subgrafos corretos.
3. Monitore a performance das consultas federadas para evitar o problema do N+1 através de camadas.
---
