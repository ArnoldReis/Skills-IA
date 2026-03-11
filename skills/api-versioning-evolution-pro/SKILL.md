---
name: api-versioning-evolution-pro
description: Gerencia a evolução de APIs através de versionamento (URL, Header, Media Type) para evitar quebra de clientes legados.
---
# `api-versioning-evolution-pro`
Evolução graciosa de interfaces de serviço.
## Regras
1. Utilize versionamento na URL (ex: `/v1/`, `/v2/`) para mudanças que quebrem a compatibilidade.
2. Implemente políticas de depreciação (Sunset) claras para versões antigas da API.
3. Utilize Headers (ex: `Accept-Version`) se preferir manter as URLs limpas e focar em negociação de conteúdo.
---
