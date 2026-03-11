---
name: secret-rotation-automation
description: Automatiza a rotação periódica de credenciais (senhas, API keys) para reduzir o impacto de vazamentos.
---
# `secret-rotation-automation`
Segurança dinâmica e credenciais temporárias.
## Regras
1. Utilize serviços como AWS Secrets Manager ou HashiCorp Vault para gerenciar a rotação.
2. Garanta que a aplicação suporte múltiplas versões do segredo durante o período de transição (Grace Period).
3. Nunca armazene segredos em variáveis de ambiente estáticas (prefiria o fetch dinâmico).
---
