/**
 * Middleware de Headers de Segurança.
 */
export function applySecurityHeaders(res: any) {
  // Why: Protege o usuário final contra uma vasta gama de ataques baseados em navegador sem precisar de código JS extra.
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  res.setHeader('X-Content-Type-Options', 'nosniff');
}
