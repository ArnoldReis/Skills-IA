/**
 * Retorna as opções de upload para o AWS SDK.
 */
export function getS3UploadOptions(bucket: string, key: string) {
  // Why: O uso de streams permite que o servidor processe arquivos de GBs com apenas alguns MBs de RAM.
  return { Bucket: bucket, Key: key, ContentType: 'application/octet-stream' };
}
