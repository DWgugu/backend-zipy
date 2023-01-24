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
exports.WorkedDateModels = void 0;
const typeorm_1 = require("typeorm");
const index_1 = require("./index");
let WorkedDateModels = class WorkedDateModels extends typeorm_1.BaseEntity {
    constructor(pieceValue, quantity, date, serviceId, clientInputId) {
        super();
        this.pieceValue = pieceValue;
        this.quantity = quantity;
        this.date = date;
        this.serviceId = serviceId;
        this.clientInputId = clientInputId;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], WorkedDateModels.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "piece_value" }),
    __metadata("design:type", Number)
], WorkedDateModels.prototype, "pieceValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkedDateModels.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], WorkedDateModels.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "service_id" }),
    __metadata("design:type", Number)
], WorkedDateModels.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "client_input_id" }),
    __metadata("design:type", Number)
], WorkedDateModels.prototype, "clientInputId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => index_1.ServiceModels, service => service.workedDate),
    (0, typeorm_1.JoinColumn)({ name: "service_id", referencedColumnName: "id" }),
    __metadata("design:type", index_1.ServiceModels)
], WorkedDateModels.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => index_1.ClientInputModels, clientInput => clientInput.workedDate),
    (0, typeorm_1.JoinColumn)({ name: "client_input_id", referencedColumnName: "id" }),
    __metadata("design:type", index_1.ClientInputModels)
], WorkedDateModels.prototype, "clientInput", void 0);
WorkedDateModels = __decorate([
    (0, typeorm_1.Entity)({ name: 'zipy.worked_date' }),
    __metadata("design:paramtypes", [Number, Number, Date, Number, Number])
], WorkedDateModels);
exports.WorkedDateModels = WorkedDateModels;
