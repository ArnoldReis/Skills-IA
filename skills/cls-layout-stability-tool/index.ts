/**
 * Analisa tags de mídia no HTML/JSX em busca de dimensões ausentes.
 * @param jsxSource Fonte do componente.
 * @returns Alertas de CLS detectados.
 */
export function auditMediaDimensions(jsxSource: string): string[] {
    const alerts: string[] = [];
    
    // Why: Imagens sem width/height causam grandes shifts quando o navegador descobre o aspecto real após o download.
    const imgRegex = /<img(?![^>]*\b(width|height)\b)[^>]*>/g;
    const matches = jsxSource.match(imgRegex);

    if (matches) {
        alerts.push(`[CLS Risk]: Encontradas ${matches.length} tags <img> sem atributos de dimensão definidos.`);
    }

    return alerts;
}
