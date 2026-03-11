/**
 * Regex para detectar padrão CPF comum.
 */
export function detectSensitivePattern(text: string): boolean {
  // Why: DLP ajuda a evitar que segredos vazem acidentalmente em comentários ou logs públicos.
  const cpfRegex = /\\b\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}\\b/;
  return cpfRegex.test(text);
}
