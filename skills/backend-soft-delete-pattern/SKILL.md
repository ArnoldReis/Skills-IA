---
name: backend-soft-delete-pattern
description: Implementa exclusão lógica (Soft Delete) para permitir recuperação de dados e manter integridade histórica.
---
# `backend-soft-delete-pattern`
Segurança contra exclusões acidentais.
## Regras
1. Utilize o campo `deletedAt` (null por padrão) em vez de deletar a linha.
2. Filtre automaticamente registros "deletados" em todas as consultas de leitura.
3. Forneça uma rota de "Lixeira" para restaurar ou limpar permanentemente.
