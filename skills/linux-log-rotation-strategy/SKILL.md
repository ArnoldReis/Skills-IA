---
name: linux-log-rotation-strategy
description: Gerencia o ciclo de vida dos arquivos de log via logrotate para evitar exaustão de disco.
---
# `linux-log-rotation-strategy`
Manutenção automatizada de espaço em disco.
## Regras
1. Realize rotação diária para logs de alto tráfego.
2. Comprima logs antigos com gzip para economizar espaço.
3. Mantenha um histórico de pelo menos 14 dias para auditoria rápida.
