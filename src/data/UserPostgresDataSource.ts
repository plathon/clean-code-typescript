import { User } from "../entities/User";
import { connection } from "../config/database";
import { IUserDataSource } from "./IUserDataSource";

export class UserPostgresDataSource implements IUserDataSource {
  async FindOrCreate(data: User) {
    const database = await connection;
    const repo = database.getRepository(User);
    const result = await repo.save(data);
    return result;
  }
}
