---
name: security-patch-automation-logic
description: Automatiza o deploy de patches de segurança e atualizações de kernel críticos, minimizando a janela de exposição.
---
# `security-patch-automation-logic`
Imunidade rápida contra vulnerabilidades recém-descobertas (Day-Zero).
## Regras
1. Utilize o `Unattended-Upgrades` em Linux para aplicar patches de segurança sem intervenção manual.
2. Aplique patches primeiro em um grupo de servidores de teste (Canary Deployment) para evitar regressões.
3. Reinicie serviços ou sistemas quando o patch exigir atualização de kernel, agendando para janelas de manutenção.
---
