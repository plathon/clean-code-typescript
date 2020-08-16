import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async exec(req: Request, res: Response): Promise<void> {
    const params = req.query;

    const user = {
      name: params.name as string,
      email: params.email as string,
      password: params.password as string,
    };

    try {
      await this.createUserUseCase.exec(user);
      res.status(201).json({ response: "ok!" });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { CreateUserController };
