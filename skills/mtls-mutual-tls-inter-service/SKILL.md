---
name: mtls-mutual-tls-inter-service
description: Implementa TLS mútuo (mTLS) para garantir autenticação e criptografia forte em ambos os lados da comunicação entre serviços.
---
# `mtls-mutual-tls-inter-service`
Confiança zero e criptografia total na rede interna.
## Regras
1. Exija que tanto o cliente quanto o servidor apresentem certificados digitais válidos assinados por uma CA confiável.
2. Utilize rotação automática de certificados para minimizar o impacto em caso de comprometimento de chaves privadas.
3. Desabilite qualquer fallback para conexões não-criptografadas entre microserviços em produção.
---
