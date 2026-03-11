---
name: data-denormalization-strategy-pro
description: Aplica desnormalização controlada de dados para ganhar performance em leitura ao custo de duplicação de dados.
---
# `data-denormalization-strategy-pro`
Velocidade de consulta através da redundância calculada.
## Regras
1. Repita dados frequentemente consultados (ex: nome do autor no post) para evitar JOINS.
2. Esteja ciente da complexidade de manter os dados duplicados sincronizados (Data Integrity).
3. Use apenas quando a performance de leitura for crítica e superior à necessidade de economia de espaço em disco.
---
