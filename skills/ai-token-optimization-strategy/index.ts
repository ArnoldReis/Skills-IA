/**
 * Minificador de prompt.
 */
export function minifyPrompt(prompt: string) {
  // Why: Menos tokens significam faturas menores e respostas que começam a chegar muito mais rápido para o usuário.
  return prompt.trim().replace(/\s+/g, ' ');
}
