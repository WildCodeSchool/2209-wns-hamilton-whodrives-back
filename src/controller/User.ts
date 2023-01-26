import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import User from "../entity/User";
import {MutationCreateUserArgs, MutationDeleteUserArgs, MutationUpdateUserArgs} from "@/graphgen"

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
    return await this.db.findOne({where:{email}});
  }

  async addUser({ username, password, email, phone, }: MutationCreateUserArgs) {
      const user = await this.db.save({
        username,  
        password, 
        email, 
        phone, 
      });
      return user;
  }
  async updateUser({ id, username, email, phone }: MutationUpdateUserArgs ) {
    const user = await this.db.findOne({where:{id: +id}});
      return await this.db.save({
        ...user,
        username,
        email,
        phone
      });

}
  async deleteUser({ id }: MutationDeleteUserArgs ) {
    let msg = "user Introuvable"
    const user = await this.db.findOne({where:{id: +id}});
    if(!user){
      return msg
    }
    return await this.db.remove(user);
  

    }
    
}
export default UserController;

