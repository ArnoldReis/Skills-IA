---
name: vector-database-scaling-and-tuning
description: Ajusta parâmetros de bancos de dados vetoriais (HNSW, IVF-Flat) para equilibrar precisão de busca e velocidade de resposta.
---
# `vector-database-scaling-and-tuning`
Escalando bilhões de vetores com performance de milissegundos.
## Regras
1. Utilize o índice **HNSW** para máxima velocidade em detrimento de um pouco mais de memória RAM.
2. Comprima os vetores usando "Product Quantization" (PQ) para economizar até 90% de espaço em disco em bases massivas.
3. Monitore o "Recall" (taxa de acerto) após cada atualização de índice para garantir que a qualidade da busca não caiu.
---
