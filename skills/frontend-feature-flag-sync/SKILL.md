---
name: frontend-feature-flag-sync
description: Gerencia e sincroniza Feature Flags (Flags de Funcionalidade) em tempo real no frontend.
---
# `frontend-feature-flag-sync`
Controle granular de experimentos e lançamentos.
## Regras
1. Envolva novas features em condicionais baseadas nas flags.
2. Suporte para ativação remota sem necessidade de novo deploy.
3. Implemente fallbacks seguros caso o serviço de flags esteja offline.
