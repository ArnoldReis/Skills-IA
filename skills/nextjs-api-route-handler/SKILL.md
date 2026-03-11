---
name: nextjs-api-route-handler
description: Padroniza o tratamento de requisições e respostas em API Routes do Next.js.
---
# `nextjs-api-route-handler`
Simplifica a criação de endpoints seguros e tipados.
## Regras
1. Valide o body da requisição usando Zod antes de processar lógica de negócio.
2. Utilize Try/Catch global para retornar Status 500 em caso de erro não tratado.
3. Configure headers de CORS e Cache seguindo as melhores práticas.
