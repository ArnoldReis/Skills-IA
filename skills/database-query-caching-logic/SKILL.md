---
name: database-query-caching-logic
description: Implementa lógica de cache inteligente para resultados de queries caras no banco, reduzindo latência.
---
# `database-query-caching-logic`
Velocidade máxima poupando o motor de banco de dados.
## Regras
1. Utilize o padrão Cache-aside (Read-through) para preencher os dados sob demanda.
2. Configure TTLs curtos para dados que mudam e longos para dados estáticos.
3. Implemente invalidação ativa do cache ao atualizar os dados originais no banco.
