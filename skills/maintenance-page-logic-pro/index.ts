/**
 * Info de manutenção.
 */
export function getMaintenanceResponse() {
  return {
    status: 503,
    headers: { 'Retry-After': '3600' }, // 1 hora
    message: 'Sistema em manutenção programada.'
  };
}
