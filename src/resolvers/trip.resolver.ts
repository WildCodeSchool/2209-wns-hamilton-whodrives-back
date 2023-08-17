import {
  MutationCreateTripArgs,
  MutationDeleteTripArgs,
  MutationUpdateTripArgs,
  MutationUpdateTripPlaceArgs,
} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";

import TripController from "../controller/Trips";
import { IUserLogged } from "../resolvers/Interface";

export default {
  Query: {
    getTrips: async (_: any, {}, context: any, infos: any) => {
      return await new TripController().listTrips();
    },
    getTripSearch: async (
      _: any,
      {
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        departure_hour,
        available_seat,
      }: {
        departure_place: string;
        destination: string;
        departure_date: Date;
        arrival_date: Date;
        price: number;
        description: string;
        departure_hour: string;
        available_seat: number;
      },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTripSearch({
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        departure_hour,
        available_seat,
      });
    },
    getTripSearchByHourRange: async (
      _: any,
      {
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        departure_hour,
        available_seat,
        minHour,
        maxHour,
      }: {
        departure_place: string;
        destination: string;
        departure_date: Date;
        arrival_date: Date;
        price: number;
        description: string;
        departure_hour: string;
        available_seat: number;
        minHour: string;
        maxHour: string;
      },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTripSearchByHourRange({
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        departure_hour,
        available_seat,
        minHour,
        maxHour,
      });
    },

    getTripById: async (
      _: any,
      { id }: { id: number },
      context: any,
      infos: any
    ) => {
      return await new TripController().getTripById(id);
    },
  },

  Mutation: {
    createTrip: async (
      _: any,
      args: MutationCreateTripArgs,
      { userLogged }: IUserLogged
    ) => {
      const {
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        departure_hour,
        available_seat,
      } = args;

      if (!userLogged) {
        throw new Error("Utilisateur non connecté");
      }
      const trip = await new TripController().addTrip(
        {
          departure_place,
          destination,
          departure_date,
          arrival_date,
          price,
          description,
          departure_hour,
          available_seat,
        },
        userLogged
      );

      return trip;
    },

    updateTripPlace: async (
      _: any,
      args: MutationUpdateTripPlaceArgs,
      { res }: ExpressContext
    ) => {
      const {
        id,
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        available_seat,
      } = args;
      let Trip = await new TripController().updateTripPlace({
        id,
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        available_seat,
      });
      return Trip;
    },

    updateTrip: async (
      _: any,
      args: MutationUpdateTripArgs,
      { res }: ExpressContext
    ) => {
      const {
        id,
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        available_seat,
      } = args;
      let Trip = await new TripController().updateTrip({
        id,
        departure_place,
        destination,
        departure_date,
        arrival_date,
        price,
        description,
        available_seat,
      });
      return Trip;
    },

    deleteTrip: async (
      _: any,
      args: MutationDeleteTripArgs,
      { userLogged }: IUserLogged
    ) => {
      const { id } = args;
      const trip = await new TripController().deleteTrip(+id, userLogged);
      return trip;
    },
  },
};
