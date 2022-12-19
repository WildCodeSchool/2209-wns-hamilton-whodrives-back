import UserController from "../controller/User";
// import getFieldNames from "graphql-list-fields";
import {MutationCreateUserArgs, MutationloginUserArgs} from "@/graphgen";
import * as bcrypt from 'bcrypt'; 
import { create_UUID, generateToken } from "../lib/utilities";
import { ExpressContext } from "apollo-server-express";
// import { IGenerateToken } from "src/lib/utilities.spec";
import {checkRights} from "../lib/utilities";

export default {
  Query: {
    users: async (_: any, {}, {userLogged}: any, infos: any) => {
      
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

      // let token = generateToken(email);

 
      // return {email, success: true, token};
      return user
    },
     loginUser: async (_: any, args: MutationloginUserArgs, { res }: ExpressContext) => {
       const {password, email} = args;
      let user = await new UserController().getUserByEmail({email});

       if (!user) {
         return "pas le bon compte";
       } 
       const valid = await bcrypt.compare(password, user.password);

       if (!valid) {
         return "pas le bon mdp";
      }
       let token = generateToken(email);

 
       return {email, success: true, token,user};

     }
     
    }
  }
