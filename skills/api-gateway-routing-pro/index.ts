/**
 * Mapeamento base de rotas de microserviços.
 */
export const SERVICE_MAP = {
  auth: 'http://auth-service:3001',
  users: 'http://user-service:3002',
  orders: 'http://order-service:3003'
};

export function getTargetUrl(path: string): string | null {
  const segment = path.split('/')[1];
  return (SERVICE_MAP as any)[segment] || null;
}
