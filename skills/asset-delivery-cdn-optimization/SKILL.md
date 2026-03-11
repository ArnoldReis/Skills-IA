---
name: asset-delivery-cdn-optimization
description: Otimiza a entrega de arquivos estáticos (JS, CSS, Imagens) através de CDNs focando em compressão e Edge Caching.
---
# `asset-delivery-cdn-optimization`
Entregando o frontend na velocidade da luz para o mundo todo.
## Regras
1. Utilize formatos modernos como WebP/Avif para imagens e implemente compressão Brotli/Gzip extrema.
2. Utilize "Cache-Control: immutable" e hashes no nome do arquivo para permitir cache infinito no navegador do usuário.
3. Implemente a estratégia de "Stale-While-Revalidate" na CDN para garantir que o usuário nunca espere por um asset novo.
---
