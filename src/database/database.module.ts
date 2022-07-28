import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
const DB = MongooseModule.forRoot('mongodb://localhost/nestphone');
@Module({
  imports: [DB],
})
export class DatabaseModule {}
