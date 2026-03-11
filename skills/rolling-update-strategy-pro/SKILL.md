---
name: rolling-update-strategy-pro
description: Implementa atualizações em rolo (Rolling Updates) para atualizar instâncias uma a uma sem indisponibilidade.
---
# `rolling-update-strategy-pro`
Atualização incremental sem tirar o serviço do ar.
## Regras
1. Defina o `maxUnavailable` e `maxSurge` no Kubernetes para controlar a agressividade da atualização.
2. Utilize "Readiness Probes" robustas para que o tráfego só seja enviado para a nova versão quando ela estiver pronta.
3. Garanta que a aplicação suporte rodar em versões mistas (V1 e V2 simultaneamente) durante a transição.
---
