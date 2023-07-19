import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import UserInfo from "../entity/UserInfo";
import ProfilPicture from "../entity/ProfilePicture";
import User from "../entity/User";
import {
  MutationCreateUserInfoArgs,
  MutationUpdateUserInfoArgs,
} from "@/graphgen";
import { IUserLogged } from "../resolvers/Interface";
import About from "../entity/About";

class UserInfoController {
  db: Repository<UserInfo>;
  dbUsere: Repository<User>;
  dbPicture: Repository<ProfilPicture>;

  constructor() {
    this.db = datasource.getRepository("UserInfo");
    this.dbPicture = datasource.getRepository("ProfilPicture");
  }

  async listUsersInfo() {
    return await this.db.find();
  }

  async getUserInfoById(id: number) {
    return await this.db.findOneBy({ id });
  }

  async createUserInfo({
    city,
    country,
    age,
    address,
  }: MutationCreateUserInfoArgs) {
    const userInfo = await this.db.save({
      city,
      country,
      age,
      address,
    });
    return userInfo;
  }

  async updateUserInfo({
    id,
    city,
    country,
    age,
    address,
  }: MutationUpdateUserInfoArgs) {
    const userInfo = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...userInfo,
      city,
      country,
      age,
      address,
    });
  }


}

export default UserInfoController;
