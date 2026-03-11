/**
 * Opções de agent com certificado cliente.
 */
export function getMtlsOptions(cert: string, key: string, ca: string) {
  return { cert, key, ca, rejectUnauthorized: true };
}
