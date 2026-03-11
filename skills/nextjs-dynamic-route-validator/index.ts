/**
 * Gera um boilerplate de página dinâmica para Next.js App Router com tipagem estrita.
 * @param paramName Nome do parâmetro (ex: 'id' ou 'slug').
 * @returns Template string.
 */
export function generateDynamicRoutePage(paramName: string): string {
    // Why: O uso de await params é obrigatório em versões recentes do Next.js para evitar warnings de hidratação e streaming.
    return `
export default async function Page({ params }: { params: Promise<{ ${paramName}: string }> }) {
  const { ${paramName} } = await params;
  
  return (
    <main>
      <h1>Visualizando: $\{${paramName}\}</h1>
    </main>
  );
}
    `.trim();
}
