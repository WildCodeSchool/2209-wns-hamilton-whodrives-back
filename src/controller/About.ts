import { MutationCreateAboutArgs, MutationUpdateAboutArgs } from "@/graphgen";
import { Repository } from "typeorm";

import About from "../entity/About";
import ChatOption from "../entity/ChatOption";
import MusicOption from "../entity/MusicOption";
import UserInfo from "../entity/UserInfo";
import datasource from "../lib/datasource";

class AboutController {
  db: Repository<About>;
  dbOptionMusic: Repository<MusicOption>;
  dbOptionChat: Repository<ChatOption>;
  dbUserInfo: Repository<UserInfo>;

  constructor() {
    this.db = datasource.getRepository("About");
    this.dbOptionMusic = datasource.getRepository("MusicOption");
    this.dbOptionChat = datasource.getRepository("ChatOption");
    this.dbUserInfo = datasource.getRepository("UserInfo");
  }

  async getAboutById(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getMusicOptionId(musicOptionId: number) {
    return await this.dbOptionMusic.findOneBy({ id: +musicOptionId });
  }

  async getChatOptionId(chatOptionId: number) {
    return await this.dbOptionChat.findOneBy({ id: +chatOptionId });
  }

  async createAbout({
    animal,
    description,
    cigarette,
    chatOptionId,
    musicOptionId,
  }: MutationCreateAboutArgs) {
    const musicOption = await this.dbOptionMusic.findOne({
      where: { id: +musicOptionId },
    });
    const chatOption = await this.dbOptionChat.findOne({
      where: { id: +chatOptionId },
    });
    if (musicOption && chatOption) {
      const about = await this.db.save({
        animal,
        cigarette,
        description,
        musicOption,
        chatOption,
      });
      return about;
    } else {
      throw new Error("Please check your preferences");
    }
  }
  async assignAbout({ userLogged }, about: About) {
    const userInfoID = userLogged.userInfo.id;
    console.log("useID", userInfoID);
    return await this.dbUserInfo.save({
      id: userInfoID,
      about,
    });
  }
  async updateAbout({
    id,
    animal,
    description,
    cigarette,
    chatOptionId,
    musicOptionId,
  }: MutationUpdateAboutArgs) {
    const chatOption = await this.dbOptionChat.findOne({
      where: { id: chatOptionId },
    });
    const musicOption = await this.dbOptionMusic.findOne({
      where: { id: musicOptionId },
    });
    const about = await this.db.findOne({ where: { id: +id } });

    return await this.db.save({
      ...about,
      animal,
      chatOption,
      description,
      musicOption,
      cigarette,
    });
  }
}

export default AboutController;
