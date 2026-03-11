/**
 * Exemplo de criação de índice composto.
 */
export const createIndexSql = `CREATE INDEX idx_user_status_created ON users (status, created_at);`; // Why: Otimiza filtros comuns de listagem (ex: "usuários ativos criados hoje").
