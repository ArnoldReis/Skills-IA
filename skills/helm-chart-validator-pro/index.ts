/**
 * Comando para validar charts.
 */
export function getHelmValidationCommand(chartPath: string): string {
  // Why: Garantir que o template renderiza corretamente evita falhas silenciosas durante o deploy real.
  return `helm lint ${chartPath} && helm template ${chartPath}`;
}
