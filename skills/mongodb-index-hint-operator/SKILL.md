---
name: mongodb-index-hint-operator
description: Força o uso de índices específicos no MongoDB usando `.hint()` para ignorar decisões erradas do otimizador.
---
# `mongodb-index-hint-operator`
Controle manual do plano de execução NoSQL.
## Regras
1. Utilize o hint apenas após validar no `explain()` que o otimizador está ignorando o índice ideal.
2. Lembre-se que um hint forçado pode se tornar ineficiente se os dados da coleção mudarem drasticamente.
3. Teste se o uso de campos compostos no hint realmente reduz o número de documentos scanneados.
