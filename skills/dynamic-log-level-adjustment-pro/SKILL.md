---
name: dynamic-log-level-adjustment-pro
description: Permite ajustar o nível de log (DEBUG, INFO, ERROR) de instâncias rodando em produção sem reiniciar o serviço.
---
# `dynamic-log-level-adjustment-pro`
X-Ray sob demanda para momentos de crise em produção.
## Regras
1. Mantenha o nível de log padrão em `INFO` ou `WARN` para evitar ruído e excesso de custos de armazenamento.
2. Implemente um endpoint administrativo protegido que altere o nível do logger da instância em tempo real.
3. Reverte automaticamente para o nível original após um período (ex: 30min) para evitar esquecer o modo Verbose ligado.
---
