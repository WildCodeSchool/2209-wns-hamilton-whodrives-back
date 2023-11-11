import {
  MutationCreateUserInfoArgs,
  MutationUpdateUserInfoArgs,
} from "@/graphgen";
import { Repository } from "typeorm";

import ProfilePicture from "../entity/ProfilePicture";
import User from "../entity/User";
import UserInfo from "../entity/UserInfo";
import datasource from "../lib/datasource";

class UserInfoController {
  db: Repository<UserInfo>;
  dbUsere: Repository<User>;
  dbPicture: Repository<ProfilePicture>;

  constructor() {
    this.db = datasource.getRepository("UserInfo");
    this.dbPicture = datasource.getRepository("ProfilePicture");
  }

  async listUserInfos() {
    return await this.db.find();
  }

  async getUserInfoById(id: number) {
    return await this.db.findOneBy({ id });
  }

  async createUserInfo({
    city,
    country,
    address,
    profilePicture,
  }: MutationCreateUserInfoArgs) {
    const userInfo = await this.db.save({
      city,
      country,
      address,
      profilePicture,
    });
    return userInfo;
  }

  async updateUserInfo({
    id,
    city,
    country,
    address,
    profilePicture,
  }: MutationUpdateUserInfoArgs) {
    const userInfo = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...userInfo,
      city,
      country,
      address,
      profilePicture,
    });
  }
}

export default UserInfoController;
