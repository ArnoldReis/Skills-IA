---
name: read-replica-routing-logic
description: Roteia consultas de leitura para réplicas e operações de escrita para o nó principal, otimizando o uso do banco.
---
# `read-replica-routing-logic`
Balanceamento inteligente de carga em níveis de banco de dados.
## Regras
1. Identifique tipos de query: SELECTs pesados devem ir para as réplicas de leitura.
2. Implemente o roteamento no nível da aplicação ou através de um middleware como PgPool ou ProxySQL.
3. Esteja ciente do "Replication Lag" onde o dado lido na réplica pode estar alguns milissegundos atrasado em relação ao master.
---
