import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/abstractions/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(data: CreateUserRequestDTO): Promise<void> {
    const user = new User(data.name, data.email, data.password);
    await this.userRepository.CreateUserIfNotExists(user);
  }
}
