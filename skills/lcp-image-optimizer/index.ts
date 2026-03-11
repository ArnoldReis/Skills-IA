/**
 * Verifica se a imagem principal possui os atributos de prioridade corretos.
 * @param imageTag O trecho da tag de imagem em string.
 * @returns { isOptimized: boolean, fix?: string }
 */
export function validateLCPPriority(imageTag: string): { isOptimized: boolean, fix?: string } {
    try {
        const hasPriority = imageTag.includes('priority') || imageTag.includes('fetchpriority="high"');
        const isLazy = imageTag.includes('loading="lazy"');

        if (isLazy) {
            return { isOptimized: false, fix: 'Remova loading="lazy" da imagem LCP para evitar atrasos no carregamento crítico.' };
        }
        if (!hasPriority) {
            return { isOptimized: false, fix: 'Adicione fetchpriority="high" ou o atributo priority para acelerar o LCP.' };
        }

        return { isOptimized: true };
    } catch (error) {
        throw new Error('Falha ao validar prioridade de imagem LCP.');
    }
}
