---
name: cloud-resource-tagging-enforcer
description: Garante que todos os recursos Cloud (AWS/GCP/Azure) possuam as tags obrigatórias via política de governança.
---
# `cloud-resource-tagging-enforcer`
Organização, controle de custos e governança total.
## Regras
1. Tags obrigatórias: `CostCenter`, `Environment`, `Owner`, `Project`.
2. Bloqueie a criação de recursos sem as tags mínimas via SCP (AWS) ou Políticas.
3. Normalize o formato das tags (ex: sempre minúsculas).
