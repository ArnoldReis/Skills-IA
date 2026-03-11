/**
 * Retorna o bloco de configuração do backend terraform.
 */
export function getTerraformBackendConfig(bucket: string, table: string) {
  return `
terraform {
  backend "s3" {
    bucket         = "\${bucket}"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "\${table}"
    encrypt        = true
  }
}
  `.trim();
}
