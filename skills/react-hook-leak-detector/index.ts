/**
 * Verifica se um Hook de efeito possui função de limpeza para evitar vazamentos.
 * @param effectSource Trecho de código do useEffect.
 * @returns { isLeaking: boolean, advice: string }
 */
export function checkEffectCleanup(effectSource: string): { isLeaking: boolean, advice: string } {
    try {
        // Tricky logic: Hooks que iniciam timers ou listeners sem retorno são fontes comuns de vazamento de memória.
        const isAsyncSub = /addEventListener|setInterval|setTimeout|subscribe/.test(effectSource);
        const hasCleanup = /return\s+(\(\s*\)\s*=>|function)/.test(effectSource);

        if (isAsyncSub && !hasCleanup) {
            return {
                isLeaking: true,
                advice: 'Efeito inicia uma subscrição ou timer mas não retorna uma função de limpeza. Isso causará vazamento de memória ao desmontar.'
            };
        }

        return { isLeaking: false, advice: 'Efeito parece seguro.' };
    } catch (error) {
        // Why: Falhas no regex não devem quebrar o agente, apenas retornar erro seguro.
        throw new Error(`Erro na auditoria de hooks: ${error instanceof Error ? error.message : 'Desconhecido'}`);
    }
}
