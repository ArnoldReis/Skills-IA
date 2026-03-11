/**
 * Executor de ferramentas da IA.
 */
export async function executeTool(call: any) {
  // Why: Ferramentas permitem que a IA faça mais do que apenas falar; ela pode agir sobre dados e sistemas.
  const tool = tools[call.name];
  if (tool) return await tool(call.args);
  throw new Error('Ferramenta não encontrada');
}
const tools: any = {};
