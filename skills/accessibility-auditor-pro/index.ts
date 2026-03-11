/**
 * Inspeciona o código fonte em busca de pseudo-componentes mal formados via padrão Regex (para demonstração).
 * Em produção, essa skill deve atrelar a Babel/Traverse.
 * @param sourceCode O componente TSX puro em string.
 * @returns Um array de problemas ou correções propostas.
 */
export function auditA11y(sourceCode: string): string[] {
    const findings: string[] = [];
    
    // Tricky logic: Divs clicáveis sem keypress ou roles estouram quebra da navegação por TAB de pessoas cegas.
    if (sourceCode.includes('<div') && sourceCode.includes('onClick=')) {
        if (!sourceCode.includes('role="button"')) {
            findings.push('[WCAG Falha]: div com onClick encontrada sem role="button".');
        }
        if (!sourceCode.includes('onKeyDown=')) {
             findings.push('[WCAG Falha]: div com onClick encontrada sem onKeyDown para Enter/Space.');
        }
    }
    
    if (sourceCode.includes('<img') && !sourceCode.includes('alt=')) {
        findings.push('[WCAG Falha]: Tag de Imagem sem atributo alt descritivo.');
    }
    
    // TODO: Adicionar integrações para rodar axe-core usando a skill do puppeteer integrando as duas.
    return findings;
}
