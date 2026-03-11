/**
 * Comando para linting de segurança Terraform.
 */
export function getIacScanCommand(path: string): string {
  return `tfsec \${path}`;
}
