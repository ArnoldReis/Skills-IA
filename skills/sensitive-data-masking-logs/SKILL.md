---
name: sensitive-data-masking-logs
description: Implementa filtros automáticos para detectar e mascarar dados sensíveis (senhas, cartões, CPFs) antes de serem gravados nos logs.
---
# `sensitive-data-masking-logs`
Privacidade por design na trilha de auditoria e logs.
## Regras
1. Utilize expressões regulares para identificar padrões comuns de dados sensíveis em objetos de log.
2. Substitua o dado real por um placeholder fixo (ex: `****`) ou um hash não reversível.
3. Realize a sanitização o mais próximo possível da fonte para evitar que o dado sensível chegue ao transporte de logs.
---
