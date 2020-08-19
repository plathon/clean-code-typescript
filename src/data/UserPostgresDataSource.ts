import { User } from "../entities/User";
import { connection } from "../config/database";
import { IUserDataSource } from "./IUserDataSource";

export class UserPostgresDataSource implements IUserDataSource {
  async FindOrCreate(data: User) {
    connection
      .then((con) => {
        console.log(data);
        const repo = con.getRepository(User);
        repo.save(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
    return data;
  }
}
