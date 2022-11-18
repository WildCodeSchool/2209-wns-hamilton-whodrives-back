import UserController from "../controller/User";
// import getFieldNames from "graphql-list-fields";
import {MutationCreateUserArgs} from "@/graphgen";
import * as bcrypt from 'bcrypt'; 
import { create_UUID, generateToken } from "../lib/utilities";
import { ExpressContext } from "apollo-server-express";
// import { IGenerateToken } from "src/lib/utilities.spec";
import { IUser } from "./user.resolver.spec";
import {checkRights} from "../lib/utilities";
let users: Array<IUser> = [];

export default {
  Query: {
    users: async (_: any, {}, {userLogged}: any, infos: any) => {
      checkRights(userLogged);
      // const fields = getFieldNames(infos);
      // return await new UserController().listUsers();
      return await new UserController().listUsers();
    },
    user: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      // const fields = getFieldNames(infos);
      return await new UserController().getUser(id);
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs, { res }: ExpressContext) => {
      console.log(args);
      const { username, firstname, lastname, password, email, phone, address, birthday } = args;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      let user = await new UserController().addUser({ username, firstname, lastname, password: hashed, email, phone, address, birthday });
      // user.password = hashed;
      // console.log(user);

      // let newUser = {
      //   username,
      //   firstname,
      //   lastname,
      //   password,
      //   email,
      //   phone,
      //   address,
      //   birthday
      // };

      let token = generateToken(email);
      // users = [...users, newUser];
      // res.cookie("token", token, {
      //   secure: process.env.NODE_ENV === "production",
      //   maxAge: 1000 * 60 * 60 * 2, //2 heures
      // });
 
      return {email, success: true, token};
    },
  },
};