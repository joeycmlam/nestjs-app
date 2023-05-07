import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

export async function bootstrap(port = 3000) {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
    return app;
}
bootstrap();
