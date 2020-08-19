import { createConnection, Connection } from "typeorm";

class Database {
  constructor(private createConnection: any) {}
  async connection(): Promise<Connection> {
    const conn = await this.createConnection();
    return conn;
  }
}

const connection = new Database(createConnection).connection();

export { connection };
