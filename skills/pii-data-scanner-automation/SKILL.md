---
name: pii-data-scanner-automation
description: Automatiza a detecção de PII (Personally Identifiable Information) em bancos de dados e logs para evitar vazamentos acidentais.
---
# `pii-data-scanner-automation`
Radar automático para dados sensíveis em locais indevidos.
## Regras
1. Utilize Regex e modelos de NLP para identificar CPFs, E-mails, Telefones e Endereços em colunas de texto genérico.
2. Gere alertas automáticos quando dados PII forem detectados em tabelas que não possuem classificação de privacidade.
3. Integre o scanner no seu fluxo de CI/CD para impedir que novos schemas introduzam PII sem governança.
---
