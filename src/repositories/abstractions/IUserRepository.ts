import { User } from "../../entities/User";

export interface IUserRepository {
  CreateUserIfNotExists(user: User): Promise<User>;
}
