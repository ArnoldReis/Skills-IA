---
name: saga-pattern-choreography
description: Implementa transações distribuídas onde os serviços trocam eventos entre si para coordenar o fluxo sem um ponto central.
---
# `saga-pattern-choreography`
Coordenação de transações distribuídas via coreografia de eventos.
## Regras
1. Cada serviço deve saber qual evento reagir e qual evento disparar após concluir sua parte.
2. Utilize este padrão para fluxos simples com poucos serviços para evitar a complexidade do orquestrador.
3. Monitore o fluxo através de IDs de correlação para conseguir rastrear o estado da transação na malha.
---
