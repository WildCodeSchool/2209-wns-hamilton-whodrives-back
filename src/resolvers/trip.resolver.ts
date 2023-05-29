import {
  MutationCreateTripArgs,
  MutationDeleteTripArgs,
  MutationUpdateTripArgs,
} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";
import TripController from "../controller/Trips";
import { IUserLogged } from "../resolvers/Interface";
import { getUser } from "src/lib/utilities";
import { user } from "pg/lib/defaults";
import User from "src/entity/User";

export default {
  Query: {
    getTrips: async (_: any, {}, context: any, infos: any) => {
      return await new TripController().listTrip();
    },

    getTrip: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTrip(id);
    },
  },

  Mutation: {
    createTrip: async (
      _: any,
      args: MutationCreateTripArgs,
      userLogged: User,
      { req }: ExpressContext
    ) => {
      const {
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
      } = args;
    
      if (!userLogged) {
        throw new Error("Utilisateur non connecté"); // Vérifier si l'utilisateur est connecté
      }
    
      const trip = await new TripController().addTrip(
        {
          departure_places,
          destination,
          date_departure,
          arrival_date,
          price,
          description,
        },
        userLogged // Passer directement l'objet userLogged au lieu de l'encapsuler dans un autre objet
      );
    
      return trip;
    },

    updateTrip: async (
      _: any,
      args: MutationUpdateTripArgs,
      { res }: ExpressContext
    ) => {
      const {
        id,
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description, 
      } = args;
      let Trip = await new TripController().updateTrip({
        id,
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description, 
      });
      return Trip;
    },

    deleteTrip: async (
      _: any,
      args: MutationDeleteTripArgs,
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new TripController().deleteTrip(+id);
    },
  },
};
