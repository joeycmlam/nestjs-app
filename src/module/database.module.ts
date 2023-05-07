import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../service/config.service';
import { Account } from '../entity/account.entity';
import { ConfigModule } from './config.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    ...configService.databaseConfig,
                    type: 'postgres',
                    synchronize: false,
                    autoLoadEntities: true,
                };
            },
        }),
        TypeOrmModule.forFeature([Account]),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
