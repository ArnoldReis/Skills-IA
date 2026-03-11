---
name: tanstack-query-cache-pro
description: Configura e otimiza estratégias de cache, prefetching e stale-time no TanStack Query.
---

# `tanstack-query-cache-pro`
Especialista em Data Fetching. Garante que os dados estejam sempre frescos sem sobrecarregar o backend com requests redundantes.

## Regras
1. Defina `staleTime` globalmente mas permita sobreposição por query específica.
2. Implemente `prefetchQuery` para navegações previsíveis do usuário (ex: hover em link).
3. Utilize `infiniteQuery` para listas longas, gerindo o cache de páginas anteriores de forma eficiente.

## Como Usar
Acione para configurar o QueryClient inicial ou para resolver problemas de dados desatualizados na interface.
