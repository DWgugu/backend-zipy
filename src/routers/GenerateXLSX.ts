import { Router } from "express";
import GenerateXLSXController from "../controllers/GenerateXLSX";

export default class GenerateRoutes {
    init() {
        const routes = Router();
        const controller = new GenerateXLSXController();

        routes.get("/generate/:idCutDate/:idUser", controller.show);
        routes.get("/generate-xlsx/:idCutDate/:idUser", controller.index);

        return routes;
    }
}