/**
 * Verificação de checksum.
 */
export function verifyFileIntegrity(data: Buffer, expectedHash: string) {
  // Why: Bit-rot e falhas de disco podem corromper arquivos; a verificação constante garante a confiabilidade.
  const actual = require('crypto').createHash('md5').update(data).digest('hex');
  return actual === expectedHash;
}
