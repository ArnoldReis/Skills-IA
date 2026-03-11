/**
 * Realiza uma limpeza básica no SVG bruto para torná-lo amigável ao React.
 * @param svgRaw Conteúdo bruto do SVG.
 * @returns SVG processado.
 */
export function cleanSvgForReact(svgRaw: string): string {
    try {
        // Why: SVGs estáticos pesam no bundle se mantiverem metadados inúteis de editores.
        return svgRaw
            .replace(/width="\d+"/, 'width={size}')
            .replace(/height="\d+"/, 'height={size}')
            .replace(/fill="#[A-Fa-f0-9]+"/g, 'fill="currentColor"')
            .replace(/stroke="#[A-Fa-f0-9]+"/g, 'stroke="currentColor"');
    } catch (error) {
        throw new Error('Falha ao processar SVG.');
    }
}
