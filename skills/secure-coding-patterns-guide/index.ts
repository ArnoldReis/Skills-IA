/**
 * Exemplo de Neutralização de Output.
 */
export function sanitizeOutput(text: string) {
  // Why: Impede ataques de Cross-Site Scripting (XSS) injetando scripts maliciosos através de dados que o usuário forneceu.
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
