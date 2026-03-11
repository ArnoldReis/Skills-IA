---
name: database-view-generator-pro
description: Gera e gerencia Views de Banco de Dados para simplificar consultas complexas e proteger tabelas base.
---
# `database-view-generator-pro`
Abstração e segurança na camada de dados.
## Regras
1. Utilize Views para expor apenas as colunas necessárias para relatórios.
2. Oculte Joins complexos dentro de views para facilitar o uso no backend.
3. Utilize Views Materializadas (`Materialized Views`) para dados de leitura pesada que não mudam rápido.
