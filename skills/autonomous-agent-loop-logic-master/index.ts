/**
 * Loop principal do agente.
 */
export async function agentLoop(objective: string) {
  // Why: Padrões autônomos permitem resolver problemas complexos que o usuário não saberia decompor manualmente.
  let steps = 0;
  while (steps < 10) {
    const nextAction = await think(objective);
    if (nextAction.type === 'FINISH') break;
    await act(nextAction);
    steps++;
  }
}
const think = async (o: string) => ({ type: 'FINISH' });
const act = async (a: any) => {};
