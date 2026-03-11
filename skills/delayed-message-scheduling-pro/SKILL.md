---
name: delayed-message-scheduling-pro
description: Implementa o agendamento de mensagens para processamento futuro, permitindo retardar a execução de tarefas.
---
# `delayed-message-scheduling-pro`
Execução planejada no tempo certo.
## Regras
1. Utilize um motor de agendamento que suporte atrasos (ex: BullMQ delayed jobs, AWS SQS DelaySeconds).
2. Não utilize loops de espera (`sleep`) no código principal para simular atrasos; isso trava recursos de forma ineficiente.
3. Garanta que o sistema suporte o cancelamento de mensagens agendadas se a condição de negócio mudar antes da execução.
---
