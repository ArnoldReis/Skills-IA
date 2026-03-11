---
name: database-encryption-at-rest-helper
description: Implementa criptografia de dados sensíveis na camada de armazenamento para conformidade com LGPD/GDPR.
---
# `database-encryption-at-rest-helper`
Blindagem total dos dados dos usuários.
## Regras
1. Criptografe campos sensíveis (CPF, Endereço, Telefones) antes de salvar no DB.
2. Utilize chaves de criptografia armazenadas em um serviço de KMS (Key Management Service).
3. Nunca salve as chaves de descriptografia no mesmo banco que os dados.
