---
name: api-key-management-system
description: Sistema para geração, validação e revogação de API Keys para acesso seguro de terceiros ou serviços internos.
---
# `api-key-management-system`
Controle de acesso externo profissional.
## Regras
1. Gere chaves aleatórias e seguras (ex: prefixo + 32 chars).
2. Armazene apenas o hash da chave no banco para segurança total.
3. Associe cada chave a um escopo (Scopes) ou limites de uso.
