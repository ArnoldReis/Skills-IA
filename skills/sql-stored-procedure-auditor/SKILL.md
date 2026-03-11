---
name: sql-stored-procedure-auditor
description: Audita lógicas de negócio em Stored Procedures e Triggers em busca de bugs ocultos e performance degradada.
---
# `sql-stored-procedure-auditor`
Lógica de banco de dados limpa e testável.
## Regras
1. Minimize o uso de lógica complexa dentro do banco (prefira o código da aplicação).
2. Verifique se as procedures utilizam cursores de forma eficiente (ou se podem disparar operações em lote).
3. Documente cada procedure com entradas, saídas e efeitos colaterais.
