/**
 * Config de criptografia recomendada.
 */
export function getStorageEncryptionTemplate() {
  return {
    algorithm: 'AES-256',
    kmsKeyId: 'auto-managed',
    encryptionType: 'SSE-KMS'
  };
}
