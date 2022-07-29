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
const mongoose_1 = require("@nestjs/mongoose");
let Phone = class Phone {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Phone.prototype, "number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Phone.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        set: (content) => {
            return content.trim();
        },
    }),
    __metadata("design:type", String)
], Phone.prototype, "address", void 0);
Phone = __decorate([
    (0, mongoose_1.Schema)()
], Phone);
exports.Phone = Phone;
const PhoneSchema = mongoose_1.SchemaFactory.createForClass(Phone);
exports.PhoneSchema = PhoneSchema;
PhoneSchema.index({ name: 'text', number: 'text', address: 'text' });
//# sourceMappingURL=_phone.chema.js.map