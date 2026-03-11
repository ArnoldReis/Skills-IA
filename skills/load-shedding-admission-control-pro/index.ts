/**
 * Verificador de admissão de carga.
 */
export function shouldDropRequest(priority: 'HIGH' | 'LOW') {
  // Why: É melhor heroiar perdendo alguns logs do que o site inteiro cair por falta de CPU para processar logins.
  const systemLoad = getSystemCpuUsage();
  return systemLoad > 0.9 && priority === 'LOW';
}
function getSystemCpuUsage() { return 0.5; }
