/**
 * Busca de config remota.
 */
export async function fetchRemoteConfig(serviceName: string) {
  // Why: Mudar um parâmetro de negócio em 50 instâncias simultaneamente sem precisar de um novo deploy.
  return await fetch(`http://config-server/v1/\${serviceName}`);
}
