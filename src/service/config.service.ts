import * as fs from 'fs/promises';
import * as yaml from 'js-yaml';
import { DatabaseConfig } from '../interface/database-config.interface';

export class ConfigService {
    private readonly config: { database: DatabaseConfig };

    constructor(config: { database: DatabaseConfig }) {
        this.config = config;
    }

    static async load(): Promise<ConfigService> {
        const yamlFile = await fs.readFile('src/config/config.yaml', 'utf8');
        const config = yaml.load(yamlFile);
        return new ConfigService(config);
    }

    get databaseConfig(): DatabaseConfig {
        return this.config.database;
    }
}
