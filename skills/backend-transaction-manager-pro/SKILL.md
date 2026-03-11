---
name: backend-transaction-manager-pro
description: Orquestra transações complexas através de múltiplos serviços ou tabelas, garantindo ACID.
---
# `backend-transaction-manager-pro`
Consistência de dados absoluta.
## Regras
1. Utilize o padrão `Saga` para transações distribuídas entre microserviços.
2. Inicie transações explicitamente apenas quando necessário para evitar travar o banco.
3. Implemente limpeza automática em caso de Rollback parcial.
