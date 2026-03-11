/**
 * Comando de scan checkov.
 */
export function getCheckovScanCommand(directory: string): string {
  // Why: Detectar erros de segurança no código IaC é centenas de vezes mais barato do que corrigir um recurso já deployed.
  return `checkov -d \${directory} --compact --quiet --framework terraform`;
}
