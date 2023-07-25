import {
  MutationCreateChatOptionArgs,
  MutationUpdateChatOptionArgs,
} from "@/graphgen";
import { Repository } from "typeorm";

import ChatOption from "../entity/ChatOption";
import datasource from "../lib/datasource";

class ChatOptionController {
  db: Repository<ChatOption>;
  constructor() {
    this.db = datasource.getRepository("ChatOption");
  }

  async listChatOptions() {
    return await this.db.find();
  }

  async getChatOption(id: number) {
    return await this.db.findOneBy({ id });
  }

  async createChatOption({ content }: MutationCreateChatOptionArgs) {
    const chatOption = await this.db.save({
      content,
    });
    return chatOption;
  }

  async updateChatOption({ id, content }: MutationUpdateChatOptionArgs) {
    const chatOption = await this.db.findOne({ where: { id: +id } });
    return await this.db.save({
      ...chatOption,
      content,
    });
  }
}

export default ChatOptionController;
