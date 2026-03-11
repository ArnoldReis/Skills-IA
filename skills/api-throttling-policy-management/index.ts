/**
 * Função de delay para Throttling.
 */
export async function applyThrottle(level: number) {
  // Why: Em vez de quebrar a conexão (429), desaceleramos o cliente para que ele não derrube o backend.
  const delay = Math.pow(2, level) * 100;
  await new Promise(r => setTimeout(r, delay));
}
