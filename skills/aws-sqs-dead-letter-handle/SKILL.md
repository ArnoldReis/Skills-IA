---
name: aws-sqs-dead-letter-handle
description: Gerencia e reprocessa mensagens falhas enviadas para filas de Dead Letter (DLQ) no SQS.
---
# `aws-sqs-dead-letter-handle`
Recuperação inteligente de falhas assíncronas.
## Regras
1. Analise o motivo da falha (Exception) antes de tentar reprocessar a mensagem.
2. Utilize um Redrive Policy para limitar o número de tentativas antes da DLQ.
3. Monitore o tamanho da DLQ para detectar problemas sistemáticos nos consumidores.
