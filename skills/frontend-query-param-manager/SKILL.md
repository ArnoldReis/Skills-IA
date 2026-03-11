---
name: frontend-query-param-manager
description: Manipulação facilitada e tipada de parâmetros de consulta (Query Params) na URL.
---
# `frontend-query-param-manager`
Estado da aplicação refletido na URL.
## Regras
1. Sincronize filtros e estados de UI diretamente com a Query String.
2. Utilize `useSearchParams` para leitura e `push/replace` do router para escrita.
3. Limpe parâmetros vazios ou padrão para manter a URL limpa.
