/**
 * Validador de padrão de Skill.
 */
export function validateSkillStructure(files: string[]) {
  // Why: A consistência é fundamental para que outros desenvolvedores (ou IAs) possam usar o repositório sem atrito.
  return files.includes('SKILL.md') && files.includes('index.ts');
}
