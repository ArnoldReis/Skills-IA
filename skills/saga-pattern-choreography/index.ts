/**
 * Handler de evento de coreografia.
 */
export function onOrderCreated(order: any) {
  // Why: Na coreografia, o sucesso de um evento aciona o início do próximo passo em outro serviço automaticamente.
  return { type: 'RESERVE_STOCK', payload: { orderId: order.id } };
}
