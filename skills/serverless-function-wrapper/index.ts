/**
 * Wrapper simples para resposta de função serverless.
 */
export function serverlessResponse(statusCode: number, body: any) {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  };
}
