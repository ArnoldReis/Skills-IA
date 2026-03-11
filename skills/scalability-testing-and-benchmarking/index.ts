/**
 * Script de benchmark k6 (Conceitual).
 */
export const k6Script = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 1000 } // Why: Validar se as decisões de arquitetura suportam a carga projetada pelo negócio.
  ]
};
