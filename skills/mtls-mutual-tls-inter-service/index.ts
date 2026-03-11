/**
 * Config de cert TLS.
 */
export const tlsOptions = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  requestCert: true, // Why: Exige que o cliente também se identifique com um certificado.
  rejectUnauthorized: true
};
