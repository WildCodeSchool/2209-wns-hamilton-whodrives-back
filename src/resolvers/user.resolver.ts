import UserController from "../controller/User";
import getFieldNames from "graphql-list-fields";
import {MutationCreateUserArgs} from "@/graphgen";
import * as bcrypt from 'bcrypt'; 

export default {
  Query: {
    users: (_: any, {}, context: any, infos: any) => {
      const fields = getFieldNames(infos);
      return new UserController().listUsers();
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs) => {
      console.log(args);
      const { username, firstname, lastname, password, email, phone, address, birthday } = args;
      let user = await new UserController().addUser({ username, firstname, lastname, password, email, phone, address, birthday });
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      user.password = hashed;
      console.log(user);
      return user; 
    }
  },
};