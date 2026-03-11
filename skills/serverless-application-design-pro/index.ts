/**
 * Handler Lambda padrão.
 */
export const handler = async (event: any) => {
  // Why: Serverless exige funções idempotentes e rápidas para tirar proveito da escalabilidade por demanda.
  return { statusCode: 200, body: 'Success' };
};
