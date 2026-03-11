/**
 * Metadata de registro de serviço.
 */
export function getServiceRegistration(name: string, port: number) {
  return {
    ID: `\${name}-\${Date.now()}`,
    Service: name,
    Port: port,
    Check: { HTTP: `http://localhost:\${port}/health`, Interval: '10s' }
  };
}
