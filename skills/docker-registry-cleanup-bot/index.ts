/**
 * Comando docker para limpeza local de imagens órfãs.
 */
export function getLocalDockerPruneCmd(): string {
  return 'docker image prune -a --force';
}
