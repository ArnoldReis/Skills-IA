/**
 * Retorna template básico de CI para Node.js.
 */
export function getCiWorkflowTemplate(nodeVersion: string = '20') {
  return `
name: Node.js CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js \${nodeVersion}
        uses: actions/setup-node@v4
        with:
          node-version: \${nodeVersion}
          cache: 'npm'
      - run: npm install
      - run: npm test
  `.trim();
}
