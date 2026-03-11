---
name: docker-compose-local-dev-sync
description: Sincroniza o ambiente de desenvolvimento local usando Docker Compose para espelhar a produção.
---
# `docker-compose-local-dev-sync`
Ambientes idênticos do dev ao prod.
## Regras
1. Utilize volumes para Hot Reload do código fonte.
2. Configure redes internas para que os containers se comuniquem via nomes de serviço.
3. Utilize arquivos `.env` para gerenciar configurações locais vs cloud.
