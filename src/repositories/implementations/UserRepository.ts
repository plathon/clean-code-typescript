import { IUserRepository } from "../abstractions/IUserRepository";
import { User } from "../../entities/User";

export class UserRepository implements IUserRepository {
  async CreateUserIfNotExists(data: User) {
    const user = new User("test", "test@test", "123");
    return user;
  }
}
