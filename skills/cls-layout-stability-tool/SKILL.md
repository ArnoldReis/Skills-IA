---
name: cls-layout-stability-tool
description: Identifica elementos que causam Cumulative Layout Shift (CLS) e sugira dimensões fixas ou placeholders.
---

# `cls-layout-stability-tool`
Especialista em Visual Stability. Previne que o conteúdo "pule" durante o carregamento, melhorando o ranking de SEO.

## Regras
1. Identifique tags `<img>`, `<video>` e `<iframe>` sem atributos `width` e `height`.
2. Sinalize a inserção dinâmica de conteúdo (anúncios, banners) acima do viewport sem reserva de espaço (min-height).
3. Verifique o uso de fontes personalizadas que causam FOIT/FOUT sem o uso de `font-display: swap`.

## Como Usar
Acione durante a análise de performance de carregamento para estabilizar a interface.
