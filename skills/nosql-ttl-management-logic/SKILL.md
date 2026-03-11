---
name: nosql-ttl-management-logic
description: Gerencia o tempo de vida (Time To Live) de documentos e registros para limpeza automática de dados temporários.
---
# `nosql-ttl-management-logic`
Limpeza automática e gestão de volume de dados.
## Regras
1. Utilize índices de TTL nativos (Redis EXPIRE, MongoDB TTL Index, DynamoDB TTL).
2. Certifique-se de que o campo de data usado pelo TTL esteja no formato UTC correto.
3. Monitore a taxa de deleção para garantir que o processo de limpeza não impacte a performance de leitura/escrita.
---
