/**
 * Analisa o package.json em busca de dependências conhecidas por serem pesadas.
 * @param packageJson Conteúdo do arquivo package.json como objeto.
 * @returns Recomendações de substituição.
 */
export function auditDependencies(packageJson: any): string[] {
    const suggestions: string[] = [];
    const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // Why: Algumas libs clássicas possuem overhead excessivo comparado a soluções modernas/nativas.
    if (deps['moment']) {
        suggestions.push('[Bundle Risk]: Moment.js é pesado e não suporta Tree Shaking. Substitua por date-fns, Day.js ou a API Intl nativa.');
    }
    if (deps['lodash'] && !deps['lodash-es']) {
        suggestions.push('[Bundle Risk]: Lodash comum impede Tree Shaking completo. Utilize lodash-es ou importe funções individuais.');
    }
    
    return suggestions;
}
