import {
  MutationCreateMusicOptionArgs,
  MutationUpdateMusicOptionArgs,
} from "@/graphgen";

import MusicOptionController from "../controller/MusicOption";

export default {
  Query: {
    getMusicOptions: async (_: any, {}, context: any, infos: any) => {
      return await new MusicOptionController().listMusicOptions();
    },

    getMusicOptionsById: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new MusicOptionController().getMusicOptionsById(id);
    },
  },
  Mutation: {
    createMusicOption: async (
      _: any,
      args: MutationCreateMusicOptionArgs,
      context: any,
      infos: any
    ) => {
      const { content } = args;
      return await new MusicOptionController().createMusicOption({ content });
    },

    updateMusicOption: async (
      _: any,
      args: MutationUpdateMusicOptionArgs,
      context: any,
      infos: any
    ) => {
      const { id, content } = args;
      return await new MusicOptionController().updateMusicOption({
        id,
        content,
      });
    },
  },
};
