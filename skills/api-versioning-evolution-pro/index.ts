/**
 * Router versionado.
 */
export function getVersionedEndpoint(version: number, endpoint: string) {
  return `/api/v\${version}\${endpoint}`; // Why: Versionamento explícito protege clientes antigos enquanto você inova na API.
}
