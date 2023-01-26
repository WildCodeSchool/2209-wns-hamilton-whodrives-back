import UserInfoController from "../controller/UserInfo";
// import getFieldNames from "graphql-list-fields";
import {MutationCreatUserInfoArgs, MutationUpdateUserInfoArgs} from "@/graphgen";
import { ExpressContext } from "apollo-server-express";

export default {
    Query: {
        usersInfo: async (_: any, {}, {userLogged}: any, infos: any) => {
            
            // const fields = getFieldNames(infos);
            // return await new UserController().listUsers();
            return await new UserInfoController().listUsersInfo();
            }
        },
        
    Mutation: {
        createUserInfo: async (_: any, args: MutationCreatUserInfoArgs, { res }: ExpressContext) => {

            const {id, city, country, firstname, lastname, age, birthday, address, profilPictureId } = args;
            let userInfo = await new UserInfoController().creatUserInfo({id, city , country, firstname, lastname, age, birthday, address, profilPictureId });
            return userInfo;
        },
        updateUserInfo: async (_: any, args: MutationUpdateUserInfoArgs, { res }: ExpressContext) => {
            const { id, city, country, firstname, lastname, age, birthday, address } = args;
            let userInfo = await new UserInfoController().updateUserInfo({ id, city, country, firstname, lastname, age, birthday, address });
            return userInfo;
        }
    }
}