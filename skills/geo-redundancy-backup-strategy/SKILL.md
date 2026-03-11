---
name: geo-redundancy-backup-strategy
description: Implementa estratégias de backup distribuídos geograficamente para sobreviver a desastres de larga escala em data centers.
---
# `geo-redundancy-backup-strategy`
Segurança de dados contra catástrofes regionais.
## Regras
1. Replique backups e dados críticos para regiões de nuvem localizadas em continentes ou costas diferentes.
2. Utilize replicação assíncrona para não impactar a latência das operações locais.
3. Valide periodicamente se é possível restaurar os dados a partir da região redundante de Backup.
---
