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

  async getUser(id: number) {
    return await this.db.findOneBy({ id });
  }
  async getUserByEmail({email}:{email: string}) {
    return await this.db.findOneBy({ email });
  }

  async addUser({ username, password, email, phone, }: { username: string, password: string, email: string, phone: string }) {
      const user = await this.db.save({
        username,  
        password, 
        email, 
        phone, 
      });
      return user;
  }
}
export default UserController;
