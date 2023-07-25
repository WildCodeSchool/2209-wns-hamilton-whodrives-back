import {
  MutationCreateMusicOptionArgs,
  MutationUpdateMusicOptionArgs,
} from "@/graphgen";
import { Repository } from "typeorm";

import MusicOption from "../entity/MusicOption";
import datasource from "../lib/datasource";

class MusicOptionController {
  db: Repository<MusicOption>;
  constructor() {
    this.db = datasource.getRepository("MusicOption");
  }

  async listMusicOptions() {
    return await this.db.find();
  }

  async getMusicOption(id: number) {
    return await this.db.findOneBy({ id });
  }

  async createMusicOption({ content }: MutationCreateMusicOptionArgs) {
    const musicOption = await this.db.save({
      content,
    });
    return musicOption;
  }

  async updateMusicOption({ id, content }: MutationUpdateMusicOptionArgs) {
    const musicOption = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...musicOption,
      content,
    });
  }
}

export default MusicOptionController;
