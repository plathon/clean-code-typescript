import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepository } from "../../repositories/UserRepository";

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

export { createUserUseCase };
