---
name: blue-green-deployment-zero-downtime
description: Implementa a estratégia Blue-Green para garantir deploys sem tempo de inatividade e rollback instantâneo.
---
# `blue-green-deployment-zero-downtime`
Alternância total e segura entre ambientes idênticos.
## Regras
1. Mantenha dois ambientes idênticos (Blue = Produção Atual, Green = Nova Versão).
2. Só mude o tráfego no roteador/load balancer após o ambiente Green passar em todos os testes de fumaça (Smoke Tests).
3. Mantenha o ambiente Blue ativo por um tempo após o switch para permitir um rollback imediato se algo falhar.
---
