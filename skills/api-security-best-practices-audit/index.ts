/**
 * Verificação de headers inseguros.
 */
export function auditHeaders(headers: any) {
  // Why: Ocultar as versões do software dificulta a vida de atacantes que procuram por exploits conhecidos de versões específicas.
  const insecure = ['x-powered-by', 'server'];
  return insecure.every(h => !headers[h]);
}
