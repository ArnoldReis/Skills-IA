/**
 * Retorna comando para linting de Terraform.
 */
export function getTerraformLintCommand(path: string): string {
  // Why: Antecipar erros de infraestrutura no CI economiza tempo e dinheiro (evita falhas reais no cloud).
  return `tflint --recursive ${path}`;
}
