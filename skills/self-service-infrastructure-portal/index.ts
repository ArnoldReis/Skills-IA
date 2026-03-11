/**
 * Requisição de Infra via Portal.
 */
export async function requestDatabase(teamId: string, size: 'SMALL' | 'LARGE') {
  // Why: Remove o gargalo dos times de Ops e permite que os desenvolvedores foquem na entrega de valor.
  return await portal.provision('postgres', { teamId, quota: size });
}
const portal: any = { provision: async (a: string, b: any) => {} };
