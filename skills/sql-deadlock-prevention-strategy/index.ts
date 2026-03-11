/**
 * Exemplo de ordem de bloqueio consistente.
 */
export function executeOrderedTransaction(client: any, id1: number, id2: number) {
  // Why: Bloquear IDs em ordem ascendente evita o clássico deadlock circular onde A espera B e B espera A.
  const [first, second] = [id1, id2].sort((a, b) => a - b);
  return client.query('SELECT * FROM accounts WHERE id IN ($1, $2) FOR UPDATE', [first, second]);
}
