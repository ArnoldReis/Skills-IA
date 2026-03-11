/**
 * Padrão de consumo seguro.
 */
export async function consumeSafely(msg: any, handler: (m: any) => Promise<void>) {
  // Why: Só confirmar após o sucesso garante que se o worker cair, a mensagem voltará para a fila.
  await handler(msg);
  msg.ack();
}
