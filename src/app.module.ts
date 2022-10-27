import { Module } from '@nestjs/common';
import { ApolloModule } from './apollo/apollo.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule} from './config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from './phones/phones.module';
import { LoggingPlugin } from './apollo/logging.plugin';

@Module({
  imports: [ConfigurationModule,DatabaseModule, ApolloModule, PhonesModule],
  controllers: [AppController],
  providers: [AppService, LoggingPlugin],
})
export class AppModule {}
