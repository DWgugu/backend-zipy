"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientInput_1 = __importDefault(require("../controllers/ClientInput"));
class ClientInputRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new ClientInput_1.default();
        routes.post("/client-input", controller.store);
        routes.get("/client-input", controller.index);
        routes.get("/client-input/:id", controller.show);
        routes.delete("/client-input/:id", controller.delete);
        return routes;
    }
}
exports.default = ClientInputRoutes;
