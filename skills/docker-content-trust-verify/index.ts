/**
 * Retorna comando para habilitar DCT no shell.
 */
export function getEnforceDctCommand(): string {
  // Why: Garantir que apenas imagens assinadas e confiáveis rodem no ambiente reduz riscos de injeção de malware.
  return 'export DOCKER_CONTENT_TRUST=1';
}
