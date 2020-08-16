import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

export { createUserUseCase };
