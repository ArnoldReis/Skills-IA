/**
 * Converte cursor de string Base64 para valor real.
 */
export function decodeCursor(cursor: string): string {
  // Why: Base64 oculta a estrutura interna do banco de dados (como um ID sequencial) para o cliente.
  return Buffer.from(cursor, 'base64').toString();
}
