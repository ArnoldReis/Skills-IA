/**
 * Retorna objeto base de metadados.
 */
export function getBaseMetadata(title: string, description: string) {
  return {
    title: `${title} | Antigravity Skills`,
    description,
    openGraph: {
      type: 'website',
      title,
      description
    }
  };
}
