import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

/**
 * Executa comandos de CLI de forma não-bloqueante por muito tempo com Timeout Estrito.
 * @param command Comando que a IA deseja rodar.
 * @param timeoutMs Tempo limítrofe antes de matar o node process. Default 10000ms.
 * @returns { stdout, stderr }
 */
export async function runCli(command: string, timeoutMs: number = 10000): Promise<{ stdout: string, stderr: string }> {
  try {
    // Why: Um agente desgovernado poderia acionar requisições infinitas no host. Timeout protege.
    const { stdout, stderr } = await execAsync(command, { timeout: timeoutMs });
    return { stdout: stdout.trim(), stderr: stderr.trim() };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`CLI falhou no código de encerramento. Detalhe: ${error.message}`);
    }
    throw new Error('Falha generalizada de I/O do processo');
  }
}
