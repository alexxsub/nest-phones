import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';
import { Model } from 'mongoose';
import { Phone, PhoneDocument } from './schemas/phone.chema';
export declare class PhonesService {
    private phoneModel;
    constructor(phoneModel: Model<PhoneDocument>);
    create(createPhoneInput: CreatePhoneInput): Promise<Phone>;
    findAll(): Promise<Phone[]>;
    findOne(id: string): Promise<Phone>;
    update(updatePhoneInput: UpdatePhoneInput): Promise<Phone>;
    remove(id: string): Promise<Phone>;
}
