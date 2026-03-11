import { describe, it, expect, vi } from 'vitest';
import { gitCommand } from './index';

vi.mock('node:child_process', () => ({
  exec: vi.fn((cmd, cb) => cb(null, { stdout: 'Mock Branch', stderr: '' }))
}));

describe('Git Integration Skill', () => {
    it('deve bloquear injeções de chained shell &&', async () => {
        await expect(gitCommand('status && rm -rf /')).rejects.toThrow('Acesso negado');
    });

    it('deve formatar comandos lícitos', async () => {
       const res = await gitCommand('status');
       expect(res).toBe('Mock Branch');
    });
});
