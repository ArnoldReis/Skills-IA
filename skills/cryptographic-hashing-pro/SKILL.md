---
name: cryptographic-hashing-pro
description: Utiliza algoritmos de hashing seguros (Argon2, bcrypt) para armazenamento de senhas e verificação de integridade.
---
# `cryptographic-hashing-pro`
Transformação irreversível e segura de dados sensíveis.
## Regras
1. Utilize Argon2id como primeira escolha para senhas; bcrypt como segunda.
2. Nunca utilize MD5 ou SHA1 para fins de segurança (são vulneráveis a colisões).
3. Utilize um `Salt` único para cada senha para inviabilizar o uso de Rainbow Tables.
---
