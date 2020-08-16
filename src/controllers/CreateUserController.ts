import { Request, Response } from "express";

class CreateUserController {
  exec(req: Request, res: Response): void {
    res.status(201).json({ response: "ok!" });
  }
}

export { CreateUserController };
