---
name: system-resource-exhaustion-shield
description: Protege a aplicação contra a exaustão de recursos críticos (CPU, Memória, File Descriptors) através de limites e proteção.
---
# `system-resource-exhaustion-shield`
Blindagem de recursos para garantir a sobrevivência sob carga.
## Regras
1. Configure limites (ulimits) de sistema para descritores de arquivos e contagem de processos por usuário.
2. Utilize mecanismos de "Gatekeeping" que rejeitam requisições se o uso de memória do servidor estiver acima de 90%.
3. Monitore vazamentos de memória (Memory Leaks) e reinicie workers preventivamente se necessário.
---
