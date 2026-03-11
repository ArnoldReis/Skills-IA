---
name: rate-limiting-leaky-bucket
description: Implementa o algoritmo Leaky Bucket para suavizar picos de tráfego, processando requisições em uma taxa constante.
---
# `rate-limiting-leaky-bucket`
Estabilidade e fluxo constante no processamento de requisições.
## Regras
1. Imagine uma fila (balde) que aceita entradas irregulares, mas "vaza" processamento em uma velocidade fixa.
2. Útil para APIs que precisam garantir que o sistema de backend nunca receba mais do que X requisições por segundo.
3. Descarte requisições novas se o balde estiver cheio (transbordamento).
---
