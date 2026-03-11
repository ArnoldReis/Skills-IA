---
name: api-throttling-leaky-bucket
description: Implementa o algoritmo Leaky Bucket para suavizar picos de tráfego e garantir fluxo constante.
---
# `api-throttling-leaky-bucket`
Estabilidade total mesmo sob estresse de rede.
## Regras
1. Processe requisições em uma taxa fixa (Vazão) independente da entrada.
2. Rejeite requisições novas se o "balde" estiver cheio (Fila lotada).
3. Utilize para chamadas que consomem muitos recursos computacionais.
