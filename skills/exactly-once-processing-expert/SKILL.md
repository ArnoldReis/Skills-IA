---
name: exactly-once-processing-expert
description: Implementa a semântica "Exactly-once", garantindo que cada mensagem seja processada exatamente uma vez, sem perdas ou duplicatas.
---
# `exactly-once-processing-expert`
O santo graal da mensageria distribuída.
## Regras
1. Utilize transações atômicas que englobam a leitura da mensagem, o processamento e o commit da mensagem no broker.
2. Utilize brokers que suportam nativamente semânticas transacionais (ex: Kafka Transactions).
3. Garanta que o estado resultante seja imutável ou protegido por chaves de idempotência únicas por ID de mensagem original.
---
