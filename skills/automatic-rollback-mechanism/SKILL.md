---
name: automatic-rollback-mechanism
description: Implementa a reversão automática de deploys que falham nos testes de saúde iniciais ou degradam métricas críticas.
---
# `automatic-rollback-mechanism`
O "freio de emergência" automático para seu pipeline de deploy.
## Regras
1. Monitore métricas de saúde (Health Checks) nos primeiros 5-10 minutos após o deploy de uma nova versão.
2. Recomponha a versão anterior (Rollback) imediatamente se a taxa de erro subir ou se o processo crashar repetidamente.
3. Interrompa a promoção do tráfego para a nova versão ao detectar a menor anomalia.
---
