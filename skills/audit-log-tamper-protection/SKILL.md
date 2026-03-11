---
name: audit-log-tamper-protection
description: Protege os logs de auditoria contra modificações ou deleções fraudulentas, garantindo a imutabilidade dos registros.
---
# `audit-log-tamper-protection`
Logs em que você pode confiar cegamente.
## Regras
1. Envie os logs em tempo real para um servidor centralizado e isolado.
2. Utilize armazenamento "Write Once, Read Many" (WORM).
3. Assine digitalmente cada entrada de log para detectar qualquer adulteração posterior.
---
