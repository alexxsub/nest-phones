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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneInput = void 0;
const create_phone_input_1 = require("./create-phone.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdatePhoneInput = class UpdatePhoneInput extends (0, graphql_1.PartialType)(create_phone_input_1.CreatePhoneInput) {
    id;
};
__decorate([
    (0, graphql_1.Field)({ nullable: false, description: 'ID редактируемой записи' }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], UpdatePhoneInput.prototype, "id", void 0);
UpdatePhoneInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePhoneInput);
exports.UpdatePhoneInput = UpdatePhoneInput;
//# sourceMappingURL=update-phone.input.js.map