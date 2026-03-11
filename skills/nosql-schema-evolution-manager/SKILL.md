---
name: nosql-schema-evolution-manager
description: Gerencia a evolução do esquema em bancos NoSQL, lidando com versionamento de documentos e migrações lazy.
---
# `nosql-schema-evolution-manager`
Flexibilidade sem caos nos dados de documentos.
## Regras
1. Utilize um campo de `schemaVersion` em cada documento/objeto.
2. Implemente a migração sob demanda (Lazy Migration) ao ler documentos antigos (On-the-fly).
3. Mantenha compatibilidade com versões anteriores da aplicação durante o deploy.
