---
name: mysql-binlog-analyzer-pro
description: Analisa os logs binários (Binlog) do MySQL para recuperação de dados pontual e auditoria de mudanças.
---
# `mysql-binlog-analyzer-pro`
Máquina do tempo e auditoria para seu banco MySQL.
## Regras
1. Utilize o comando `mysqlbinlog` para converter logs binários em SQL legível.
2. Configure o formato `ROW` para garantir que o binlog contenha os dados exatos de cada linha alterada.
3. Monitore o espaço em disco ocupado pelos binlogs e configure a purga automática (`expire_logs_days`).
