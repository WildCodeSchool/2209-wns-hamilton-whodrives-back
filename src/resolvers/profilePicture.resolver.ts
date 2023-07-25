import { ExpressContext } from "apollo-server-express";
import {MutationAddProfilePictureArgs, ProfilePicture} from "@/graphgen";
import ProfilePictureController from "../controller/ProfilePicture";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { UsingJoinColumnIsNotAllowedError } from "typeorm";

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
}
}
