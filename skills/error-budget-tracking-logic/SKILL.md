---
name: error-budget-tracking-logic
description: Implementa o conceito de Orçamento de Erro (Error Budget) para equilibrar a velocidade de inovação com a estabilidade do sistema.
---
# `error-budget-tracking-logic`
A moeda de troca entre Engenharia de Confiabilidade (SRE) e Produto.
## Regras
1. O orçamento de erro é o quanto o sistema pode falhar sem violar o SLO (ex: 0.1% de erro).
2. Se o orçamento de erro for esgotado no mês, interrompa novos deploys e foque 100% em correção de bugs e resiliência.
3. Utilize o orçamento para realizar experimentos controlados e manutenções programadas com segurança.
---
