---
name: data-lake-s3-partitioning-pro
description: Define estratégias de particionamento e organização de arquivos (Parquet/JSON) no S3 para Data Lakes eficientes.
---
# `data-lake-s3-partitioning-pro`
Buscas rápidas em escala de Petabytes.
## Regras
1. Utilize o padrão `year=YYYY/month=MM/day=DD` para particionamento temporal.
2. Utilize o formato Parquet para compressão colunar e redução de custos de scan.
3. Utilize o AWS Glue ou Athena para catalogar e consultar os dados.
