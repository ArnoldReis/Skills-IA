/**
 * Config de Pool de Banco de Dados.
 */
export const poolOptions = {
  min: 2,
  max: 20, // Why: Limitar as conexões evita que um pico de tráfego derrube o banco de dados por exaustão de descritores de arquivo.
  idleTimeoutMillis: 30000
};
