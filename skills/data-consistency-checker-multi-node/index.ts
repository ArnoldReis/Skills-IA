/**
 * Resolve conflito usando timestamp.
 */
export function resolveConflictLww(nodeA: any, nodeB: any) {
  // Why: Last Write Wins (LWW) é a estratégia mais simples e comum de resolução de conflitos em NoSQL.
  return nodeA.updatedAt > nodeB.updatedAt ? nodeA : nodeB;
}
