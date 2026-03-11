---
name: mongodb-transaction-handler-pro
description: Implementa transações multi-documento de forma segura e atômica no MongoDB (ACID).
---
# `mongodb-transaction-handler-pro`
Atomicidade garantida em bancos de documentos.
## Regras
1. Utilize sessões (`ClientSession`) para agrupar operações transacionais.
2. Implemente lógica de retry em caso de `TransientTransactionError`.
3. Mantenha as transações curtas para evitar o bloqueio massivo de recursos.
