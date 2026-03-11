---
name: api-versioning-handler
description: Gerencia diferentes versões da API (v1, v2) de forma transparente para manter retrocompatibilidade.
---
# `api-versioning-handler`
Evolução da API sem quebrar os clientes legados.
## Regras
1. Utilize versionamento via URL path (ex: `/v1/`) ou Headers.
2. Mantenha suporte a versões antigas conforme política de depreciação.
3. Transforme dados entre versões usando adaptadores.
