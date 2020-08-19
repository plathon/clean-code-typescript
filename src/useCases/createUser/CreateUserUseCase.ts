import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async exec(data: CreateUserRequestDTO): Promise<void> {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    await this.userRepository.CreateUserIfNotExists(user);
  }
}
