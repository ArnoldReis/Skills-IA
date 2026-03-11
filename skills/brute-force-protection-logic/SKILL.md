---
name: brute-force-protection-logic
description: Implementa bloqueios temporários, delay exponencial e CAPTCHA para proteger logins contra ataques de força bruta.
---
# `brute-force-protection-logic`
Prevenindo a exaustão de senhas através de tentativas massivas.
## Regras
1. Implemente um delay incremental (Exponential Backoff) entre tentativas falhas.
2. Bloqueie temporariamente contas (Account Lockout) após X tentativas consecutivas erradas.
3. Monitore IPs que tentam logar em múltiplas contas simultaneamente.
---
