import { User } from "../entities/User";
import { connection } from "../config/database";
import { IUserDataSource } from "./IUserDataSource";
import { Http400Error } from "../errors/Http400Error";

export class UserPostgresDataSource implements IUserDataSource {
  async FindOrCreate(data: User) {
    const database = await connection;
    const repo = database.getRepository(User);
    const result = await repo.save(data);
    return result;
  }
}
