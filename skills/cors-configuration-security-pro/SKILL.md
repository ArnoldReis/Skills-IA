---
name: cors-configuration-security-pro
description: Configura políticas de Cross-Origin Resource Sharing (CORS) para permitir acessos seguros de navegadores e domínios específicos.
---
# `cors-configuration-security-pro`
Controlando quem pode consumir sua API a partir de um navegador.
## Regras
1. Nunca utilize `Access-Control-Allow-Origin: *` em APIs que lidam com dados autenticados ou sensíveis.
2. Especifique explicitamente os domínios permitidos e os métodos HTTP (GET, POST, etc.) autorizados.
3. Configure o tempo de cache para requisições de pre-flight (`OPTIONS`) através do header `Access-Control-Max-Age`.
---
