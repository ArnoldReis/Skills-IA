---
name: cloud-spot-instance-lifecycle-expert
description: Gerencia instâncias Spot de forma resiliente, lidando com notificações de interrupção e reduzindo custos de cloud drasticamente.
---
# `cloud-spot-instance-lifecycle-expert`
Aproveitando o excesso de capacidade da nuvem com economia extrema.
## Regras
1. Monitore o "Spot Interruption Terminal" através dos serviços de metadados da instância (2 min de aviso).
2. Utilize Spot Instances apenas para cargas de trabalho sem estado (Stateless) ou processamento em lote (Batch).
3. Implemente uma estratégia mista: use instâncias On-Demand para a base estável e Spot para o excesso de demanda (burst).
---
