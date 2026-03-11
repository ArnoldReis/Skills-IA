/**
 * Comparador de versões de ambiente.
 */
export function checkParity(env1: any, env2: any) {
  // Why: Diferenças de versão de Node ou bibliotecas entre ambientes são a causa número 1 de bugs inexplicáveis em prod.
  return env1.nodeVersion === env2.nodeVersion;
}
