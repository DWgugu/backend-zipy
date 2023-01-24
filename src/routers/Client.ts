import { Router } from "express";
import ClientController from "../controllers/Client";

export default class ClientRoutes {
    init() {
        const routes = Router();
        const controller = new ClientController();

        routes.post("/client", controller.store);
        routes.get("/clients", controller.index);
        routes.get("/client/:id", controller.show);
        routes.delete("/client/:id", controller.delete);

        return routes;
    }
}