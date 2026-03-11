/**
 * Comando kubeseal para gerar o segredo selado.
 */
export function getSealCommand(input: string, output: string): string {
  // Why: Selar o segredo permite que ele suba para o repositório sem risco de exposição do valor real.
  return `kubeseal <\${input} >\${output} --format yaml`;
}
