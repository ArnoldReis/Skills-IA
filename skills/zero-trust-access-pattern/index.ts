/**
 * Pseudo-validação de contexto Zero Trust.
 */
export function validateContext(request: any) {
  return request.hasValidToken && request.isKnownDevice;
}
