import { describe, it, expect } from 'vitest';
import { validatePath } from './index';

describe('Filesystem Manager Skill', () => {
  it('deve permitir acessos dentro do sandbox root', () => {
    // Why: Caminhos relativos devem ser resolvidos como seguros dentro da raiz em process.cwd.
    const safePath = validatePath('./uma-pasta-segura/arquivo.txt');
    expect(safePath).toContain('uma-pasta-segura');
  });

  it('deve bloquear path traversal (../) fora do root', () => {
    expect(() => {
      validatePath('../../../../../etc/passwd');
    }).toThrow('Acesso negado');
  });
});
