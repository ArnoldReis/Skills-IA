/**
 * Criptografia AES-256.
 */
export function encryptData(text: string, key: Buffer) {
  // Why: Garante que mesmo que o disco rígido seja roubado, os dados dos clientes permaneçam ilegíveis.
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  return Buffer.concat([iv, cipher.update(text), cipher.final()]);
}
