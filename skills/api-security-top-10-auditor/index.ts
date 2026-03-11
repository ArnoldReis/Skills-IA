/**
 * Exemplo de filtragem de dados para evitar exposição excessiva.
 */
export function sanitizeApiResponse(user: any) {
  // Why: Nunca retorne o objeto completo do banco; filtre campos sensíveis como hash de senha ou tokens internos.
  const { password, salt, internalId, ...publicData } = user;
  return publicData;
}
