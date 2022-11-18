import UserController from "../controller/User";
// import getFieldNames from "graphql-list-fields";
import {MutationCreateUserArgs} from "@/graphgen";
import * as bcrypt from 'bcrypt'; 

export default {
  Query: {
    users:async (_: any, {}, context: any, infos: any) => {
      // const fields = getFieldNames(infos);
      // return await new UserController().listUsers();
      return await new UserController().listUsers();
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs) => {
      console.log(args);
      const { username, firstname, lastname, password, email, phone, address, birthday } = args;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      let user = await new UserController().addUser({ username, firstname, lastname, password: hashed, email, phone, address, birthday });
      // user.password = hashed;
      // console.log(user);
      return user; 
    }
  },
};