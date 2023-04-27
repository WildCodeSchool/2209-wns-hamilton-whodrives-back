import { ExpressContext } from "apollo-server-express";
import { MutationAddPictureArgs } from "@/graphgen";
import CarPictureController from "../controller/CarPicture";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { UsingJoinColumnIsNotAllowedError } from "typeorm";

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
        const carPicture = await carPictureController.addCarPicture({
          carId,
          file,
        });
        console.log("carPicture ===> ", carPicture);
        //   return {
        //     success: true,
        //     message: "Car picture added successfully",
        //     carPicture,
        //   };
        return carPicture;
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
