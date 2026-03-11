---
name: backend-domain-event-publisher
description: Publica eventos de domínio ricos seguindo os princípios de Domain-Driven Design (DDD).
---
# `backend-domain-event-publisher`
Sincronização reativa de estados de negócio.
## Regras
1. Publique eventos focados no "O que aconteceu" (Ex: `OrderPaid`, `UserSignedUp`).
2. Não inclua lógica de processamento no publisher; apenas dispare a mensagem.
3. Utilize um buffer local para garantir que os eventos sejam disparados apenas após o commit do banco.
