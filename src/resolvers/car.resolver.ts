import { ExpressContext } from "apollo-server-express";
import CarController from "../controller/Car";
import {
  MutationCreateCarArgs,
  MutationDeleteCarArgs,
  MutationUpdateCarArgs,
} from "@/graphgen";

export default {
  Query: {
    cars: async (_: any, {}, context: any, infos: any) => {
      return await new CarController().listCars();
    },

    car: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new CarController().getCar(id);
    },
  },
  Mutation: {
    createCar: async (
      _: any,
      args: MutationCreateCarArgs,
      { res }: ExpressContext
    ) => {
      const { seat, modelId, optionId } = args;
      let car = await new CarController().addCar({ seat, modelId, optionId });
      return car;
    },

    updateCar: async (
      _: any,
      args: MutationUpdateCarArgs,
      { res }: ExpressContext
    ) => {
      const { id, seat, modelId, optionId } = args;
      let car = await new CarController().updateCar({
        id,
        seat,
        modelId,
        optionId,
      });
      return car;
    },

    deleteCar: async (
      _: any,
      args: MutationDeleteCarArgs,
      { res }: ExpressContext
    ) => {
      const { id } = args;
      let car = await new CarController().deleteCar(+id);
      return car;
    },
  },
};
