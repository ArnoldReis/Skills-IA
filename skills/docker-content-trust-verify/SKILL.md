---
name: docker-content-trust-verify
description: Habilita e força a verificação de assinaturas de imagens Docker para garantir a integridade dos artefatos.
---
# `docker-content-trust-verify`
Segurança na origem das imagens de container.
## Regras
1. Utilize o `DOCKER_CONTENT_TRUST=1` para impedir o pull de imagens não assinadas.
2. Assine suas próprias imagens no pipeline de CI usando o Notary.
3. Verifique se o registro suporta DCT antes de tentar o push assinado.
