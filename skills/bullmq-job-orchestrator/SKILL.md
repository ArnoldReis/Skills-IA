---
name: bullmq-job-orchestrator
description: Orquestra filas de trabalho (Background Jobs) e tarefas recorrentes de forma resiliente.
---
# `bullmq-job-orchestrator`
Processamento assíncrono que nunca falha.
## Regras
1. Separe lógica pesada (envio de email, processamento de imagem) da request principal.
2. Implemente estratégias de tentativa (Retries) automáticas.
3. Monitore o estado das filas para evitar gargalos.
