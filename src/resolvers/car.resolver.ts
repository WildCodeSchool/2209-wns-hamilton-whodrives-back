import { ExpressContext } from "apollo-server-express";
import CarController from "../controller/Car";
import { IUserLogged } from "../resolvers/Interface";
import {
  MutationCreateCarArgs,
  MutationDeleteCarArgs,
  MutationUpdateCarArgs,
} from "@/graphgen";
import { user } from "pg/lib/defaults";

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
    createCar: async ( _: any, args: MutationCreateCarArgs, { userLogged }: IUserLogged, infos: any) => {
      const { seat, modelId, optionId } = args;
      let car = await new CarController().addCar({ seat, modelId, optionId }, { userLogged });
      return car;
    },

    updateCar: async (
      _: any,
      args: MutationUpdateCarArgs,
      { res }: ExpressContext
    ) => {
      const { id, seat, modelId } = args;
      let car = await new CarController().updateCar({ id, seat, modelId });
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
