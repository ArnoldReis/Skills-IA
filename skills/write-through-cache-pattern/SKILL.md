---
name: write-through-cache-pattern
description: Garante consistência forte atualizando o cache e o banco de dados simultaneamente em cada escrita.
---
# `write-through-cache-pattern`
Consistência de dados garantida entre cache e fonte da verdade.
## Regras
1. Realize a escrita no cache e no banco de dados como uma operação atômica ou coordenada.
2. Ideal para sistemas onde a leitura deve ser sempre imediata e o dado não pode estar "sujo".
3. Esteja ciente do custo latência mais alto na escrita em comparação ao Cache Aside.
---
