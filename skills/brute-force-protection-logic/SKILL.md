---
name: brute-force-protection-logic
description: Implementa bloqueios temporários e desafios (Captcha) após múltiplas tentativas de login falhas.
---
# `brute-force-protection-logic`
Desacelerando o atacante até que o ataque se torne inviável.
## Regras
1. Bloqueie o IP ou a conta do usuário após X tentativas falhas em um curto intervalo de tempo.
2. Utilize "Exponential Backoff" para aumentar progressivamente o tempo de espera entre tentativas sucessivas.
3. Notifique o usuário via e-mail sobre múltiplas tentativas falhas em sua conta para que ele possa agir.
---
