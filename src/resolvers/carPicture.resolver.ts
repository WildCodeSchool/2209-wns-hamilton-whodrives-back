import { ExpressContext } from "apollo-server-express";
import { MutationAddPictureArgs } from "@/graphgen";
import CarPictureController from "../controller/CarPicture";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

const carPictureController = new CarPictureController();


export default {
  Query: {},
  Upload: GraphQLUpload,
  Mutation: {
    addCarPicture: async (
      parent: any,
      { carId, file }: MutationAddPictureArgs,
      context: ExpressContext
    ) => {
      try {
        const carPicture = await carPictureController.addCarPicture({
          carId,
          file,
        });
        return {
          success: true,
          message: "Car picture added successfully",
          carPicture,
        };
      } catch (error: any) {
        return {
          success: false,
          message: error.message,
          carPicture: null,
        };
      }
    },
  },
};
