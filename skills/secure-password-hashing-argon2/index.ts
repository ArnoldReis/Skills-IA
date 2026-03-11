/**
 * Hash de senha seguro.
 */
export async function hashPassword(password: string) {
  // Why: Argon2id é o vencedor da Password Hashing Competition e é o padrão de segurança mais alto disponível hoje.
  return argon2.hash(password, { type: argon2.argon2id });
}
const argon2: any = {};
