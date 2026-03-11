/**
 * Analisa o código fonte de um componente Next.js para detectar se ele pode ser um Server Component.
 * @param source Bruto do componente em string.
 * @returns { canBeServer: boolean, reason?: string }
 */
export function analyzeServerComponentPotential(source: string): { canBeServer: boolean, reason?: string } {
    try {
        // Why: Se o componente não usa Hooks de estado ou browser APIs, ele deve ser Server Component por padrão no App Router.
        const hasClientHooks = /use(State|Effect|LayoutEffect|Context|Reducer|Memo|Callback)/.test(source);
        const hasWindowAccess = /typeof window|window\.|document\./.test(source);
        const hasUseClientDirective = source.includes("'use client'") || source.includes('"use client"');

        if (hasUseClientDirective && !hasClientHooks && !hasWindowAccess) {
            return { 
                canBeServer: true, 
                reason: 'Componente possui "use client" mas não utiliza hooks ou APIs de navegador. Pode ser revertido para Server Component.' 
            };
        }

        return { canBeServer: false };
    } catch (error) {
        // TODO: Implementar parser AST real para evitar falsos positivos em comentários.
        throw new Error('Falha ao analisar potencial de Server Component.');
    }
}
