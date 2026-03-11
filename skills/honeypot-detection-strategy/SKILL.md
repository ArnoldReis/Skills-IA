---
name: honeypot-detection-strategy
description: Implementa armadilhas (Honeypots) de baixo custo na aplicação para detectar scans e tentativas de invasão precocemente.
---
# `honeypot-detection-strategy`
Detectando o inimigo antes que ele encontre o alvo real.
## Regras
1. Adicione campos de formulário ocultos (Honeypot fields) que só robôs preencheriam.
2. Crie URLs de "admin" falsas e monitore qualquer acesso a elas para banir IPs suspeitos.
3. Utilize tokens de segredos falsos em comentários do código HTML para detectar raspagem de dados.
---
