import { MutationCreateCarPictureArgs } from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

import CarPictureController from "../controller/CarPicture";

const carPictureController = new CarPictureController();

export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    createCarPicture: async (
      parent: any,
      { carId, file }: MutationCreateCarPictureArgs,
      context: ExpressContext
    ) => {
      try {
        return await carPictureController.createCarPicture({
          carId,
          file,
        });
      } catch (error: any) {
        console.log("ERROR", error);
        return {
          success: false,
          message: error.message,
          carPicture: null,
        };
      }
    },
  },
};
