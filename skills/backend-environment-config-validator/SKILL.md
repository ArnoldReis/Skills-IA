---
name: backend-environment-config-validator
description: Valida e tipa variáveis de ambiente (.env) no início da execução para evitar falhas silenciosas.
---
# `backend-environment-config-validator`
Garantia de que o servidor tem tudo o que precisa para rodar.
## Regras
1. Utilize Zod para validar a presença e o formato das variáveis.
2. Interrompa a execução da aplicação (Crash) se uma variável obrigatória estiver faltando.
3. Forneça valores padrão (Defaults) seguros para ambientes de desenvolvimento.
