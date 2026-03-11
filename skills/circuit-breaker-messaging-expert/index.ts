/**
 * Fallback de mensageria.
 */
export async function fallbackProducer(msg: any) {
  // Why: Se o Kafka cair, salvar em disco local permite re-enviar os eventos quando ele voltar, evitando perda de dados.
  return await fs.appendFile('events.log', JSON.stringify(msg));
}
