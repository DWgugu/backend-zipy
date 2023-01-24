import Application from "./app";

const application = new Application();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const portLocal = 3000;

application.init();
application.dev(port);