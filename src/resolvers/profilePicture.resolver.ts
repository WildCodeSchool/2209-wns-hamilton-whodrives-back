import { ExpressContext } from "apollo-server-express";
import {MutationAddProfilePictureArgs} from "@/graphgen";
import ProfilePictureController from "../controller/ProfilePicture";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { UsingJoinColumnIsNotAllowedError } from "typeorm";

const profilePictureController = new ProfilePictureController();


export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    addPicture: async (
      parent: any,
      { pictureID, file }: MutationAddProfilePictureArgs,
      context: ExpressContext
    ) => {
      try {
        const profilePicture = await profilePictureController.addProfilePicture({
          pictureID,
          file,
        });
        return profilePicture;
      } catch (error: any) {
        console.log("ERROR", error);
        return {
          success: false,
          message: error.message,
          profilePicture: null,
        };
      }
    },
  },
};
