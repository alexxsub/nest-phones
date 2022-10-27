import { Phone } from '../schemas/phone.schema';
declare const CreatePhoneInput_base: import("@nestjs/common").Type<Partial<Omit<Phone, "id">>>;
export declare class CreatePhoneInput extends CreatePhoneInput_base {
}
export default CreatePhoneInput;
