import { MutationAddPictureArgs } from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

import CarPictureController from "../controller/CarPicture";

const carPictureController = new CarPictureController();

export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    addPicture: async (
      parent: any,
      { carId, file }: MutationAddPictureArgs,
      context: ExpressContext
    ) => {
      try {
        return await carPictureController.addCarPicture({
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
