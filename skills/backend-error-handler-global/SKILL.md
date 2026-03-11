---
name: backend-error-handler-global
description: Captura e processa todos os erros não tratados do servidor em um único ponto centralizado.
---
# `backend-error-handler-global`
Nenhuma falha passa despercebida.
## Regras
1. Diferencie erros de domínio (ex: Not Found) de erros catastróficos (ex: DB Down).
2. Esconda detalhes do stack trace para o cliente final por segurança.
3. Envie alertas para canais de monitoramento em caso de erros críticos.
