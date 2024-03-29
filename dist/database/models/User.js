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
exports.UserModels = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let UserModels = class UserModels extends typeorm_1.BaseEntity {
    constructor(user, password) {
        super();
        this.user = user;
        this.password = password;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], UserModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "users" }),
    __metadata("design:type", String)
], UserModels.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserModels.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => index_1.ClientInputModels, clientInput => clientInput.user),
    __metadata("design:type", index_1.ClientInputModels)
], UserModels.prototype, "clientInput", void 0);
UserModels = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' }),
    __metadata("design:paramtypes", [String, String])
], UserModels);
exports.UserModels = UserModels;
