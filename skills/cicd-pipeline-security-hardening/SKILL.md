---
name: cicd-pipeline-security-hardening
description: Implementa práticas de endurecimento nos pipelines de CI/CD para prevenir ataques de supply chain e roubo de segredos.
---
# `cicd-pipeline-security-hardening`
Protegendo a fábrica que constrói o seu software.
## Regras
1. Utilize agentes de build efêmeros (contêineres que morrem após o uso) para evitar persistência de dados sensíveis.
2. Restrinja as permissões dos segredos injetados no pipeline ao mínimo necessário para cada etapa.
3. Monitore os logs de execução do pipeline em busca de injeções de comando ou exfiltração de dados suspeitos.
---
