/**
 * Exemplo de espelhamento.
 */
export function mirrorTraffic(req: any) {
  // Why: Permite detectar bugs ou regressões de performance em condições reais antes do lançamento oficial.
  fetch('http://shadow-service/api', { method: req.method, body: req.body }); // Fire and forget
}
