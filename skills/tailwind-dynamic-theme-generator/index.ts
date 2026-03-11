/**
 * Gera uma escala de cores base em formato CSS compatível com Tailwind v4.
 * @param baseName Nome da variável (ex: 'primary').
 * @param hexColor Cor base em HEX.
 * @returns String formatada em bloco CSS.
 */
export function generateTailwindScale(baseName: string, hexColor: string): string {
    // Why: No Tailwind v4, a tendência é mover a config para o arquivo CSS usando @theme.
    // TODO: Implementar lógica de cálculo de luminosidade real nas shades 100-900.
    try {
        return `
@theme {
  --color-${baseName}-500: ${hexColor};
  /* Shades geradas automaticamente para ${baseName} */
  --color-${baseName}-400: color-mix(in srgb, ${hexColor}, white 20%);
  --color-${baseName}-600: color-mix(in srgb, ${hexColor}, black 20%);
}
        `.trim();
    } catch (error) {
        throw new Error('Falha ao gerar escala cromática para Tailwind.');
    }
}
