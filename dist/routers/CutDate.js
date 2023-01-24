"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CutDate_1 = __importDefault(require("../controllers/CutDate"));
class CutDateRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new CutDate_1.default();
        routes.post("/cut-date", controller.store);
        routes.get("/cut-date", controller.index);
        routes.get("/cut-date/:id", controller.show);
        routes.delete("/cut-date/:id", controller.delete);
        return routes;
    }
}
exports.default = CutDateRoutes;
