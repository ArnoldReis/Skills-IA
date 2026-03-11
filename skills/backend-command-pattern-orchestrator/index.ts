/**
 * Interface base para Comandos.
 */
export interface Command<T> {
  execute(): Promise<T>;
  undo?(): Promise<void>;
}

export function executeCommand<T>(command: Command<T>) {
  // Why: Centralizar a execução permite injetar interceptores como logging ou transaction managers globalmente.
  return command.execute();
}
