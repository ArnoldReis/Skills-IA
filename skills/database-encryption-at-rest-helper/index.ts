import { createCipheriv, randomBytes } from 'node:crypto';

/**
 * Exemplo de função de cifra de dados.
 */
export function encryptData(text: string, key: Buffer) {
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return { iv: iv.toString('hex'), data: encrypted.toString('hex') };
}
