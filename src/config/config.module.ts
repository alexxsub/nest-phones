import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configService from './config.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            load: [configService],
        }),
    ],
})
export class ConfigurationModule {}
