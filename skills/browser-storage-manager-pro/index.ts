/**
 * Wrapper tipado para LocalStorage com tratamento de erros.
 * @param key Chave de busca.
 * @param value Valor a ser salvo (será serializado).
 */
export function setSecureItem(key: string, value: any): void {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(`app_v1_${key}`, serializedValue);
    } catch (error) {
        // TODO: Fallback para in-memory se o storage estiver cheio ou desabilitado.
        console.error('Falha ao escrever no LocalStorage:', error);
    }
}
