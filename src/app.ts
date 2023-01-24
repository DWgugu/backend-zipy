import express from "express";
import cors from "cors";
import Database from "./database/connections/database";
import UserRoutes from "./routers/User";
import CutDateRoutes from "./routers/CutDate";
import ClientRoutes from "./routers/Client";
import ServiceRoutes from "./routers/Service";
import WorkedDateRoutes from "./routers/WorkedDate";
import ClientInputRoutes from "./routers/ClientInput";
import GenerateRoutes from "./routers/GenerateXLSX";

export default class Application {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    async init() {
        this.config();
        this.routers();
        await this.database();
    }

    dev(portLocal: number) {
        this.#express.listen(portLocal, () => {
            console.log(`Rodando na porta ${portLocal}...`);
        })
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private middlewares() {
        
    }

    private errors() {

    }

    private routers() {
        const userRoutes = new UserRoutes().init();
        this.#express.use(userRoutes);

        const cutdateRoutes = new CutDateRoutes().init();
        this.#express.use(cutdateRoutes);

        const clientRoutes = new ClientRoutes().init();
        this.#express.use(clientRoutes);

        const serviceRoutes = new ServiceRoutes().init();
        this.#express.use(serviceRoutes);

        const workedDateRoutes = new WorkedDateRoutes().init();
        this.#express.use(workedDateRoutes);

        const clientInputRoutes = new ClientInputRoutes().init();
        this.#express.use(clientInputRoutes);

        const generateRoutes = new GenerateRoutes().init();
        this.#express.use(generateRoutes);
    }

    private async database() {
        await Database;
    }
}