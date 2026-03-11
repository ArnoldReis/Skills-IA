/**
 * Inspeciona o comando bruto SQL enviado e devolve os riscos de travamento em banco de dados vivo.
 * @param sqlRaw Instrução SQL pura.
 * @returns Array contendo os bloqueios de segurança da operação.
 */
export function validateZeroDowntime(sqlRaw: string): string[] {
    const alerts: string[] = [];
    
    // Why: Um DROP COLUMN tranca (lock row/table) no PostgreSQL causando timeout em Selects paralelos.
    // Primeiro remova a cláusula no ORM, libere deploy, depois remova físicamente no BD dias depois.
    if (sqlRaw.toUpperCase().includes('DROP COLUMN')) {
        alerts.push('[DANGER]: DROP COLUMN bloqueia transações na tabela inteira. Sugestão: Crie uma View e oculte-a primeiro.');
    }

    // Tricky logic: Adicionar constraints pode forçar um Lock. Usa-se validação de row asyncronamente antes ou CONCURRENTLY.
    if (sqlRaw.toUpperCase().includes('ADD CONSTRAINT') && !sqlRaw.toUpperCase().includes('NOT VALID')) {
        alerts.push('[WARNING]: Adição de constraint sem NOT VALID faz um FULL TABLE SCAN gerando travamento. Crie a constraint como NOT VALID e então rode o VALIDATE CONSTRAINT.');
    }
    
    return alerts;
}
