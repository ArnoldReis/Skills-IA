---
name: dynamodb-single-table-design
description: Implementa o padrão Single Table Design no DynamoDB para reduzir custos e aumentar a performance de busca.
---
# `dynamodb-single-table-design`
Eficiência extrema em bancos NoSQL chave-valor.
## Regras
1. Utilize prefixos genéricos (PK, SK) para as chaves principais.
2. Mapeie múltiplos tipos de entidades na mesma tabela.
3. Utilize Global Secondary Indexes (GSI) para suportar padrões de acesso secundários.
