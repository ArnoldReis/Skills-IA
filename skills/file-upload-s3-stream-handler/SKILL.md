---
name: file-upload-s3-stream-handler
description: Gerencia uploads de arquivos pesados usando Streams para evitar estouro de memória no servidor.
---
# `file-upload-s3-stream-handler`
Uploads escaláveis para a nuvem.
## Regras
1. Repasse o stream de dados diretamente para o S3 sem salvar no disco local.
2. Valide o tipo (MIME) e o tamanho máximo do arquivo antes de iniciar o upload.
3. Utilize credenciais IAM temporárias ou seguras para o acesso.
