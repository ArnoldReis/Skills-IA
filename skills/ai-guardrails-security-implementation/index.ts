/**
 * Validador de saída de IA.
 */
export function validateAiOutput(text: string) {
  // Why: Modelos de IA podem ser imprevisíveis; guardrails garantem que a experiência do usuário se mantenha profissional e segura.
  const forbidden = ['@hack', 'DROP TABLE'];
  return !forbidden.some(word => text.includes(word));
}
