import { Router } from "express";
import { createUserController } from "./controllers";

const routes = Router();

routes.get("/", createUserController.exec);

export { routes };
