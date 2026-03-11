---
name: dead-letter-queue-dlq-strategy
description: Define estratégias para lidar com mensagens que falham no processamento repetidamente, movendo-as para uma fila de análise (DLQ).
---
# `dead-letter-queue-dlq-strategy`
O cemitério organizado para mensagens problemáticas.
## Regras
1. Não deixe mensagens com erro bloquearem a fila principal (Head-of-the-line blocking).
2. Mova a mensagem para a DLQ após um número definido de tentativas de reprocessamento falhas.
3. Monitore o tamanho da DLQ; alertas de DLQ crescendo indicam bugs sistêmicos ou mudanças de dados inesperadas.
---
