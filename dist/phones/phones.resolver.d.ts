import { PhonesService } from './phones.service';
import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';
export declare class PhonesResolver {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    createPhone(createPhoneInput: CreatePhoneInput): Promise<Phone>;
    findAll(): Promise<Phone[]>;
    findOne(id: string): Promise<Phone>;
    updatePhone(updatePhoneInput: UpdatePhoneInput): Promise<Phone>;
    removePhone(id: string): Promise<Phone>;
}
