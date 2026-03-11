/**
 * Retorna configuração recomendada de TTL.
 */
export function getRoute53FailoverTtl(): number {
  // Why: Um TTL baixo garante que os clientes DNS não fiquem presos a um IP que falhou por muito tempo.
  return 60; 
}
