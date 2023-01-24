import { Router } from "express";
import CutDateController from "../controllers/CutDate";

export default class CutDateRoutes {
    init() {
        const routes = Router();
        const controller = new CutDateController();

        routes.post("/cut-date", controller.store);
        routes.get("/cut-date", controller.index);
        routes.get("/cut-date/:id", controller.show);
        routes.delete("/cut-date/:id", controller.delete);

        return routes;
    }
}