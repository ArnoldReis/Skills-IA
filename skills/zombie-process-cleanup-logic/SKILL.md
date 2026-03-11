---
name: zombie-process-cleanup-logic
description: Detecta e elimina processos órfãos (zombies) que consomem recursos e tabelas de processos sem realizar trabalho.
---
# `zombie-process-cleanup-logic`
Limpeza automática de detritos de execução ruidosos.
## Regras
1. Verifique processos que perderam sua conexão com o processo pai ou cujos timeouts de execução expiraram.
2. Utilize sinais `SIGKILL` como último recurso após tentativas falhas de encerramento suave.
3. Monitore o número de processos vivos para detectar vazamentos de spawn de processos.
---
