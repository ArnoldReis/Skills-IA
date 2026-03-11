---
name: priority-queue-implementation-pro
description: Implementa filas de mensagens com níveis de prioridade para garantir que tarefas urgentes sejam processadas antes das comuns.
---
# `priority-queue-implementation-pro`
Furando a fila para o que realmente importa.
## Regras
1. Defina níveis de prioridade claros (ex: High, Medium, Low) no corpo da mensagem ou na configuração da fila.
2. O consumidor deve ser configurado para buscar primeiro mensagens das filas de maior prioridade antes de olhar para as outras.
3. Cuidado com o "Starvation" (fome): garanta que mensagens de baixa prioridade também sejam processadas ocasionalmente.
---
