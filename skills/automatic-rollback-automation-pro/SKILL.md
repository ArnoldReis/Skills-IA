---
name: automatic-rollback-automation-pro
description: Implementa a reversão automática (Rollback) de deploys baseada em picos de erro ou degradação de performance detectada.
---
# `automatic-rollback-automation-pro`
O freio de mão automático para deploys problemáticos.
## Regras
1. Defina gatilhos claros para rollback (ex: aumento de 10% nos erros 5xx por 2 minutos).
2. O sistema de rollback deve ter permissões suficientes para reverter o estado do cluster/balanceador sem intervenção humana.
3. Notifique a equipe imediatamente após um rollback ser disparado com o contexto dos logs de erro.
---
