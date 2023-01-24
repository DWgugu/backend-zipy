import { Router } from "express";
import UserController from "../controllers/User";

export default class UserRoutes {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.get("/users", controller.index);
        routes.get("/user/:id", controller.show);
        routes.post("/user", controller.store);
        routes.post("/login", controller.login);
        routes.delete("/user/:id", controller.delete);

        return routes;
    }
}