---
name: dockerfile-multi-stage-optimization
description: Otimiza Dockerfiles usando Multi-stage builds para reduzir o tamanho da imagem e aumentar a segurança.
---
# `dockerfile-multi-stage-optimization`
Imagens leves, seguras e rápidas de baixar.
## Regras
1. Utilize uma imagem de build pesada e uma imagem de runtime ultra-leve (ex: Alpine ou Distroless).
2. Limpe caches de gerenciadores de pacotes (npm, apt) em cada camada.
3. Não inclua segredos ou chaves SSH nas camadas finais da imagem.
