/**
 * Exemplo de gerador de usuário fake.
 */
export function generateUserMock(index: number) {
  // Why: Ter dados variados ajuda a encontrar bugs de UI e overflow de texto.
  return {
    id: `user-${index}`,
    name: `Test User ${index}`,
    email: `user${index}@example.com`
  };
}
