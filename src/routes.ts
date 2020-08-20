import { Router } from "express";
import { createUserController } from "./controllers";

const routes = Router();

routes.post("/users", createUserController.exec);

export { routes };
