---
name: traffic-mirroring-shadow-traffic
description: Implementa o espelhamento de tráfego (Shadow Traffic) para testar novas versões com tráfego real sem impactar o usuário final.
---
# `traffic-mirroring-shadow-traffic`
Testes em produção com 100% de precisão e 0% de risco.
## Regras
1. Duplique o tráfego de entrada e envie uma cópia para a versão de teste (Shadow instance).
2. Ignore as respostas do ambiente Shadow; os resultados não devem ser retornados ao usuário nem persistidos no banco de dados "Vivo".
3. Compare as respostas e métricas do Shadow com o ambiente estável para validar correções e performance silenciosamente.
---
