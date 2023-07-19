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
    getTripSearch: async (
      _: any,
      {
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
        hour_departure,
        place_available,
      }: {
        departure_places: string;
        destination: string;
        date_departure: Date;
        arrival_date: Date;
        price: number;
        description: string;
        hour_departure: string;
        place_available: number;
      },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTripSearch({
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
        hour_departure,
        place_available,
      });
    },
    getTripSearchByHourRange: async (
      _: any,
      {
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
        hour_departure,
        place_available,
        minHour,
        maxHour,
      }: {
        departure_places: string;
        destination: string;
        date_departure: Date;
        arrival_date: Date;
        price: number;
        description: string;
        hour_departure: string;
        place_available: number;
        minHour: string;
        maxHour: string;
      },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTripSearchByHourRange({
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
        hour_departure,
        place_available,
        minHour,
        maxHour,
      });
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
      { userLogged }: IUserLogged,

    ) => {
      const {
        departure_places,
        destination,
        date_departure,
        arrival_date,
        price,
        description,
        hour_departure,
        place_available,
      } = args;

      if (!userLogged) {
        throw new Error("Utilisateur non connecté");
      }
      const trip = await new TripController().addTrip(
        {
          departure_places,
          destination,
          date_departure,
          arrival_date,
          price,
          description,
          hour_departure,
          place_available,
        },
        userLogged
      );

      return trip;
    },

    updateTrip: async (
      _: any,
      args: MutationUpdateTripArgs,
      { userLogged }: IUserLogged,
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
      { userLogged }: IUserLogged,
    ) => {
      const { id } = args;
      const trip =  await new TripController().deleteTrip(+id, userLogged);
      return trip
    },
  },
};
