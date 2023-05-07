import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import {HealthController} from "../controller/health.controller";
import {HealthService} from "../service/health.service";
import {AccountController} from "../controller/account.controller";
import AccountService from "../service/account.service";
import {DatabaseModule} from "./database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [AppController, HealthController, AccountController],
    providers: [AppService, HealthService, AccountService],
})
export class AppModule {}
