import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesResolver } from './phones.resolver';
import { Phone, PhoneSchema } from './schemas/phone.chema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }]),
  ],
  providers: [PhonesResolver, PhonesService],
})
export class PhonesModule {}
