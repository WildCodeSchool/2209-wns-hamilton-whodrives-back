import { MutationCreateAboutArgs, MutationUpdateAboutArgs } from "@/graphgen";

import AboutController from "../controller/About";
import { IUserLogged } from "./Interface";

export default {
  Query: {
    getAboutById: async (
      _: any,
      { id }: { id: number },
      { userLogged }: any,
      context: any,
      infos: any
    ) => {
      return await new AboutController().getAboutById(id);
    },
  },

  Mutation: {
    createAbout: async (
      _: any,
      args: MutationCreateAboutArgs,
      { userLogged }: IUserLogged
    ) => {
      let msg = "user is not connected";
      if (!userLogged) {
        throw new Error(msg);
      }
      let userId = userLogged.id;
      const { animal, description, cigarette, chatOptionId, musicOptionId } = args;
      let about = await new AboutController().createAbout({
        animal,
        description,
        cigarette,
        chatOptionId,
        musicOptionId,
      });
      let userInfoAbout = await new AboutController().assignAbout(
        { userLogged },
        about
      );
      return about;
    },

    updateAbout: async (
      _: any,
      args: MutationUpdateAboutArgs,
      { res }: any
    ) => {
      const { id, animal, description, cigarette, chatOptionId, musicOptionId } =
        args;
      let about = await new AboutController().updateAbout({
        id,
        animal,
        description,
        chatOptionId,
        musicOptionId,
        cigarette,
      });
      return about;
    },
  },
};
