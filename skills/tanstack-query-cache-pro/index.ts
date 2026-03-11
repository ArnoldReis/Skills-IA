/**
 * Sugere configurações de cache baseadas no tipo de dado (estático vs volátil).
 * @param dataType 'static' | 'dynamic' | 'realtime'.
 * @returns Objeto de configuração para o QueryClient.
 */
export function getQueryCacheConfig(dataType: 'static' | 'dynamic' | 'realtime'): any {
    try {
        const configs = {
            static: { staleTime: 1000 * 60 * 60, gcTime: 1000 * 60 * 60 * 24 }, // 1 hora de stale, 24 horas de GC
            dynamic: { staleTime: 1000 * 5, gcTime: 1000 * 60 * 5 }, // 5 segundos de stale, 5 min de GC
            realtime: { staleTime: 0, refetchInterval: 1000 } // Always stale, polling cada 1s
        };

        return configs[dataType] || configs.dynamic;
    } catch (error) {
        throw new Error('Falha ao determinar estratégia de cache para TanStack Query.');
    }
}
