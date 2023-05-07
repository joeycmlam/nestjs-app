// src/connectors/PostgresConnector.ts
import { Pool } from 'pg';
import { Service, Inject } from 'typedi';
import { DatabaseConfig } from '../config/DatabaseConfig';

@Service()
export class PostgresConnector {
    private pool: Pool;

    constructor(@Inject(() => DatabaseConfig) databaseConfig: DatabaseConfig) {
        this.pool = new Pool(databaseConfig);
    }

    async selectTable(sql: string): Promise<any[]> {
        // Filter table name to avoid SQL injection
        const queryText= sql.replace(/[^a-zA-Z0-9_]/g, '');

        try {
            const client = await this.pool.connect();
            const result = await client.query(queryText);
            client.release();
            return result.rows;
        } catch (err) {
            console.error('Error executing query', err.stack);
            return [];
        }
    }
}
