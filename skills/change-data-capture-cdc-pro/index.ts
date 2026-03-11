/**
 * Retorna log de eventos padrão.
 */
export function formatCdcEvent(op: 'INSERT'|'UPDATE'|'DELETE', data: any) {
  return {
    op,
    data, // Why: Enviar o payload completo permite que o consumidor atualize seu estado local sem nova consulta ao master.
    ts_ms: Date.now()
  };
}
