import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import AppController from '../controller/app.controller';
import AppService from '../service/app.service';
import HealthController from "../controller/health.controller";
import HealthService from "../service/health.service";
import AccountController from "../controller/account.controller";
import AccountService from "../service/account.service";
import DatabaseModule from "./database.module";
import LoggerMiddleware from "./logger.middleware";

@Module({
    imports: [DatabaseModule],
    controllers: [AppController, HealthController, AccountController],
    providers: [AppService, HealthService, AccountService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
    }
}
