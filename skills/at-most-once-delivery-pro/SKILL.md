---
name: at-most-once-delivery-pro
description: Implementa garantias de entrega "At-most-once", onde mensagens podem ser perdidas mas nunca são processadas em duplicidade.
---
# `at-most-once-delivery-pro`
Performance sobre precisão absoluta.
## Regras
1. Envie a mensagem e não aguarde confirmação de processamento ou receba a mensagem e confirme antes de processar.
2. Utilize este padrão para dados não críticos onde a velocidade é prioritária (ex: métricas de monitoramento, logs secundários).
3. Saiba que interrupções de rede ou quedas do worker resultarão em perda irreversível da mensagem.
---
