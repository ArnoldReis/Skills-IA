---
name: point-in-time-recovery-pitr
description: Implementa recuperação de ponto no tempo (PITR) usando logs de transação (WAL) para restaurar o estado exato de um banco.
---
# `point-in-time-recovery-pitr`
A máquina do tempo para o estado do seu banco de dados.
## Regras
1. Arquive os logs de transação (Write-Ahead Logs) continuamente para um armazenamento externo durável.
2. Combine o último backup completo com os logs de transação subsequentes para reconstruir o estado até um segundo específico.
3. Utilize este padrão para se recuperar de deleções acidentais ou ataques de ransomware.
---
