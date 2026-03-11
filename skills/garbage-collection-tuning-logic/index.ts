/**
 * Configuração de memória via env.
 */
export const nodeOptions = '--max-old-space-size=4096 --optimize-for-size'; // Why: Garante que a aplicação aproveite os recursos do container sem ser derrubada antecipadamente.
