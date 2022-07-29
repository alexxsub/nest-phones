import { InputType, PartialType, OmitType, IntersectionType, Field } from '@nestjs/graphql';
import { Phone } from '../schemas/phone.schema';

@InputType()
export class CreatePhoneInput extends PartialType(OmitType(Phone, ['id'] as const), InputType) {
}
export default CreatePhoneInput;
