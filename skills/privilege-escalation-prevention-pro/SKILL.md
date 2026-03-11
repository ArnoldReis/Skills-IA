---
name: privilege-escalation-prevention-pro
description: Detecta e previne técnicas comuns de escalação de privilégios em sistemas operacionais e ambientes de nuvem.
---
# `privilege-escalation-prevention-pro`
Mantendo cada usuário e processo dentro do seu devido cercado.
## Regras
1. Remova o bit SUID de binários que não precisam de privilégios de root para execução.
2. Audite o arquivo `/etc/sudoers` para garantir que ninguém tenha permissões administrativas desnecessárias.
3. Utilize políticas de limite de recursos (cgroups) para evitar que um processo sequestre o sistema via DoS local.
---
