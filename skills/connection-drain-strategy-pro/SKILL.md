---
name: connection-drain-strategy-pro
description: Esvazia gradualmente as conexões ativas de um nó de servidor antes de retirá-lo do balanceador para manutenção.
---
# `connection-drain-strategy-pro`
Manutenção de infraestrutura sem impacto para o tráfego ativo.
## Regras
1. Informe ao balanceador de carga que o nó está saindo (`DRAINING` mode).
2. Não abra novas conexões; permita que as antigas expirem naturalmente conforme os clientes finalizam.
3. Configure um timeout de drenagem (ex: 300s) para forçar o encerramento de conexões persistentes teimosas.
---
