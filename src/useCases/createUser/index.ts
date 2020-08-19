import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserRepository } from "../../repositories/UserRepository";
import { UserPostgresDataSource } from "../../data/UserPostgresDataSource";

const userPostgresDataSource = new UserPostgresDataSource();
const userRepository = new UserRepository(userPostgresDataSource);
const createUserUseCase = new CreateUserUseCase(userRepository);

export { createUserUseCase };
