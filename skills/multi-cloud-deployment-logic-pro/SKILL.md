---
name: multi-cloud-deployment-logic-pro
description: Gerencia infraestrutura e deploys em múltiplas nuvens (AWS, GCP, Azure) para evitar vendor lock-in e aumentar resiliência.
---
# `multi-cloud-deployment-logic-pro`
Independência de provedor através de abstrações agnósticas.
## Regras
1. Utilize contêineres e Kubernetes para garantir que a aplicação rode identicamente em qualquer nuvem.
2. Utilize ferramentas de IaC (como Terraform) que suportem múltiplos provedores de forma nativa.
3. Evite serviços proprietários de nuvem (ex: DynamoDB) em favor de alternativas abertas ou compatíveis (ex: Postgres/Redis).
---
