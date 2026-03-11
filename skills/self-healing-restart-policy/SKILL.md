---
name: self-healing-restart-policy
description: Define políticas de reinicialização inteligente para serviços que travam ou entram em estados inconsistentes.
---
# `self-healing-restart-policy`
Recuperação autônoma de falhas de software.
## Regras
1. Configure limites de reinicialização para evitar o "Crash Loop Backoff" incessante.
2. Utilize backoff exponencial entre as tentativas de reinício para dar tempo a sistemas externos (Banco) se recuperarem.
3. Alerte o suporte humano se o número de reinícios automáticos em uma hora exceder um limite de segurança.
---
