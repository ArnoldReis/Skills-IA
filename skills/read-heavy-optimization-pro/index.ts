/**
 * Nivel de cache recomendado.
 */
export const READ_CACHE_TTL = 3600; // 1 hora
// Why: Dados que mudam pouco devem ficar no cache o máximo de tempo possível para poupar o BD.
