---
name: serverless-application-design-pro
description: Projeta aplicações otimizadas para ambientes Serverless, focando em execução rápida, baixo custo e escalabilidade infinita.
---
# `serverless-application-design-pro`
Eficiência econômica e operacional sem gerenciar servidores.
## Regras
1. Minimize o segredo de inicialização (Cold Start) mantendo o pacote de código pequeno e dependências leves.
2. Utilize "Step Functions" ou orquestradores similares para fluxos de trabalho que durem mais que o tempo limite da função (ex: 15min).
3. Prefira o modelo de "Event-First", onde cada pequena ação desencadeia uma execução específica.
---
