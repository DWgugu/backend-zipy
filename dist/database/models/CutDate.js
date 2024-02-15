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
exports.CutDateModels = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let CutDateModels = class CutDateModels extends typeorm_1.BaseEntity {
    constructor(dateStart, dateEnd) {
        super();
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CutDateModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "date_start" }),
    __metadata("design:type", Date)
], CutDateModels.prototype, "dateStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "date_end" }),
    __metadata("design:type", Date)
], CutDateModels.prototype, "dateEnd", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => index_1.ClientInputModels, clientInput => clientInput.cutDate),
    __metadata("design:type", index_1.ClientInputModels)
], CutDateModels.prototype, "clientInput", void 0);
CutDateModels = __decorate([
    (0, typeorm_1.Entity)({ name: 'cut_date' }),
    __metadata("design:paramtypes", [Date, Date])
], CutDateModels);
exports.CutDateModels = CutDateModels;
