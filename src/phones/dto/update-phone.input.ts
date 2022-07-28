import { CreatePhoneInput } from './create-phone.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class UpdatePhoneInput extends PartialType(CreatePhoneInput) {
  @Field({ nullable: false, description: 'ID редактируемой записи' })
  @IsMongoId()
  id: string;
}
