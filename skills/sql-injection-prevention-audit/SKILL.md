---
name: sql-injection-prevention-audit
description: Audita e sanitiza queries SQL para prevenir ataques de injeção de código, garantindo o uso de Prepared Statements.
---
# `sql-injection-prevention-audit`
A barreira fundamental contra sequestro de dados.
## Regras
1. NUNCA concatene variáveis diretamente em strings de SQL.
2. Utilize parâmetros nomeados ou posicionais (`$1`, `?`, `:id`).
3. Utilize ORMs que tratam a parametrização automaticamente por padrão.
