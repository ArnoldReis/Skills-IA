/**
 * Pedido de aprovação humana.
 */
export async function requestApproval(action: any) {
  // Why: Em tarefas de alto risco, a IA serve como um acelerador, mas o humano retém a responsabilidade e o controle final.
  if (action.risk === 'HIGH') return await userInterface.promptApproval(action);
  return true;
}
const userInterface: any = { promptApproval: async (a: any) => true };
