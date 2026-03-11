---
name: bulkhead-pattern-resilience
description: Isola recursos das camadas da aplicação para que a falha em um componente não derrube todo o sistema.
---
# `bulkhead-pattern-resilience`
Compartimentalização de falhas para sobrevivência do sistema.
## Regras
1. Aloque pools de conexões e threads separados para diferentes funcionalidades críticas.
2. Impeça que uma funcionalidade não essencial consuma todos os recursos do servidor (CPU/RAM).
3. Utilize limites de concorrência por serviço interno.
---
