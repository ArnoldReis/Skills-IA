/**
 * Adição com prioridade.
 */
export async function addWithPriority(job: any, priority: number) {
  // Why: Emails de redefinição de senha devem ser enviados antes de newsletters semanais.
  return await queue.add(job, { priority });
}
