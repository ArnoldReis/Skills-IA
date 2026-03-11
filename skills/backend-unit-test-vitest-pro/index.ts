/**
 * Utilitário para facilitar o mock de respostas de banco.
 */
export function mockDbResponse<T>(data: T) {
  // Why: Abstrair o mock evita repetição de código boilerplate em cada arquivo de teste.
  return Promise.resolve(data);
}
