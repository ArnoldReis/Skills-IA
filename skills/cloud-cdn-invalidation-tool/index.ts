/**
 * Comando AWS CLI para invalidação no CloudFront.
 */
export function getCloudfrontInvalidateCmd(distId: string, path: string = '/*'): string {
  // Why: Garantir que o usuário veja a nova versão do site imediatamente após o deploy do S3.
  return `aws cloudfront create-invalidation --distribution-id \${distId} --paths "\${path}"`;
}
