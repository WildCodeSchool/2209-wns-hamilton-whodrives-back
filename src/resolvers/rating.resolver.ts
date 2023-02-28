import {
  MutationCreateRatingArgs,
  MutationDeleteRatingArgs,
  MutationUpdateRatingArgs,
} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import RatingController from "../controller/Rating";

export default {
  Query: {
    Ratings: async (_: any, {}, context: any, infos: any) => {
      return await new RatingController().listRating();
    },

    Rating: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new RatingController().getRating(id);
    },
  },
  Mutation: {
    createRating: async (
      _: any,
      args: MutationCreateRatingArgs,
      { res }: ExpressContext
    ) => {
      const { note, content } = args;
      let Rating = await new RatingController().addRating({ note, content });
      return Rating;
    },

    updateRating: async (
      _: any,
      args: MutationUpdateRatingArgs,
      { res }: ExpressContext
    ) => {
      const { id, note, content } = args;
      let Rating = await new RatingController().updateRating({
        id,
        note,
        content,
      });
      return Rating;
    },

    deleteRating: async (
      _: any,
      args: MutationDeleteRatingArgs,
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new RatingController().deleteRating(+id);
    },
  },
};
