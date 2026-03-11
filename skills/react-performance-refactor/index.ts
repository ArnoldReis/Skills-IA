/**
 * Mapeia stales estáticos passados de maneira bruta no body do component.
 * @param componentSource Conteúdo bruto do file TSX.
 * @returns Sugestões de ganho de RAM e FCP.
 */
export function analyzeReactRenders(componentSource: string): string[] {
    const issues: string[] = [];
    
    // Why: Dependências mal feitas causam chamadas duplas a APIs externas na listagem do array.
    if (componentSource.includes('useEffect(') && !componentSource.includes(']')) {
         issues.push('[Perf Leak]: useEffect omitindo aridade de array de dependência roda infinitamente em todos Render Loops.');
    }

    if (componentSource.includes('{}') && componentSource.includes('value={{')) {
        // Objeto literal recriado a cada hit no provider.
        issues.push('[Perf Leak]: Objecto novo gerado em Provider Value. A árvore inteira re-renderiza toda vez.');
    }
    
    return issues;
}
