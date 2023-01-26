import { ChildEntity, Repository } from "typeorm";
import datasource from "../lib/datasource";
import UserInfo from "../entity/UserInfo";
import ProfilPicture from "../entity/ProfilPicture";
import User from "src/entity/User";
import { MutationCreatUserInfoArgs, MutationUpdateUserInfoArgs } from "@/graphgen";


class UserInfoController {
  db: Repository<UserInfo>;
  dbUsere: Repository<User>;
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

async creatUserInfo({id, city, country, firstname, lastname, age, birthday, address, profilPictureId }: MutationCreatUserInfoArgs) {
 const user = await this.db.findOne({ where: { id: +id } });
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
async updateUserInfo({ id, city, country, firstname, lastname, age, birthday, address}: MutationUpdateUserInfoArgs ){
    const userInfo = await this.db.findOne({where: {id: + id}});
    
    
      return await this.db.save({
        ...userInfo,
       // city: city ?? undefined,
        city,
        country,
        firstname,
        lastname,
        age,
        birthday,
        address
      });

console.log(userInfo);
        
    

    
}
}


export default UserInfoController;