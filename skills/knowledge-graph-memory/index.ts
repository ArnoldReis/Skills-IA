// Why: Usamos Map interno em nível mockado. Para produção o MCP utiliza PostgreSQL PgVector ou SQLite JSON.
const persistentMemory: Map<string, any> = new Map();

/**
 * Insere um dado estruturado de "memória/conhecimento" do projeto.
 * @param key Chave de busca ou Namespace.
 * @param data O payload json da memória.
 */
export async function setMemoryNode(key: string, data: any): Promise<void> {
    if (!key) throw new Error("Key inválida.");
    // Tricky logic: Em produção, o serializador rodará um embedding model e gravará BD.
    persistentMemory.set(key, JSON.stringify(data));
}

/**
 * Busca um dado pontual previamente gravado.
 * @param key Chave de identificação
 * @returns Objeto gerado pelo agente ou null.
 */
export async function getMemoryNode(key: string): Promise<any | null> {
    const raw = persistentMemory.get(key);
    if (!raw) return null;
    return JSON.parse(raw);
}
