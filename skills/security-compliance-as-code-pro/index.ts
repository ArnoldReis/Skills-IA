/**
 * Regra OPA simplificada (Rego).
 */
export function getCompliancePolicy() {
  return `
    package compliance
    default allow = false
    allow {
        input.method == "GET"
        input.user.role == "auditor"
    }
  `;
}
