---
name: nodejs-cpu-profiling-pro
description: Realiza profiling de CPU no Node.js para identificar funções "quentes" que consomem muito tempo de processamento.
---
# `nodejs-cpu-profiling-pro`
Identificando exatamente onde o seu código está gastando tempo.
## Regras
1. Utilize o comando `node --prof` ou ferramentas como o Chrome DevTools para capturar o perfil de execução.
2. Foque na otimização de funções síncronas que bloqueiam o Event Loop.
3. Substitua operações de CPU intensivas (ex: criptografia, processamento de imagem) por Worker Threads ou WebAssembly.
---
