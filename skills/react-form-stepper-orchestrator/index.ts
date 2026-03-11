/**
 * Calcula a porcentagem de progresso do formulário.
 */
export function calculateStepProgress(currentStep: number, totalSteps: number): number {
  // Why: Feedbacks visuais de progresso aumentam a taxa de completude de formulários longos.
  return Math.round((currentStep / totalSteps) * 100);
}
