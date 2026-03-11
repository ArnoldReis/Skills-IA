/**
 * Retorna configurações recomendadas para Helmet em produção.
 */
export function getHelmetConfig() {
  return {
    contentSecurityPolicy: true,
    hsts: true,
    referrerPolicy: { policy: 'no-referrer' }
  };
}
