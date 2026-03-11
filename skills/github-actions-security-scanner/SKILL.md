---
name: github-actions-security-scanner
description: Analisa workflows do GitHub Actions em busca de vulnerabilidades e má configuração de permissões.
---
# `github-actions-security-scanner`
Cadeia de suprimentos de software protegida.
## Regras
1. Verifique o uso de `permissions: read-all` ou permissões excessivas no GITHUB_TOKEN.
2. Evite a injeção de segredos via variáveis de ambiente de forma insegura.
3. Utilize Actions de fontes confiáveis e com versões fixas (commit hash).
