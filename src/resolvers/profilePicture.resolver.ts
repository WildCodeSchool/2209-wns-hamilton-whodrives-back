import { MutationAddProfilePictureArgs } from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

import ProfilePictureController from "../controller/ProfilePicture";

const profilePictureController = new ProfilePictureController();

export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    addProfilePicture: async (
      parent: any,
      { userInfoId, file }: MutationAddProfilePictureArgs,
      context: ExpressContext
    ) => {
      try {
        return await profilePictureController.addProfilePicture({
          userInfoId,
          file,
        });
      } catch (error: any) {
        console.log("ERROR", error);
      }
    },
  },
};
