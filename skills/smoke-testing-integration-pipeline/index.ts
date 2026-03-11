/**
 * Teste de fumaça de Health Check.
 */
export async function smokeTest(apiUrl: string) {
  // Why: Detecta falhas de configuração catastróficas que não aparecem em testes unitários ou de integração fake.
  const res = await fetch(`\${apiUrl}/health`);
  return res.status === 200;
}
