import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import UserInfo from "src/entity/UserInfo";
import ProfilPicture from "../entity/ProfilPicture";
import { MutationCreatUserInfoArgs, MutationUpdateUserInfoArgs } from "@/graphgen";


class UserInfoController {
  db: Repository<UserInfo>;
  dbPicture: Repository<ProfilPicture>;

  constructor() {
    this.db = datasource.getRepository("User");
    this.dbPicture = datasource.getRepository("ProfilPicture");
  }

  async listUsersInfo() {
    return await this.db.find();
  }

  async getUserInfoById(id: number) {
    return await this.db.findOneBy({ id });
    }

async creatUserInfo({ id, city, country, firstname, lastname, age, birthday, address, profilPictureId }: MutationCreatUserInfoArgs) {
    const user = await this.db.findOneBy({ id: +id });
    const userInfo = await this.db.save({

        city,
        country,
        firstname,
        lastname,
        age,
        birthday,
        address,
        profilPictureId,
    });
    return userInfo;
}

// update le user cible grace a son token 
async updateUserInfo({ id, city, country, firstname, lastname, age, birthday, address }: MutationUpdateUserInfoArgs) {
  const user = await this.db.findOneBy({ id: +id });
    const userInfo = await this.db.save({
        city,
        country,
        firstname,
        lastname,
        age,
        birthday,
        address,
    });
    return userInfo;
}


}

export default UserInfoController;