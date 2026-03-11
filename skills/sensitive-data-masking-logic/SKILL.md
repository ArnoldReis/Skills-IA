---
name: sensitive-data-masking-logic
description: Implementa máscaras de dados automáticas em logs e interfaces para proteger PII (Informações de Identificação Pessoal).
---
# `sensitive-data-masking-logic`
Escondendo o que não deve ser visto por humanos ou sistemas de log.
## Regras
1. Mascare campos sensíveis como cartões de crédito (ex: `**** 1234`) e CPFs no momento da serialização para logs ou telas.
2. Utilize "Data Redaction" agressivo em ferramentas de Observabilidade para evitar que segredos vazem para o Datadog/Grafana.
3. Nunca mascare os dados no banco de dados se eles precisarem ser processados na sua forma original; a máscara é para a camada de visualização/log.
---
