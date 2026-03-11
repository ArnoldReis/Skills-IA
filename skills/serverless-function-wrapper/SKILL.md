---
name: serverless-function-wrapper
description: Abstração para executar lógica de backend em ambientes Serverless (AWS Lambda, Vercel Functions).
---
# `serverless-function-wrapper`
Portabilidade total entre Cloud e Local.
## Regras
1. Otimize o tempo de inicialização (Cold Start) reduzindo dependências pesadas.
2. Utilize variáveis de ambiente para segredos.
3. Garanta que a função seja idempotente (pode ser executada várias vezes).
