---
name: api-key-management-lifecycle-pro
description: Gerencia o ciclo de vida completo de chaves de API, incluindo geração segura, rotação, expiração e auditoria.
---
# `api-key-management-lifecycle-pro`
Boas práticas para chaves de acesso programático.
## Regras
1. Gere chaves criptograficamente fortes e armazene apenas o hash no seu banco de dados (estilo senhas).
2. Permita que o usuário crie múltiplas chaves e adicione descrições para fácil identificação.
3. Implemente a funcionalidade de "Revogação Instantânea" para chaves comprometidas ou vazadas acidentalmente.
---
