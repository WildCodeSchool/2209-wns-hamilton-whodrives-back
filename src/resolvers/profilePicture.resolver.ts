import { MutationCreateProfilePictureArgs, MutationDeleteProfilePictureArgs } from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import ProfilePictureController from "../controller/ProfilePicture";

const profilePictureController = new ProfilePictureController();

export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    createProfilePicture: async (
      parent: any,
      { userInfoId, file }: MutationCreateProfilePictureArgs,
      context: ExpressContext
    ) => {
      try {
        return await profilePictureController.createProfilePicture({
          userInfoId,
          file,
        });
      } catch (error: any) {
        console.log("ERROR", error);
      }
    },
    deleteProfilePicture: async (
      parent: any,
      args: MutationDeleteProfilePictureArgs,
    ) => {
      const { id } = args;
      return await profilePictureController.deleteProfilePicture(+id);
    },
  },
};
