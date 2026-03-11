---
name: webhook-receiver-signature-verify
description: Valida a integridade e a origem de Webhooks recebidos através de assinaturas criptográficas (HMAC).
---
# `webhook-receiver-signature-verify`
Confiança total em dados vindos de terceiros.
## Regras
1. Verifique a assinatura no cabeçalho antes de processar qualquer lógica.
2. Utilize um segredo compartilhado (secret) único por integração.
3. Proteja contra ataques de Replay verificando timestamps.
