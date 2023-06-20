import UserController from "../controller/User";
import * as bcrypt from "bcrypt";
import { generateToken } from "../lib/utilities";
import { ExpressContext } from "apollo-server-express";
import { IUserLogged } from "../resolvers/Interface";
import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationLoginUserArgs,
  MutationUpdateUserArgs,
} from "@/graphgen";
import Trip from "../entity/Trip";
import { Repository } from "typeorm";

export default {
  Query: {
    users: async (_: any, {}, { userLogged }: IUserLogged, infos: any) => {
      return await new UserController().listUsers();
    },

    user: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new UserController().getUser(id);
    },
    userLogged: async (_: any, {}, { userLogged }: IUserLogged, infos: any) => {
      return await new UserController().getUserLogged({ userLogged });
    },
    UserTripsLoggedUser: async (_: any, {}, { userLogged }: IUserLogged, infos: any) => {
      return await new UserController().getUserTripsLoggedUser({ userLogged });
    },
    UserTrips: async (_: any, {}: any, { userLogged }: IUserLogged, infos: any) => {
      try {
        const trips = await new UserController().getAllUserTrips();
        return trips;
      } catch (error) {
        console.error("Erreur lors de la récupération des voyages de l'utilisateur :", error);
        throw error;
      }
    }
    
  },

  Mutation: {
    createUser: async (
      _: any,
      args: MutationCreateUserArgs,
      { res }: ExpressContext
    ) => {
      const {
        username,
        password,
        firstname,
        lastname,
        date_of_birth,
        email,
        phone,
      } = args;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      let user = await new UserController().addUser({
        username,
        password: hashed,
        firstname,
        lastname,
        date_of_birth,
        email,
        phone,
      });
      return user;
    },

    updateUser: async (
      _: any,
      args: MutationUpdateUserArgs,
      { res }: ExpressContext
    ) => {
      const {
        id,
        username,
        password,
        firstname,
        lastname,
        date_of_birth,
        email,
        phone,
      } = args;
      let user = await new UserController().updateUser({
        id,
        username,
        password,
        firstname,
        lastname,
        date_of_birth,
        email,
        phone,
      });
      return user;
    },

    loginUser: async (
      _: any,
      args: MutationLoginUserArgs,
      { res }: ExpressContext
    ) => {
      const { password, email } = args;
      let user = await new UserController().getUserByEmail(email);
      if (!user) {
        return {
          email: "invalid Login",
        };
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return {
          email: "invalid Login",
        };
      }
      let token = generateToken(email);
      return { email, success: true, token, user };
    },

    deleteUser: async (
      _: any,
      args: MutationDeleteUserArgs,
      { res }: ExpressContext
    ) => {
      const { id } = args;
      return await new UserController().deleteUser({ id });
    },
    // trip user mutation
    selectTrip: async (_: any, { tripId }: { tripId: number }, { userLogged }: IUserLogged, infos: any) => {
      return await new UserController().selectTrip({ userLogged, tripId });
    }
  },
};
