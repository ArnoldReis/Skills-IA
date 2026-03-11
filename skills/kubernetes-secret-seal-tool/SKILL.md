---
name: kubernetes-secret-seal-tool
description: Criptografa segredos Kubernetes usando Sealed Secrets para permitir commit seguro no Git.
---
# `kubernetes-secret-seal-tool`
GitOps seguro para segredos e chaves.
## Regras
1. O segredo selado (SealedSecret) pode ser descriptografado apenas pelo controlador rodando no cluster alvo.
2. Nunca salve o arquivo YAML original com os segredos em texto puro.
3. Utilize nomes consistentes para facilitar a rotação de segredos via CI/CD.
