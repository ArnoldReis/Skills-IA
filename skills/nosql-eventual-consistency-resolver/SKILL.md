---
name: nosql-eventual-consistency-resolver
description: Lida com a natureza de consistência eventual de bancos distribuídos, implementando estratégias de leitura e correção.
---
# `nosql-eventual-consistency-resolver`
Lidando com a realidade de dados distribuídos.
## Regras
1. Utilize Quórum de leitura (Read Quorum) para garantir dados frescos em situações críticas.
2. Implemente lógica de retry na aplicação se o dado buscado ainda não propagou.
3. Desenhe a UI para lidar com estados de "pendente" enquanto a consistência é atingida.
