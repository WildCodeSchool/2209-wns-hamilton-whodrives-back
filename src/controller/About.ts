import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import About from "../entity/About";
import MusicOption from "src/entity/MusicOption";
import ChatOption from "src/entity/ChatOption";
import { MutationCreateAboutArgs, MutationUpdateAboutArgs } from "@/graphgen";

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
    return await this.db.findOneBy({id});
  } 

  async getMusicOptionId(musicOptionId: number) {
    return await this.dbOptionMusic.findOneBy({id: +musicOptionId});
  }

  async getChatOptionId(chatOptionId: number) {
    return await this.dbOptionChat.findOneBy({id: +chatOptionId});
  }

  async createAbout({animal, description, smoke, chatOption, musicOption}:MutationCreateAboutArgs) {

   // const ChatOption = await this.dbOptionChat.findOne({where: {id: chatOption}});
   // const MusicOption = await this.dbOptionMusic.findOne({where: {id: musicOption}});
    const about = await this.db.save({
      animal,
      description,
      smoke,
      ChatOption,
      MusicOption
    });
    return about;
  }

  async updateAbout({id, animal, description, smoke, chatOption,musicOption}:MutationUpdateAboutArgs) {
    const about = await this.db.findOne({ where: { id: +id } });
   // const ChatOption = await this.dbOptionChat.findOne({where: {id: chatOption}});
   // const MusicOption = await this.dbOptionMusic.findOne({where: {id: musicOption}});

    return await this.db.save({
      ...about,
      animal,
      description,
      smoke,
      ChatOption,
      MusicOption
    });
  }
  
  
}

export default AboutController;

