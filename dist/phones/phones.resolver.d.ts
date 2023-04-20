import { PhonesService } from './phones.service';
import { CreatePhoneInput } from './dto/create-phone.input';
import { UpdatePhoneInput } from './dto/update-phone.input';
export declare class PhonesResolver {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    createPhone(createPhoneInput: CreatePhoneInput): Promise<import("./schemas/phone.chema").Phone>;
    findAll(): Promise<import("./schemas/phone.chema").Phone[]>;
    findOne(id: string): Promise<import("./schemas/phone.chema").Phone>;
    updatePhone(updatePhoneInput: UpdatePhoneInput): Promise<import("./schemas/phone.chema").Phone>;
    removePhone(id: string): Promise<import("./schemas/phone.chema").Phone>;
}
