import {
  MutationCreateUserInfoArgs,
  MutationUpdateUserInfoArgs,
} from "@/graphgen";
import UserInfoController from "../controller/UserInfo";
import { ExpressContext } from "apollo-server-express";
import { IUserLogged } from "./Interface";
import UserController from "../controller/User";


export default {
  Query: {
    getUserInfos: async (_: any, {}, { userLogged }: any, infos: any) => {
      return await new UserInfoController().listUsersInfo();
    },

    getUserInfo: async (
      _: any,
      { id }: { id: number },
      { userLogged }: any,
      infos: any
    ) => {
      return await new UserInfoController().getUserInfoById(id);
    },
  },

  Mutation: {
    createUserInfo: async (
      _: any,
      args: MutationCreateUserInfoArgs,
      { userLogged }: IUserLogged
    ) => {
      let msg = "user is not connected";
      if (!userLogged) {
        throw new Error(msg);
      }
      let userId = userLogged.id;
      const { city, country, address } = args;
      let userInfo = await new UserInfoController().createUserInfo({
        city,
        country,
        address
      });
      let user = await new UserController().assignUserInfos(
        { userLogged },
        userInfo
      );
      return userInfo;
    },

    updateUserInfo: async (
      _: any,
      args: MutationUpdateUserInfoArgs,
      { res }: ExpressContext
    ) => {
      const { id, city, country, address } = args;
      let userInfo = await new UserInfoController().updateUserInfo({
        id,
        city,
        country,
        address,
      });
      return userInfo;
    },
  },
};
