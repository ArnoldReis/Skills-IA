/**
 * Retorna anotação para injeção de sidecar Istio.
 */
export function getIstioInjectionAnnotation() {
  return { 'sidecar.istio.io/inject': 'true' };
}
