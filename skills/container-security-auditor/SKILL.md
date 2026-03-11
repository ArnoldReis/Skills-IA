---
name: container-security-auditor
description: Audita imagens Docker e configurações de runtime de containers buscando privilégios excessivos e softwares inseguros.
---
# `container-security-auditor`
Blindagem para seus microserviços containerizados.
## Regras
1. NUNCA rode containers como `root`; utilize a diretiva `USER` no Dockerfile.
2. Escaneie imagens em busca de CVEs usando Trivy ou Clair.
3. Utilize bases mínimas (ex: Distroless ou Alpine) para reduzir a superfície de ataque.
---
