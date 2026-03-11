---
name: paging-policy-automation
description: Implementa fluxos de escalonamento e rodízio de plantão (On-call) para garantir que alertas cheguem às pessoas certas.
---
# `paging-policy-automation`
Garantindo a entrega do alerta crítico ao engenheiro responsável.
## Regras
1. Utilize rodízios semanais (On-call rotations) para distribuir a responsabilidade de plantão de forma justa entre o time.
2. Configure níveis de escalonamento: se o primário não responder em 15min, acione o secundário (Shadow).
3. Integre com ferramentas como PagerDuty ou Opsgenie para acionamento via telefone, SMS ou notificação push.
---
