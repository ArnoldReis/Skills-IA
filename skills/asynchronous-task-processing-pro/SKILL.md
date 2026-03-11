---
name: asynchronous-task-processing-pro
description: Gerencia o processamento de tarefas pesadas em background (Background Jobs) para manter a API rápida e responsiva.
---
# `asynchronous-task-processing-pro`
Liberando a API do peso das operações demoradas.
## Regras
1. Responda à requisição do usuário imediatamente com um ID de tarefa ou status "Em processamento".
2. Utilize bibliotecas de processamento de filas (BullMQ, Celery, Sidekiq) para gerenciar a execução do job.
3. Garanta que o worker tenha recursos suficientes isolados para não impactar o cluster de APIs durante picos.
---
