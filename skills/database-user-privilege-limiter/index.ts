/**
 * Comando SQL para criar usuário RO.
 */
export function getReadonlyUserSql(user: string, pass: string): string {
  return `CREATE USER \${user} WITH PASSWORD '\${pass}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO \${user};`;
}
