import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import About from "../entity/About";
import MusicOption from "src/entity/MusicOption";
import ChatOption from "src/entity/ChatOption";

class AboutController {
  db: Repository<About>;
  dbOptionMusic: Repository<MusicOption>;
  dbOptionChat: Repository<ChatOption>;

  constructor() {
    this.db = datasource.getRepository("About");
  }

  //Liste de toute les preferences de l'utilisateur y compris les preferences de musique et de chat(communication)   
  async listAbout() {
    return await this.db.find();
  } 
  
  
}

export default AboutController;

