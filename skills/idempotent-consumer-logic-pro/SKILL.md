---
name: idempotent-consumer-logic-pro
description: Implementa a lógica de consumidor idempotente para garantir que o processamento repetido da mesma mensagem não cause efeitos colaterais indesejados.
---
# `idempotent-consumer-logic-pro`
Segurança contra duplicatas em sistemas distribuídos.
## Regras
1. Utilize um identificador único de mensagem (Message ID) vindo do produtor como chave de busca.
2. Antes de processar, verifique em um armazenamento rápido (Redis/DB) se aquele ID já foi processado com sucesso.
3. Se o ID já existir, ignore a mensagem silenciosamente (ou retorne o resultado anterior) sem executar a lógica de negócio novamente.
---
