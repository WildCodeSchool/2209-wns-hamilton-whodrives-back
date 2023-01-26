import UserController from "../controller/User";
import {MutationCreateUserArgs, MutationDeleteUserArgs, MutationLoginUserArgs, MutationUpdateUserArgs} from "@/graphgen";
import * as bcrypt from 'bcrypt'; 
import { create_UUID, generateToken } from "../lib/utilities";
import { ExpressContext } from "apollo-server-express";
import {checkRights} from "../lib/utilities";
import User from "src/entity/User";

export default {
  Query: {
    users: async (_: any, {}, {userLogged}: any, infos: any) => {
      return await new UserController().listUsers();
    },
    user: async (_: any, { id }: { id: number }, context: any, infos: any) => {
      return await new UserController().getUser(id);
    }
  },
  Mutation: {
    createUser: async (_: any, args: MutationCreateUserArgs, { res }: ExpressContext) => {
      const { username, password, email, phone } = args;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      let user = await new UserController().addUser({ username, password: hashed, email, phone});
      return user
    },
    updateUser: async (_:any , args: MutationUpdateUserArgs, { res }: ExpressContext) => {
      const {id,username, email, phone } = args;
      let user = await new UserController().updateUser({id,username, email, phone})
      return user
    },

     loginUser: async (_: any, args: MutationLoginUserArgs, { res }: ExpressContext) => {
      const {password, email} = args;
      let user = await new UserController().getUserByEmail({email});
      if(!user){
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
       return {email, success: true, token,user};
     }
     ,
     deleteUser: async(_:any,args: MutationDeleteUserArgs,{res}:ExpressContext)=>{
      const {id} = args;
      return await new UserController().deleteUser({id});
    },
    }
}
