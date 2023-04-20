"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const HOST = "localhost";
    const PORT = "3000";
    await app.listen(3000, 'localhost', () => {
        console.log(`🚀 Nest server started: http://${HOST}:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map