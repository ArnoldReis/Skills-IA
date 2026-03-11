---
name: frontend-clipboard-manager
description: Gerencia operações de copiar e colar com feedback visual de sucesso.
---
# `frontend-clipboard-manager`
Integração nativa com a área de transferência do sistema.
## Regras
1. Utilize a API moderna `navigator.clipboard`.
2. Forneça um estado temporário de "Copiado!" (ex: por 2 segundos).
3. Gerencie erros de permissão de acesso ao clipboard.
