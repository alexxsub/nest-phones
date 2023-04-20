"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const phone_chema_1 = require("./schemas/phone.chema");
let PhonesService = class PhonesService {
    constructor(phoneModel) {
        this.phoneModel = phoneModel;
    }
    async create(createPhoneInput) {
        const createdPhone = new this.phoneModel(createPhoneInput);
        return await createdPhone.save();
    }
    async findAll() {
        return await this.phoneModel.find().exec();
    }
    async findOne(id) {
        return await this.phoneModel.findById({ _id: id });
    }
    async update(updatePhoneInput) {
        const id = updatePhoneInput.id;
        delete updatePhoneInput.id;
        const updatedPhone = await this.phoneModel.findByIdAndUpdate({ _id: id }, updatePhoneInput, { new: true });
        return updatedPhone;
    }
    async remove(id) {
        const deletedPhone = await this.phoneModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedPhone;
    }
};
PhonesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(phone_chema_1.Phone.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PhonesService);
exports.PhonesService = PhonesService;
//# sourceMappingURL=phones.service.js.map