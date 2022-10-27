import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
      MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => {
      
              const host = configService.get<string>('db.host'),
               user = configService.get<string>('db.user'),
               password = configService.get<string>('db.password'),
               dbName = configService.get<string>('db.name');

              const uri = `mongodb://${user}:${password}@${host}`;

              return {
                  uri,
                  dbName,
                  retryDelay: 500,
                  retryAttempts: 3,
                  authSource: 'admin',
                  compressors: ['zstd'],
              };
          },
        
          inject: [ConfigService],
      }
      
      ),
      
  ],
})
export class DatabaseModule {}
