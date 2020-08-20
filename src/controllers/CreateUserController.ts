import { Request, Response, NextFunction } from "express";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  exec = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const params = req.query;

    const user = {
      name: params.name as string,
      email: params.email as string,
      password: params.password as string,
    };
    try {
      await this.createUserUseCase.exec(user);
      res.status(201).json({ response: "ok!" });
    } catch (err) {
      next(err);
    }
  };
}

export { CreateUserController };
