"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config/config.service");
const logger_interceptor_1 = require("./logger/logger.interceptor");
async function bootstrap() {
    try {
        const { app: { origin, port }, httpsOptions, } = (0, config_service_1.default)();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            bufferLogs: true,
            cors: { origin, credentials: true },
            httpsOptions,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }));
        app.useGlobalInterceptors(new logger_interceptor_1.LoggerInterceptor());
        await app.listen(port);
        common_1.Logger.debug(`🤬 App listening at ${origin}:${port}`, 'Bootstrap');
    }
    catch (e) {
        common_1.Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
        process.exit();
    }
}
bootstrap().catch(e => {
    common_1.Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
    throw e;
});
//# sourceMappingURL=main.js.map