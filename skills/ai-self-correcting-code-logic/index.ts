/**
 * Loop de correção automática.
 */
export async function tryAndFix(code: string, tests: string) {
  // Why: Aumenta drasticamente a taxa de sucesso de agentes de codificação em tarefas complexas.
  try {
    await execute(code, tests);
  } catch (error) {
    const fix = await llm.askForFix(code, error);
    await tryAndFix(fix, tests);
  }
}
const execute = async (c: string, t: string) => {};
const llm: any = { askForFix: async (c: string, e: any) => '' };
