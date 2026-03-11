/**
 * Orquestração paralela de tools.
 */
export async function parallelToolCalls(calls: any[]) {
  // Why: Rodar ferramentas em paralelo pode diminuir o tempo total de resposta de 10 segundos para 2 segundos.
  return await Promise.all(calls.map(c => execute(c)));
}
const execute = async (c: any) => {};
