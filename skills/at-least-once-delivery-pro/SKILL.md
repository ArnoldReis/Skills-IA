---
name: at-least-once-delivery-pro
description: Implementa garantias de entrega "At-least-once", assegurando que nenhuma mensagem seja perdida, mesmo que ocorram duplicatas.
---
# `at-least-once-delivery-pro`
Entrega garantida com resiliência contra perdas.
## Regras
1. O consumidor deve enviar um ACK (Acknowledgment) apenas após processar e persistir o resultado da mensagem.
2. Esteja preparado para lidar com reenvios automáticos do broker em caso de timeout do ACK.
3. Combine obrigatoriamente este padrão com a Idempotência no lado do consumidor.
---
