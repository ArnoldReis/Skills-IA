import * as fs from 'node:fs/promises';
import * as path from 'node:path';

// Why: Precisamos de uma raiz garantida para impedir que o agente acesse
// estruturas como \Windows ou /etc inadvertidamente durante testes do usuário.
const SANDBOX_ROOT = process.cwd();

/**
 * Valida se o caminho requisitado pertence ao sandbox da aplicação.
 * @param requestedPath - O caminho desejado pelo agente ou usuário.
 * @returns O caminho absoluto se for válido.
 * @throws Error se o caminho tentar escapar do root.
 */
export function validatePath(requestedPath: string): string {
  const absolutePath = path.resolve(SANDBOX_ROOT, requestedPath);
  if (!absolutePath.startsWith(SANDBOX_ROOT)) {
    throw new Error('Acesso negado: Tentativa de quebra do Sandbox root.');
  }
  return absolutePath;
}

/**
 * Lê o conteúdo de um arquivo de forma controlada.
 * @param filePath - O caminho do destino.
 * @returns O conteúdo do arquivo lido em string.
 */
export async function readFile(filePath: string): Promise<string> {
  // Tricky logic: Valida path pra evitar LFI (Local File Inclusion).
  const safePath = validatePath(filePath);
  
  try {
    const content = await fs.readFile(safePath, 'utf-8');
    return content;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Falha na leitura do arquivo: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao ler o arquivo.');
  }
}

/**
 * Escreve um arquivo após passar pela checagem do sandbox, criando pastas recursivamente.
 * @param filePath - Caminho a ser escrito.
 * @param content - Conteúdo payload a ser fixado.
 * @returns true se a escrita for um sucesso.
 */
export async function writeFile(filePath: string, content: string): Promise<boolean> {
  const safePath = validatePath(filePath);
  try {
    const dir = path.dirname(safePath);
    // TODO: criar opções parametrizáveis se overrite será forçado ou não.
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(safePath, content, 'utf-8');
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Falha na escrita do arquivo: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao escrever o arquivo.');
  }
}
