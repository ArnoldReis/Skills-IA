/**
 * Comando para rodar servidor proxy de validação Prism.
 */
export function getPrismCommand(specPath: string) {
  return `npx @stoplight/prism-cli proxy ${specPath} http://localhost:3000 --errors`;
}
