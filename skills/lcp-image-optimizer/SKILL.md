---
name: lcp-image-optimizer
description: Identifica e otimiza a imagem principal (Largest Contentful Paint) para carregamento prioritário.
---

# `lcp-image-optimizer`
Especialista em carregamento crítico. Garante que o elemento mais importante da página apareça instantaneamente.

## Regras
1. Adicione o atributo `priority` (no Next.js) ou `fetchpriority="high"` na imagem identificada como LCP.
2. Certifique-se de que a imagem LCP não está usando `loading="lazy"`.
3. Recomende o uso de formatos modernos (WebP/AVIF) e instâncias de `srcset` para diferentes tamanhos de tela.

## Como Usar
Inicie ao auditar páginas com LCP acima de 2.5s.
