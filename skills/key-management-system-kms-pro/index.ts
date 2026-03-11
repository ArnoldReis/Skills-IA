/**
 * Exemplo de policy restrita.
 */
export function getKmsPolicySnippet(principalArn: string) {
  return {
    Sid: "AllowOnlySpecificService",
    Effect: "Allow",
    Principal: { AWS: principalArn },
    Action: ["kms:Decrypt", "kms:GenerateDataKey"]
  };
}
