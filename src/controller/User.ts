import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import User from "../entity/User";
import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationUpdateUserArgs,
} from "@/graphgen";
import { IUserLogged } from "../resolvers/Interface";
import UserInfo from "../entity/UserInfo";

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

  async getUserByEmail({ email }: { email: string }) {
    return await this.db.findOne({ where: { email } });
  }

  async addUser({
    username,
    password,
    email,
    phone,
    firstname,
    lastname,
    date_of_birth,
  }: MutationCreateUserArgs) {
    const user = await this.db.save({
      username,
      password,
      email,
      phone,
      firstname,
      lastname,
      date_of_birth,
    });
    return user;
  }

  async assignUserInfos({ userLogged }: IUserLogged, userInfo: UserInfo) {
    return await this.db.save({
      ...userLogged,
      userInfo,
    });
  }

  async updateUser({
    id,
    username,
    password,
    email,
    phone,
    firstname,
    lastname,
    date_of_birth,
  }: MutationUpdateUserArgs) {
    const user = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...user,
      username,
      password,
      email,
      phone,
      firstname,
      lastname,
      date_of_birth,
    });
  }

  async deleteUser({ id }: MutationDeleteUserArgs) {
    let msg = "User not found";
    let msg2 = "Error request";
    const user = await this.db.findOne({ where: { id: +id } });
    if (user) {
      let result = await this.db.delete(id);
      if (result?.affected != 0) {
        return { msg: "User deleted" };
      } else {
        return msg2;
      }
    } else {
      return { msg };
    }
  }
}

export default UserController;
