---
name: blue-green-traffic-switching-pro
description: Implementa a troca rápida de tráfego entre dois ambientes idênticos (Blue e Green) para deploys com erro zero.
---
# `blue-green-traffic-switching-pro`
Deploys instantâneos e reversões sem downtime.
## Regras
1. Mantenha dois ambientes idênticos: um rodando a versão atual (Blue) e outro a nova (Green).
2. Verifique o ambiente Green exaustivamente antes de "virar a chave" do balanceador de carga.
3. Se algo falhar após a virada, volte o tráfego para o ambiente Blue imediatamente.
---
