import {Injectable} from '@nestjs/common';
import {name as appName, version as appVersion} from '../../package.json';
import * as path from "path";
import * as fs from "fs/promises";

@Injectable()
export default class HealthService {
    private readonly startTime: number;

    constructor() {
        this.startTime = Date.now();
    }

    private async getPackageTime(): Promise<string> {
        const packageFilePath = path.join(path.dirname(__filename), '..', '..', 'package.json');
        const packageFileStats = await fs.stat(packageFilePath);
        return packageFileStats.birthtime.toLocaleString();
    }

    async getHealthInfo(){
        const name: string = appName;
        const currentTime = new Date().toLocaleString();
        const upTime =  process.uptime();
        const version = appVersion;
        const packageTime = await this.getPackageTime();

        return {
            name,
            currentTime,
            upTime,
            version,
            packageTime,
        };
    }
}
