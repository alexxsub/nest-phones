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
exports.PhoneSchema = exports.Phone = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
mongoose_2.Schema.Types.String.set('trim', true);
let Phone = class Phone {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { description: 'Уникальный идентификатор записи' }),
    __metadata("design:type", String)
], Phone.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false, description: 'Номер телефона' }),
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Phone.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false, description: 'Имя владельца телефона ' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Phone.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Адресс владельца телефона ' }),
    (0, mongoose_1.Prop)({
        set: (content) => {
            return content.trim();
        },
    }),
    __metadata("design:type", String)
], Phone.prototype, "address", void 0);
Phone = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.InputType)('PhoneInput')
], Phone);
exports.Phone = Phone;
exports.PhoneSchema = mongoose_1.SchemaFactory.createForClass(Phone);
//# sourceMappingURL=phone.chema.js.map