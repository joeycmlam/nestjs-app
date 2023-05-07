import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../service/health.service';

@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @Get()
    getHealthInfo() {
        return this.healthService.getHealthInfo();
    }
}
