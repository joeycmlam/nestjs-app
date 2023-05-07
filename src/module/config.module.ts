import { Module } from '@nestjs/common';
import { ConfigService } from '../service/config.service';

@Module({
    providers: [
        {
            provide: ConfigService,
            useFactory: async () => {
                return await ConfigService.load();
            },
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {}
