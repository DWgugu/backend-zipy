"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GenerateXLSX_1 = __importDefault(require("../controllers/GenerateXLSX"));
class GenerateRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new GenerateXLSX_1.default();
        routes.get("/generate/:idCutDate/:idUser", controller.show);
        routes.get("/generate-xlsx/:idCutDate/:idUser", controller.index);
        return routes;
    }
}
exports.default = GenerateRoutes;
