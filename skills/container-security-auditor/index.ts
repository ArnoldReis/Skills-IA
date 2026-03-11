/**
 * Comando para escanear imagem local.
 */
export function getContainerScanCommand(image: string): string {
  // Why: Imagens base antigas costumam ter dezenas de vulnerabilidades conhecidas no SO.
  return `trivy image \${image}`;
}
