import { Router } from "express";
import ClientInputController from "../controllers/ClientInput";

export default class ClientInputRoutes {
    init() {
        const routes = Router();
        const controller = new ClientInputController();

        routes.post("/client-input", controller.store);
        routes.get("/client-input", controller.index);
        routes.get("/client-input/:id", controller.show);
        routes.delete("/client-input/:id", controller.delete);

        return routes;
    }
}