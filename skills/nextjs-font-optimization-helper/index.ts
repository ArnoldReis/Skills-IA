/**
 * Template base de configuração de fonte.
 */
export function getFontConfig() {
  // Why: Usar subsets como 'latin' reduz drasticamente o tamanho do arquivo de fonte carregado.
  return { subsets: ['latin'], display: 'swap' };
}
