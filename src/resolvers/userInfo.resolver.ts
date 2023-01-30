import { MutationCreateUserInfoArgs, MutationUpdateUserInfoArgs } from "@/graphgen";
import UserInfoController from "../controller/UserInfo";
// import getFieldNames from "graphql-list-fields";
import { ExpressContext } from "apollo-server-express";
import { IUserLogged } from "./Interface";
import UserController from "../controller/User";

export default {
    Query: {

        getUserInfos: async (_: any, { }, { userLogged }: any, infos: any) => {

            return await new UserInfoController().listUsersInfo();
        },



        getUserInfo: async (_: any, { id }: { id: number }, { userLogged }: any, infos: any) => {
            return await new UserInfoController().getUserInfoById(id);
        }
    },

    Mutation: {
        createUserInfo: async (_: any, args: MutationCreateUserInfoArgs, { userLogged }: IUserLogged) => {
            let msg = "user is not connected"
            if (!userLogged) {
                throw new Error(msg)
            }
            let userId = userLogged.id;
            console.log(userLogged)
            const { city, country, firstname, lastname, age, birthday, address, profilPictureId, } = args;
            let userInfo = await new UserInfoController().createUserInfo({ city, country, firstname, lastname, age, birthday, address, profilPictureId });
            let user = await new UserController().assignUserInfos({ userLogged }, userInfo)
            console.log(userId);
            return userInfo
        },
        updateUserInfo: async (_: any, args: MutationUpdateUserInfoArgs, { res }: ExpressContext) => {
            const { id, city, country, firstname, lastname, age, birthday, address } = args;
            let userInfo = await new UserInfoController().updateUserInfo({ id, city, country, firstname, lastname, age, birthday, address });
            return userInfo;
        }
    }
}
