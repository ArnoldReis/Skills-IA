---
name: mongodb-aggregation-pipeline-master
description: Domina o pipeline de agregação do MongoDB para transformações complexas de dados no lado do servidor.
---
# `mongodb-aggregation-pipeline-master`
Processamento de dados massivo direto no banco.
## Regras
1. Filtre os dados o mais cedo possível usando `$match` para reduzir o volume de documentos.
2. Utilize `$project` para retornar apenas os campos necessários.
3. Utilize `$lookup` para realizar "joins" entre coleções com cautela em relação à performance.
