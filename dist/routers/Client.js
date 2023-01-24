"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Client_1 = __importDefault(require("../controllers/Client"));
class ClientRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new Client_1.default();
        routes.post("/client", controller.store);
        routes.get("/clients", controller.index);
        routes.get("/client/:id", controller.show);
        routes.delete("/client/:id", controller.delete);
        return routes;
    }
}
exports.default = ClientRoutes;
