import { User } from "../entities/User";

export interface IUserDataSource {
  FindOrCreate(user: User): Promise<User>;
}
