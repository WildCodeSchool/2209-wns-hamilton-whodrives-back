import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import User from "../entity/User";

class UserController {
  db: Repository<User>;
  constructor() {
    this.db = datasource.getRepository("User");
  }

  async listUsers() {
    return await this.db.find();
  }

  async addUser({ username, firstname, lastname, password, email, phone, address, birthday }: { username: string, firstname: string, lastname: string, password: string, email: string, phone: string, address: string, birthday: Date }) {
      const user = await this.db.save({
        username, 
        firstname, 
        lastname, 
        password, 
        email, 
        phone, 
        address, 
        birthday
      });
      // const user = await this.db.save({
      //   username, 
      //   firstname, 
      //   lastname, 
      //   password, 
      //   email, 
      //   phone, 
      //   address, 
      //   birthday
      // });
      return user;
  }
}
export default UserController;

