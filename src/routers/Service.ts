import { Router } from "express";
import ServiceController from "../controllers/Service";

export default class ServiceRoutes {
    init() {
        const routes = Router();
        const controller = new ServiceController();

        routes.post("/service", controller.store);
        routes.get("/services", controller.index);
        routes.get("/service/:id", controller.show);
        routes.delete("/service/:id", controller.delete);

        return routes;
    }
}