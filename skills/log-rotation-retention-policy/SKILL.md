---
name: log-rotation-retention-policy
description: Gerencia políticas de rotação e retenção de logs para equilibrar a necessidade histórica com o custo de armazenamento.
---
# `log-rotation-retention-policy`
Higiene de dados em larga escala para sistemas de log.
## Regras
1. Rotacione logs por tamanho (ex: 100MB) ou por tempo (ex: a cada 24h) para evitar arquivos gigantes impossíveis de abrir.
2. Mantenha logs "quentes" (acessíveis instantaneamente) por 7-14 dias e mova para "Cold Storage" (S3/Glacier) após esse período.
3. Exclua permanentemente logs após o período legal de retenção requerido pela sua indústria.
---
