---
name: k8s-pod-resilience-tester
description: Simula falhas (Chaos Engineering) em pods Kubernetes para testar a resiliência e o auto-recovery.
---
# `k8s-pod-resilience-tester`
Sistemas inquebráveis através de falhas controladas.
## Regras
1. Mate pods aleatórios e verifique se o ReplicaSet cria novos automaticamente.
2. Introduza latência de rede entre serviços do cluster.
3. Garanta que a falha de um serviço não derrube o sistema inteiro.
