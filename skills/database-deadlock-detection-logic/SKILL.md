---
name: database-deadlock-detection-logic
description: Implementa estratégias para detectar, mitigar e prevenir impasses (Deadlocks) em bancos de dados relacionais sob alta concorrência.
---
# `database-deadlock-detection-logic`
Mantendo a fluidez das transações paralelas sem travamentos mútuos.
## Regras
1. Acesse as tabelas e linhas sempre na mesma ordem em todas as transações para evitar ciclos de espera.
2. Mantenha as transações o mais curtas possível para reduzir a janela de tempo em que os locks são mantidos.
3. Utilize timeouts de lock agressivos e lógica de retentativa inteligente com backoff exponencial quando um deadlock for detectado.
---
