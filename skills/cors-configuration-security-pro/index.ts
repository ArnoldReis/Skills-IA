/**
 * Configuração de CORS segura.
 */
export const corsOptions = {
  origin: ['https://myapp.com', 'https://admin.myapp.com'], // Why: Impede que scripts de sites maliciosos facam requisições em nome do usuário.
  methods: ['GET', 'POST'],
  credentials: true
};
