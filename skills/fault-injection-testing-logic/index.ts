/**
 * Middleware de latência artificial.
 */
export async function injectLatency(ms: number) {
  // Why: Simular redes lentas é vital para testar timeouts e experiência do usuário em condições adversas.
  return new Promise(resolve => setTimeout(resolve, ms));
}
