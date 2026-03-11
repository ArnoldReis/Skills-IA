/**
 * Comando de diagnóstico SQL.
 */
export const explainQuery = (sql: string) => `EXPLAIN (ANALYZE, BUFFERS) \${sql}`; // Why: Fornece o custo real de cada etapa da consulta no motor do banco.
