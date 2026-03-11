---
name: cloud-vercel-aws-orchestrator
description: Interação via CLI em Nuvem, CI/CD Actions e Vercel Abstractions.
---

# `cloud-vercel-aws-orchestrator`
Skill ponte para DevOps ágil. 

## Regras
1. Deployments usam preview por padrão. Deploy de `main` só ocorre por ordem rígida.
2. Se Vercel JSON não existir, crie-o.
3. Analise variáveis de ambiente (`.env.example`) antes de debugar CI.
