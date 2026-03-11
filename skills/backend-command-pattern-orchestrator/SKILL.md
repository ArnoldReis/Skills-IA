---
name: backend-command-pattern-orchestrator
description: Implementa o padrão de design Command para encapsular pedidos como objetos, permitindo undo/redo e log.
---
# `backend-command-pattern-orchestrator`
Lógica de negócio desacoplada e audível.
## Regras
1. Cada comando deve ter um método `execute()` e opcionalmente `undo()`.
2. Garanta que o comando receba todas as suas dependências no construtor.
3. Utilize um orquestrador para gerenciar o histórico de comandos executados.
