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
exports.ClientInputModels = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let ClientInputModels = class ClientInputModels extends typeorm_1.BaseEntity {
    constructor(cutDateId, clientId, userId) {
        super();
        this.cutDateId = cutDateId;
        this.clientId = clientId;
        this.userId = userId;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ClientInputModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cut_date_id" }),
    __metadata("design:type", Number)
], ClientInputModels.prototype, "cutDateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "client_id" }),
    __metadata("design:type", Number)
], ClientInputModels.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id" }),
    __metadata("design:type", Number)
], ClientInputModels.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => index_1.ClientModels, client => client.clientInput),
    (0, typeorm_1.JoinColumn)({ name: "client_id", referencedColumnName: "id" }),
    __metadata("design:type", index_1.ClientModels)
], ClientInputModels.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => index_1.CutDateModels, cutDate => cutDate.clientInput),
    (0, typeorm_1.JoinColumn)({ name: "cut_date_id", referencedColumnName: "id" }),
    __metadata("design:type", index_1.CutDateModels)
], ClientInputModels.prototype, "cutDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => index_1.UserModels, user => user.clientInput),
    (0, typeorm_1.JoinColumn)({ name: "user_id", referencedColumnName: "id" }),
    __metadata("design:type", index_1.UserModels)
], ClientInputModels.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => index_1.WorkedDateModels, workedDate => workedDate.clientInput),
    __metadata("design:type", index_1.WorkedDateModels)
], ClientInputModels.prototype, "workedDate", void 0);
ClientInputModels = __decorate([
    (0, typeorm_1.Entity)({ name: 'zipy.client_input' }),
    __metadata("design:paramtypes", [Number, Number, Number])
], ClientInputModels);
exports.ClientInputModels = ClientInputModels;
