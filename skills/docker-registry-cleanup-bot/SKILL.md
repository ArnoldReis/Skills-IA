---
name: docker-registry-cleanup-bot
description: Automatiza a limpeza de imagens antigas e não utilizadas (Dangling) no Docker Registry.
---
# `docker-registry-cleanup-bot`
Economia de espaço e organização no repositório de imagens.
## Regras
1. Deleta imagens sem tags (Dangling) que não são mais referenciadas.
2. Mantenha as últimas 10 versões de cada serviço para Rollbacks.
3. Não delete imagens usadas atualmente nos ambientes de produção ou staging.
