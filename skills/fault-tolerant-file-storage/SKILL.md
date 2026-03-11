---
name: fault-tolerant-file-storage
description: Configura sistemas de arquivos distribuídos ou armazenamento em nuvens com alta durabilidade (object store).
---
# `fault-tolerant-file-storage`
Arquivos que nunca desaparecem, mesmo sob falhas de hardware.
## Regras
1. Utilize o conceito de réplicas de dados (ex: 3 réplicas por arquivo) ou "Erasure Coding" para garantir durabilidade.
2. Monitore a integridade dos dados através de somas de verificação (Checksums) periódicas.
3. Escolha provedores que garantam durabilidade de 11 noves (99.999999999%).
---
