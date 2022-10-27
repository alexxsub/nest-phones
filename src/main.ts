import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger, ValidationPipe } from '@nestjs/common';
import configService from './config/config.service';
import { LoggerInterceptor } from './logger/logger.interceptor';
import { LoggerService } from './logger/logger.service';


// import { json } from 'body-parser';
// import * as compression from 'compression';
// import * as cookieParser from 'cookie-parser';
// import helmet from 'helmet';

async function bootstrap() {
  try {
  const {
    app: { origin, port },
    httpsOptions,
} = configService();
  const app = await NestFactory.create(AppModule,
    {
      bufferLogs: true,
      cors: { origin, credentials: true },
      httpsOptions,
  });

  // app.use(compression());
  // app.use(helmet({ contentSecurityPolicy: false }));
  // app.use(cookieParser());
  // app.use(json({ limit: '1mb', type: 'application/json' }));

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

  app.useGlobalInterceptors(new LoggerInterceptor());
  //const Logger = app.get(LoggerService);
  //app.useLogger();

  await app.listen(port);
  
  Logger.debug(`🤬 App listening at ${origin}:${port}`,'Bootstrap');
}
catch (e) {
  Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false)
  process.exit()
}
}
 bootstrap().catch(e => {
	Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false)
	throw e
})
//sudo netstat -lntup | grep ":3000"