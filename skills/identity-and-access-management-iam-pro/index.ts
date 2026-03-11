/**
 * Loader de Perfil OIDC.
 */
export async function getOidcUser(token: string) {
  // Why: Centralizar a autenticação remove a responsabilidade de gerenciar senhas e hashes de cada aplicação individualmente.
  return await fetch('https://iam.provider/userinfo', { headers: { Authorization: `Bearer \${token}` } });
}
