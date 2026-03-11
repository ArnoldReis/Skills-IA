---
name: maintenance-page-logic-pro
description: Gerencia a exibição grácil de páginas de manutenção quando o sistema está offline para atualizações planejas.
---
# `maintenance-page-logic-pro`
Comunicação transparente com o usuário durante janelas de manutenção.
## Regras
1. Retorne sempre o código HTTP 503 (Service Unavailable) para evitar que mecanismos de busca indexem a página de manutenção como conteúdo real.
2. Inclua um header `Retry-After` para informar aos navegadores e bots quando o sistema deve estar de volta.
3. Forneça informações de contato ou links de status (External Status Page) para o usuário.
---
