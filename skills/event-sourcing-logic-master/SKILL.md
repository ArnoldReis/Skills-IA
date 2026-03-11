---
name: event-sourcing-logic-master
description: Persiste o estado da aplicação como uma sequência imutável de eventos, permitindo reconstrução total do histórico.
---
# `event-sourcing-logic-master`
A trilha de auditoria definitiva integrada ao núcleo dos dados.
## Regras
1. Nunca altere ou apague eventos antigos; para corrigir um erro, envie um novo evento de compensação.
2. Utilize "Snapshots" periódicos do estado para reconstruir objetos grandes sem precisar ler milhares de eventos.
3. Aproveite o histórico para realizar "Viagem no Tempo" e depurar problemas de lógica baseando-se em estados passados.
---
