/**
 * Retorna anotações comuns de segurança para Ingress.
 */
export function getIngressSecurityAnnotations() {
  return {
    'nginx.ingress.kubernetes.io/ssl-redirect': 'true',
    'nginx.ingress.kubernetes.io/force-ssl-redirect': 'true',
    'nginx.ingress.kubernetes.io/proxy-body-size': '10m'
  };
}
