---
name: data-at-rest-encryption-manager
description: Gerencia algoritmos e políticas de criptografia para dados persistentes em discos, buckets e volumes.
---
# `data-at-rest-encryption-manager`
Garantia de que dados roubados fisicamente sejam inúteis.
## Regras
1. Utilize o padrão AES-256-GCM para criptografia de alta performance e integridade de dados.
2. Garanta que cada volume de dados possua uma chave exclusiva e rotacionável.
3. Valide se os serviços gerenciados (S3, RDS, EBS) estão com a flag de criptografia habilitada por padrão.
---
