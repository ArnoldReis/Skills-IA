---
name: alert-fatigue-reduction-logic
description: Implementa técnicas para reduzir o excesso de alertas irrelevantes, focando apenas em incidentes que exigem ação humana.
---
# `alert-fatigue-reduction-logic`
Qualidade sobre quantidade no gerenciamento de incidentes.
## Regras
1. Defina alertas baseados na experiência do usuário (ex: taxa de erro de checkout) em vez de métricas de infraestrutura puras (ex: alto CPU).
2. Utilize agrupamento de alertas (Inhibition/Grouping) para evitar 100 alertas diferentes para a mesma causa raiz.
3. Diferencie entre alertas "Paginação" (acorda alguém às 3 da manhã) e alertas "Tickets" (podem esperar o horário comercial).
---
