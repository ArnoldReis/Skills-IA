---
name: message-versioning-compatibility
description: Implementa estratégias de versionamento de mensagens (Schema Evolution) para garantir que produtores e consumidores em diferentes versões coexistam.
---
# `message-versioning-compatibility`
Evolução segura de contratos de dados em movimento.
## Regras
1. Utilize o padrão `Copy-on-Write` ou adicione campos como opcionais para manter a compatibilidade com consumidores antigos (Backward Compatibility).
2. Inclua um campo `version` em todos os envelopes de mensagem para que o consumidor saiba como interpretar o payload.
3. Utilize um Schema Registry (ex: Confluent Schema Registry) para validar as mensagens antes da publicação e consumo.
---
