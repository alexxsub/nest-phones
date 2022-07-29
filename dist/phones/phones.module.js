"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesModule = void 0;
const common_1 = require("@nestjs/common");
const phones_service_1 = require("./phones.service");
const phones_resolver_1 = require("./phones.resolver");
const phone_schema_1 = require("./schemas/phone.schema");
const mongoose_1 = require("@nestjs/mongoose");
let PhonesModule = class PhonesModule {
};
PhonesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: phone_schema_1.Phone.name, schema: phone_schema_1.PhoneSchema }]),
        ],
        providers: [phones_resolver_1.PhonesResolver, phones_service_1.PhonesService],
    })
], PhonesModule);
exports.PhonesModule = PhonesModule;
//# sourceMappingURL=phones.module.js.map