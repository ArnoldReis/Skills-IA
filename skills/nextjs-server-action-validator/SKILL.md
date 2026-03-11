---
name: nextjs-server-action-validator
description: Proteção e validação de dados em Server Actions do Next.js usando Zod.
---
# `nextjs-server-action-validator`
Transações de backend seguras vindo do cliente.
## Regras
1. Valide o input usando `safeParse` dentro da Server Action.
2. Implemente tratamento de erros que retornam mensagens amigáveis ao invés de estourar exceções.
3. Utilize a diretiva `'use server'` rigorosamente isolada.
