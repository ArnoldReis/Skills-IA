/**
 * Geração de API Key segura.
 */
export function generateApiKey() {
  // Why: Chaves longas e aleatórias são imunes a ataques de dicionário; o prefixo ajuda na identificação por scanners de segredo.
  return `sk_\${crypto.randomBytes(24).toString('hex')}`;
}
