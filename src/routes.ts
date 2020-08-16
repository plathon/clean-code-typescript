import { Router } from "express";
import { createUserController } from "./controllers";

const routes = Router();

routes.get("/", (req, res) => createUserController.exec(req, res));

export { routes };
