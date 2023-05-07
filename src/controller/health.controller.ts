import { Controller, Get } from '@nestjs/common';
import HealthService  from '../service/health.service';

@Controller('health')
export default class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    getHealthInfo() {
        return this.healthService.getHealthInfo();
    }
}
