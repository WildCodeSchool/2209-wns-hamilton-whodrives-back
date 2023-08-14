import {
  MutationCreateChatOptionArgs,
  MutationUpdateChatOptionArgs,
} from "@/graphgen";

import ChatOptionController from "../controller/ChatOption";

export default {
  Query: {
    getChatOptions: async (_: any, {}, context: any, infos: any) => {
      return await new ChatOptionController().listChatOptions();
    },

    getChatOptionsById: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new ChatOptionController().getChatOptionsById(id);
    },
  },

  Mutation: {
    createChatOption: async (
      _: any,
      args: MutationCreateChatOptionArgs,
      { res }: any
    ) => {
      const { content } = args;
      let chatOption = await new ChatOptionController().createChatOption({
        content,
      });
      return chatOption;
    },

    updateChatOption: async (
      _: any,
      args: MutationUpdateChatOptionArgs,
      { res }: any
    ) => {
      const { id, content } = args;
      return await new ChatOptionController().updateChatOption({ id, content });
    },
  },
};
