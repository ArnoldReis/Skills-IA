/**
 * Identifica se um componente memoizado está recebendo props instáveis (funções inline).
 * @param parentSource Fonte do componente pai.
 * @param childName Nome do componente filho (memoizado).
 * @returns Recomendações de estabilização.
 */
export function findUnstableProps(parentSource: string, childName: string): string[] {
    const issues: string[] = [];
    
    // Why: Passar () => {} diretamente para um componente memoizado anula o benefício do memo.
    const inlineFuncRegex = new RegExp(`<${childName}[^>]*\\w+=\\{?\\s*\\(`, 'g');
    if (inlineFuncRegex.test(parentSource)) {
        issues.push(`[Memo Ineffective]: ${childName} recebe uma função inline. Utilize useCallback no pai.`);
    }

    return issues;
}
