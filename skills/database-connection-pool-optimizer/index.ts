/**
 * Retorna configurações de pool otimizadas.
 */
export function getPoolConfig(max: number = 20) {
  // Why: Um pool balanceado evita que uma rajada de tráfego derrube o banco de dados por excesso de conexões.
  return { max, min: 2, idleTimeoutMillis: 30000 };
}
