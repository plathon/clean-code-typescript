import { IUserRepository } from "./IUserRepository";
import { User } from "../entities/User";
import { IUserDataSource } from "../data/IUserDataSource";

export class UserRepository implements IUserRepository {
  constructor(private userDataSource: IUserDataSource) {}
  async CreateUserIfNotExists(data: User) {
    const result = await this.userDataSource.FindOrCreate(data);
    return result;
  }
}
