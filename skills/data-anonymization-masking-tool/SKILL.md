---
name: data-anonymization-masking-tool
description: Aplica técnicas de anonimização e mascaramento de dados sensíveis (PII) para conformidade com a LGPD/GDPR.
---
# `data-anonymization-masking-tool`
Dados seguros para ambientes de teste e analíticos.
## Regras
1. Mascare emails (ex: a***@domain.com) e CPFs em logs e telas.
2. Utilize hashing (SHA-256 com salt) para Ids sensíveis que ainda precisam ser vinculados.
3. Substitua dados sensíveis em dumps de produção por dados fakes gerados aleatoriamente.
