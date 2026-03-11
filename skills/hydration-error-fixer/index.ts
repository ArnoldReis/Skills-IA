/**
 * Detecta prováveis causas de erro de hidratação ao escanear o código do componente.
 * @param source Código fonte do componente React/Next.js.
 * @returns Lista de causas prováveis.
 */
export function findHydrationMismatchCauses(source: string): string[] {
    const causes: string[] = [];

    // Why: O uso de APIs de tempo ou random sem sincronização causa divergência imediata no Hash do render.
    if (source.includes('new Date()') && !source.includes('useEffect')) {
        causes.push('[Hydration Risk]: new Date() usado fora de um useEffect causará mismatch entre servidor e cliente.');
    }
    if (source.includes('Math.random()') && !source.includes('useEffect')) {
        causes.push('[Hydration Risk]: Math.random() gerará valores diferentes no servidor e no cliente.');
    }
    if (source.includes('typeof window') && !source.includes('useEffect')) {
        causes.push('[Hydration Risk]: Checagens de "window" durante a renderização inicial dependem do ambiente e divergem do SSR.');
    }

    return causes;
}

// TODO: Gerar componente wrapper <ClientOnly> automático para correções rápidas.
