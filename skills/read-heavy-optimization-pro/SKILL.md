---
name: read-heavy-optimization-pro
description: Otimiza sistemas com alto volume de consulta usando índices avançados, caches multi-camada e projeções.
---
# `read-heavy-optimization-pro`
Buscas instantâneas mesmo sob cargas de leitura extremas.
## Regras
1. Utilize índices de cobertura (Covering Indexes) para que o banco não precise ler as linhas do disco se os dados estiverem no índice.
2. Implemente caches de múltiplas camadas: Local (L1) -> Distribuído (L2, Redis) -> Database (L3).
3. Utilize View Materialized ou projeções desnormalizadas para evitar JOINS complexos em tempo de execução.
---
