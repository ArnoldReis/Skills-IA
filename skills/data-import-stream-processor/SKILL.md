---
name: data-import-stream-processor
description: Processa a importação massiva de dados usando streams para manter o uso de memória baixo e estável.
---
# `data-import-stream-processor`
Importação eficiente de gigabytes de dados.
## Regras
1. Nunca leia o arquivo inteiro para a memória (`readFileSync` é proibido).
2. Processe em pedaços (Chunks) ou linha por linha (Pipeline).
3. Utilize backpressure para evitar que o banco receba mais dados do que pode processar.
