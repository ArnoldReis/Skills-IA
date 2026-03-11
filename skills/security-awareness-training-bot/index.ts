/**
 * Template de email de awareness.
 */
export function getPhishingTemplate() {
  return {
    subject: 'Urgent: Password Reset Required',
    body: 'Click here to secure your account.',
    isSimulation: true
  };
}
