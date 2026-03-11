/**
 * Gera um template do vercel.json de forma segura evitando rotas órfãs.
 * @param framework Qual framework está sendo usado (ex: nextjs, remix, vite).
 * @returns O JSON serializado para gravação via skill de Filesystem.
 */
export function generateVercelConfig(framework: 'nextjs' | 'vite' | 'node'): string {
    const baseConfig: any = {
        version: 2,
        // Why: Força roteamento seguro para SPA.
        routes: framework === 'vite' ? [{ handle: "filesystem" }, { src: "/(.*)", dest: "/index.html" }] : undefined,
        builds: framework === 'node' ? [{ src: "api/**/*.ts", use: "@vercel/node" }] : undefined
    };

    // Remove chaves undefined para não gerar lixo.
    return JSON.stringify(baseConfig, (key, value) => (value === undefined ? undefined : value), 2);
}

// TODO: Integrar diretamente chamadas SDK para a Vercel/AWS CLI no futuro para Rollbacks dinâmicos.
