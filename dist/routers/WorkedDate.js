"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WorkedDate_1 = __importDefault(require("../controllers/WorkedDate"));
class WorkedDateRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new WorkedDate_1.default();
        routes.post("/worked-date", controller.store);
        routes.get("/worked-date", controller.index);
        routes.get("/worked-date/:id", controller.show);
        routes.delete("/worked-date/:id", controller.delete);
        return routes;
    }
}
exports.default = WorkedDateRoutes;
