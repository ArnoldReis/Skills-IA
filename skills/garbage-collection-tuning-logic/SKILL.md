---
name: garbage-collection-tuning-logic
description: Ajusta os parâmetros do Garbage Collector (GC) do Node.js/JVM para minimizar pausas "Stop-the-world" e aumentar o throughput.
---
# `garbage-collection-tuning-logic`
Afinando o coletor para manter o sistema fluido sob carga.
## Regras
1. Ajuste o tamanho da `Young Generation` (new space) para aplicações que criam e destroem muitos objetos rapidamente.
2. Utilize a flag `--max-old-space-size` para evitar que o Node.js morra por `Out Of Memory` preventivo em ambientes de container.
3. Monitore os logs do GC (`--trace-gc`) para identificar se o sistema está gastando mais tempo limpando do que processando.
---
