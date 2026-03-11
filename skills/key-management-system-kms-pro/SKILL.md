---
name: key-management-system-kms-pro
description: Domina o uso de Key Management Systems (AWS KMS, Google Cloud KMS) para gerenciar o ciclo de vida de chaves criptográficas.
---
# `key-management-system-kms-pro`
Governança soberana sobre as chaves do reino digital.
## Regras
1. Nunca exporte chaves privadas do KMS; realize as operações criptográficas dentro do próprio serviço através de APIs.
2. Utilize políticas de chave (Key Policies) para restringir quem pode usar cada chave (ex: apenas o microserviço X).
3. Habilite o log de acesso às chaves (CloudTrail) para auditar cada uso de criptografia/descriptografia.
---
