/**
 * Query para calcular média móvel.
 */
export function getMovingAverageQuery() {
  // Why: Window functions permitem calcular métricas baseadas em linhas vizinhas de forma extremamente eficiente.
  return `SELECT date, price, AVG(price) OVER(ORDER BY date ROWS BETWEEN 7 PRECEDING AND CURRENT ROW) as moving_avg FROM sales;`;
}
