---
name: sql-deadlock-prevention-strategy
description: Implementa estratégias para evitar Deadlocks em transações SQL, ordenando acessos e mantendo transações curtas.
---
# `sql-deadlock-prevention-strategy`
Fluidez e estabilidade em concorrência pesada.
## Regras
1. Acesse tabelas e registros sempre na mesma ordem lógica em todas as transações da aplicação.
2. Mantenha as transações o mais curtas possível, movendo lógica não essencial para fora do bloco transacional.
3. Utilize o nível de isolamento adequado (`Read Committed` costuma ser o ideal para evitar bloqueios excessivos).
---
