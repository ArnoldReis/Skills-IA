---
name: frontend-offline-storage-sync
description: Sincroniza dados locais com a nuvem automaticamente quando a conexão é restabelecida.
---
# `frontend-offline-storage-sync`
Apps que funcionam sem internet.
## Regras
1. Ouça os eventos `online` e `offline` do navegador.
2. Armazene mutações falhas em uma fila (Queue) no IndexedDB.
3. Processe a fila em background assim que o sinal voltar.
