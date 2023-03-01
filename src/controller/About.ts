import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import About from "../entity/About";
import MusicOption from "../entity/MusicOption";
import ChatOption from "../entity/ChatOption";
import {
  MutationCreateAboutArgs,
  MutationUpdateAboutArgs,
  MutationUpdateMusicAndChatOptionArgs,
} from "@/graphgen";

class AboutController {
  db: Repository<About>;
  dbOptionMusic: Repository<MusicOption>;
  dbOptionChat: Repository<ChatOption>;

  constructor() {
    this.db = datasource.getRepository("About");
    this.dbOptionMusic = datasource.getRepository("MusicOption");
    this.dbOptionChat = datasource.getRepository("ChatOption");
  }

  //Liste de toute les preferences de l'utilisateur y compris les preferences de musique et de chat(communication)
  async getAbout(id: number) {
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
    smoke,
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
        smoke,
        description,
        musicOption,
        chatOption,
      });
      return about;
    } else {
      throw new Error("Please check your preferences");
    }
  }

  async updateAbout({
    id,
    animal,
    description,
    smoke,
  }: MutationUpdateAboutArgs) {
    const about = await this.db.findOne({ where: { id: +id } });

    return await this.db.save({
      ...about,
      animal,
      description,
      smoke,
    });
  }

  async updateMusicAndChatOption({
    id,
    chatOptionId,
    musicOptionId,
  }: MutationUpdateMusicAndChatOptionArgs) {
    const about = await this.db.findOne({ where: { id: +id } });
    const musicOption = await this.dbOptionMusic.findOne({
      where: { id: +musicOptionId },
    });
    const chatOption = await this.dbOptionChat.findOne({
      where: { id: +chatOptionId },
    });
    if (musicOption && chatOption) {
      return await this.db.save({
        ...about,
        musicOption,
        chatOption,
      });
    } else if (!musicOption && chatOption) {
      return await this.db.save({
        ...about,
        chatOption,
      });
    } else if (musicOption && !chatOption) {
      return await this.db.save({
        ...about,
        musicOption,
      });
    } else {
      throw new Error("Please check your preferences");
    }
  }
}

export default AboutController;
