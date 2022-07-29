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
exports.PhonesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const phones_service_1 = require("./phones.service");
const phone_schema_1 = require("./schemas/phone.schema");
const create_phone_input_1 = require("./dto/create-phone.input");
const update_phone_input_1 = require("./dto/update-phone.input");
let PhonesResolver = class PhonesResolver {
    constructor(phonesService) {
        this.phonesService = phonesService;
    }
    createPhone(createPhoneInput) {
        return this.phonesService.create(createPhoneInput);
    }
    findAll() {
        return this.phonesService.findAll();
    }
    findOne(id) {
        const res = this.phonesService.findOne(id);
        if (!res) {
            throw new common_1.NotFoundException(`Record ${id} not found`);
        }
        return res;
    }
    updatePhone(updatePhoneInput) {
        return this.phonesService.update(updatePhoneInput);
    }
    removePhone(id) {
        const res = this.phonesService.remove(id);
        if (!res) {
            throw new common_1.NotFoundException(id);
        }
        return res;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => phone_schema_1.Phone),
    __param(0, (0, graphql_1.Args)('createPhoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_input_1.CreatePhoneInput]),
    __metadata("design:returntype", void 0)
], PhonesResolver.prototype, "createPhone", null);
__decorate([
    (0, graphql_1.Query)(() => [phone_schema_1.Phone], { name: 'phones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhonesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => phone_schema_1.Phone, { name: 'phone' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => phone_schema_1.Phone),
    __param(0, (0, graphql_1.Args)('updatePhoneInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_phone_input_1.UpdatePhoneInput]),
    __metadata("design:returntype", void 0)
], PhonesResolver.prototype, "updatePhone", null);
__decorate([
    (0, graphql_1.Mutation)(() => phone_schema_1.Phone),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesResolver.prototype, "removePhone", null);
PhonesResolver = __decorate([
    (0, graphql_1.Resolver)(() => phone_schema_1.Phone),
    __metadata("design:paramtypes", [phones_service_1.PhonesService])
], PhonesResolver);
exports.PhonesResolver = PhonesResolver;
//# sourceMappingURL=phones.resolver.js.map