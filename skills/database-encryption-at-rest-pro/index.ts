/**
 * Retorna flag de criptografia S3.
 */
export function getEncryptionOptions() {
  return {
    ServerSideEncryption: 'aws:kms',
    SSEKMSKeyId: 'alias/my-db-key'
  };
}
