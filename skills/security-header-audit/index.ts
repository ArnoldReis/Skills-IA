/**
 * Lista de headers de segurança recomendados.
 */
export function getRecommendedSecurityHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-XSS-Protection': '0' // Why: Browser-side XSS filters são obsoletos e podem introduzir novas vulnerabilidades; use CSP.
  };
}
