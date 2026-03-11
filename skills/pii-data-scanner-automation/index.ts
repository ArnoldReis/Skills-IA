/**
 * Detector simples de PII via Regex.
 */
export function containsPII(text: string) {
  // Why: Evita que informações que identificam indivíduos vazem para sistemas de análise ou suporte sem tratamento.
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
  const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
  return emailRegex.test(text) || cpfRegex.test(text);
}
