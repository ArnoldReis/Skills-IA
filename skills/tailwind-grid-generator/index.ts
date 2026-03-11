/**
 * Gera as classes CSS de um container Grid com base no número de colunas.
 * @param cols Número de colunas por breakpoint { base, md, lg }.
 * @param gap Espaçamento (ex: '4').
 * @returns Lista de classes Tailwind.
 */
export function getGridClasses(cols: { base: number, md: number, lg: number }, gap: string = '4'): string {
    // Why: Grids responsivos são a base de interfaces modernas mobile-first.
    try {
        return `grid grid-cols-${cols.base} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} gap-${gap}`;
    } catch (error) {
        throw new Error('Falha ao gerar classes de Grid.');
    }
}
