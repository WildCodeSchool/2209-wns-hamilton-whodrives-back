import {
  MutationCreateUserInfoArgs,
  MutationUpdateUserInfoArgs,
} from "@/graphgen";
import { Repository } from "typeorm";

import ProfilPicture from "../entity/ProfilePicture";
import User from "../entity/User";
import UserInfo from "../entity/UserInfo";
import datasource from "../lib/datasource";

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
    address,
    profilPicture,
  }: MutationCreateUserInfoArgs) {
    const userInfo = await this.db.save({
      city,
      country,
      address,
      profilPicture,
    });
    return userInfo;
  }

  async updateUserInfo({
    id,
    city,
    country,
    address,
    profilPicture,
  }: MutationUpdateUserInfoArgs) {
    const userInfo = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...userInfo,
      city,
      country,
      address,
      profilPicture,
    });
  }
}

export default UserInfoController;
