---
name: s3-bucket-security-checker
description: Monitora e valida configurações de segurança de Buckets S3 para evitar vazamento de dados públicos.
---
# `s3-bucket-security-checker`
Proteção total contra buckets "abertos".
## Regras
1. Verifique se o `Block Public Access` está habilitado globalmente.
2. Identifique se o bucket possui criptografia (SSE-S3 ou SSE-KMS) forçada.
3. Monitore políticas de ciclo de vida para deletar dados antigos automaticamente.
