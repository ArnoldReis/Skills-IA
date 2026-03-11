/**
 * Validador de par de treino.
 */
export function isGoodTrainingPair(prompt: string, completion: string) {
  // Why: A qualidade do output de um modelo fine-tuned é diretamente proporcional à pureza dos dados usados no treino.
  return prompt.length > 10 && completion.length > 10;
}
