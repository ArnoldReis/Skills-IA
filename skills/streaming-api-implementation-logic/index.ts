/**
 * Exemplo de resposta em stream.
 */
export function streamResponse(res: any, generator: AsyncGenerator) {
  // Why: Permite enviar respostas de IA (token por token) sem fazer o usuário esperar o texto completo.
  for await (const chunk of generator) {
    res.write(chunk);
  }
  res.end();
}
