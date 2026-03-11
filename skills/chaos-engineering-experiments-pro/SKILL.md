---
name: chaos-engineering-experiments-pro
description: Executa experimentos controlados de falha para testar a resiliência do sistema diante de imprevistos em produção.
---
# `chaos-engineering-experiments-pro`
Fortalecendo o sistema através da exposição controlada ao caos.
## Regras
1. Comece com experimentos pequenos e controlados (ex: derrubar uma única instância de um serviço replicado).
2. Tenha sempre um botão de "Abortar" que restaura o sistema ao estado normal instantaneamente se o experimento sair do controle.
3. Garanta que o experimento tenha um "Raio de Explosão" (Blast Radius) limitado para não impactar usuários reais drasticamente.
---
