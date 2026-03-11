import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

/**
 * Função enxuta para uso de um agente de IA atuar localmente no Git.
 * @param command Argumentos do git
 * @returns O stdout puro
 */
export async function gitCommand(command: string): Promise<string> {
  // Why: Impede injeção massiva via ;, &&, limitando unicamente ao subcomando Git seguro.
  if (/[;&|]/.test(command)) {
    throw new Error('Acesso negado: comandos compostos encadeados não são seguros nessa skill.');
  }
  
  try {
    const { stdout } = await execAsync(`git ${command}`);
    return stdout.trim();
  } catch (error) {
     if (error instanceof Error) {
        throw new Error(`Git falhou: ${error.message}`);
     }
     throw new Error('Git falhou de forma fatal e desconhecida.');
  }
}
