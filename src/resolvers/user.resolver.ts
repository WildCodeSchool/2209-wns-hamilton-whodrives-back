import UserController from "../controller/User";
import getFieldNames from "graphql-list-fields";
import {MutationCreateUserArgs} from "@/graphgen";

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
      console.log(user);
      return user; 
    },
    // register: async (
    //     _: any,
    //     { registerUserInput }
    //   ) => {
    //     let newUser = { ...registerUserInput };
    //     const { password, username } = newUser;
    //     if (users.some((e) => e.username === username)) {
    //       throw new ApolloError("Un utilisateur existe déjà");
    //     }
    //     const salt = await bcrypt.genSalt(10);
    //     const hashed = await bcrypt.hash(password, salt);
    //     newUser.password = hashed;
    //     //Token à générer
    //     //newUser à ajouter aux users
    //     return newUser;
    //   },
  },
};