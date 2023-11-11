import {
  MutationCreateCarArgs,
  MutationDeleteCarArgs,
  MutationUpdateCarArgs,
} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";

import CarController from "../controller/Car";
import { IUserLogged } from "../resolvers/Interface";

export default {
  Query: {
    getCars: async (_: any, {}, context: any, infos: any) => {
      return await new CarController().listCars();
    },

    getCarById: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new CarController().getCarById(id);
    },
  },
  Mutation: {
    createCar: async (
      _: any,
      args: MutationCreateCarArgs,
      { userLogged }: IUserLogged,
      infos: any
    ) => {
      const { seat, brandId } = args;
      let car = await new CarController().addCar(
        { seat, brandId },
        { userLogged }
      );
      return car;
    },

    updateCar: async (
      _: any,
      args: MutationUpdateCarArgs,
      { res }: ExpressContext
    ) => {
      const { id, seat, brandId } = args;
      let car = await new CarController().updateCar({ id, seat, brandId });
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
