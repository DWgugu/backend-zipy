import { Router } from "express";
import WorkedDateController from "../controllers/WorkedDate";

export default class WorkedDateRoutes {
    init() {
        const routes = Router();
        const controller = new WorkedDateController();

        routes.post("/worked-date", controller.store);
        routes.get("/worked-date", controller.index);
        routes.get("/worked-date/:id", controller.show);
        routes.delete("/worked-date/:id", controller.delete);

        return routes;
    }
}