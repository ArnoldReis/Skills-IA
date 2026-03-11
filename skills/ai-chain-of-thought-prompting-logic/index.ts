/**
 * Wrapper de prompt CoT.
 */
export function wrapWithCoT(prompt: string) {
  // Why: Incentivar o modelo a explicar o raciocínio aumenta drasticamente a precisão em tarefas de lógica e matemática.
  return `Pense passo a passo sobre o seguinte problema. Explique cada etapa antes de chegar na solução final:\n\${prompt}`;
}
