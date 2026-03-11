/**
 * Orquestração de tarefas.
 */
export async function delegateTask(task: string) {
  // Why: Dividir para conquistar; agentes especialistas são muito mais eficientes do que um único modelo tentando fazer tudo.
  if (task.includes('code')) return await coderAgent.run(task);
  return await researcherAgent.run(task);
}
const coderAgent: any = { run: async (t: string) => {} };
const researcherAgent: any = { run: async (t: string) => {} };
