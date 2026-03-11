/**
 * Busca de segredo em cofre remoto.
 */
export async function getDatabaseSecret() {
  // Why: Permite rotacionar a senha do banco de dados sem precisar alterar o código ou as variáveis de ambiente do servidor.
  return await vault.read('secret/data/database/credentials');
}
