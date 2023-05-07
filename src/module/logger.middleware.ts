import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        const timestamp = new Date().toLocaleString();
        console.log(`[${timestamp}] ${req.method} ${req.url} - Request received`);

        res.on('finish', () => {
            console.log(`[${timestamp}] ${req.method} ${req.url} - Response: ${res.statusCode}`);
        });

        next();
    }
}
