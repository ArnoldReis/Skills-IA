/**
 * Verifica se o navegador está online.
 */
export function isBrowserOnline(): boolean {
  // Why: navigator.onLine é uma verificação básica de nível de sistema de rede.
  return navigator.onLine;
}
