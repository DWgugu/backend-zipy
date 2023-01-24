"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Service_1 = __importDefault(require("../controllers/Service"));
class ServiceRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new Service_1.default();
        routes.post("/service", controller.store);
        routes.get("/services", controller.index);
        routes.get("/service/:id", controller.show);
        routes.delete("/service/:id", controller.delete);
        return routes;
    }
}
exports.default = ServiceRoutes;
