---
name: sharding-key-selection-logic
description: Define critérios para escolha da chave de Sharding ideal, garantindo distribuição uniforme de dados (sem hotspots).
---
# `sharding-key-selection-logic`
Equilíbrio total na distribuição de dados massivos.
## Regras
1. Escolha chaves com alta cardinalidade para evitar o acúmulo de dados em um único nó (Hotspot).
2. Evite chaves temporais (como IDs sequenciais) se o padrão de acesso for sempre aos dados mais recentes.
3. Utilize Sharding por localidade se o acesso dos usuários for concentrado em regiões geográficas específicas.
---
