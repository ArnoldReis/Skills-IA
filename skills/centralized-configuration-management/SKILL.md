---
name: centralized-configuration-management
description: Implementa o gerenciamento centralizado de configurações (Config Server) para garantir consistência entre múltiplos serviços.
---
# `centralized-configuration-management`
Configurações unificadas e seguras para toda a sua frota de serviços.
## Regras
1. Mantenha as configurações fora do código e fora da imagem do contêiner para permitir mudanças rápidas sem re-deploy.
2. Utilize versionamento para as configurações (ex: via Git) para permitir rastreabilidade e rollbacks rápidos.
3. Criptografe segredos (API Keys, DB Passwords) em repouso e exija autenticação para acessar os valores sensíveis.
---
