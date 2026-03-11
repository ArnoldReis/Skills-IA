---
name: secure-password-hashing-argon2
description: Implementa funções de hash de senha resistentes a ataques de força bruta e GPU usando Argon2 ou BCrypt.
---
# `secure-password-hashing-argon2`
Garantindo que senhas vazadas continuem inúteis para atacantes.
## Regras
1. Utilize Argon2id como a primeira escolha devido à sua resistência a ataques de memória e paralelismo.
2. Adicione sempre um "Salt" aleatório único por usuário para evitar ataques de Tabela Rainbow.
3. Ajuste o custo computacional (iterações/memória) para que cada hash demore ~100-300ms para ser gerado.
---
