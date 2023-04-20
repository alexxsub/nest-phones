import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const HOST="localhost";
  const PORT="3000";
  await app.listen(3000, 'localhost',()=>{
    console.log(`🚀 Nest server started: http://${HOST}:${PORT}`)
    
  });
}
bootstrap();
