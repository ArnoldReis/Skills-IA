---
name: multi-tenancy-architecture-expert
description: Implementa arquiteturas de software que atendem múltiplos clientes (tenants) de forma isolada e segura.
---
# `multi-tenancy-architecture-expert`
Escalabilidade e isolamento para aplicações SaaS.
## Regras
1. Escolha entre isolamento por Banco de Dados, Schema ou Discriminador (coluna tenant_id) baseando-se no custo e conformidade.
2. Nunca esqueça de filtrar todas as consultas pelo `tenant_id` atual para evitar vazamento de dados entre clientes.
3. Permita customizações de interface e lógica (Feature Flags) específicas para cada tenant.
---
