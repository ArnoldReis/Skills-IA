---
name: sidecar-container-logic-pro
description: Anexa funcionalidades secundárias (logs, proxy, monitoramento) a um serviço principal sem alterar seu código.
---
# `sidecar-container-logic-pro`
Desacoplamento de responsabilidades transversais via infraestrutura.
## Regras
1. Utilize o Sidecar para gerenciar a segurança da rede (ex: mTLS) e observabilidade (ex: Prometheus exporter).
2. Garanta que o ciclo de vida do Sidecar esteja vinculado ao do container principal.
3. Compartilhe recursos de rede e volumes de disco entre o serviço principal e o Sidecar se necessário.
---
