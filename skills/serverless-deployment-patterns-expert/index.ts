/**
 * Handler Serverless otimizado.
 */
export const handler = async (event: any) => {
  // Why: Manter a lógica leve e as dependências mínimas é a chave para a performance em ambientes serverless.
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
