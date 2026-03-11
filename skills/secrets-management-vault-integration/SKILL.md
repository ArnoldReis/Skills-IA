---
name: secrets-management-vault-integration
description: Integra a aplicação com cofres de segredos (HashiCorp Vault, AWS Secrets Manager) para gerenciar credenciais de infraestrutura.
---
# `secrets-management-vault-integration`
Nenhum segredo deve tocar o seu sistema de arquivos ou código-fonte.
## Regras
1. Recupere segredos dinamicamente em tempo de execução através de APIs seguras ou injeção via sidecar.
2. Nunca armazene arquivos `.env` em repositórios Git, mesmo que sejam privados.
3. Utilize políticas de acesso granular no cofre para garantir que cada microserviço acesse apenas o que precisa.
---
