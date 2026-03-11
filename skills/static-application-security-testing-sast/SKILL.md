---
name: static-application-security-testing-sast
description: Analisa o código fonte em busca de padrões perigosos, sem a necessidade de executar a aplicação.
---
# `static-application-security-testing-sast`
Encontrando bugs de segurança no momento em que são escritos.
## Regras
1. Utilize ferramentas como SonarQube, Snyk Code ou Semgrep no pipeline de desenvolvimento.
2. Identifique fluxos de dados de fontes não confiáveis para sinks sensíveis (Taint Analysis).
3. Monitore o uso de funções inseguras ou obsoletas da linguagem.
---
