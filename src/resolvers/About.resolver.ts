import AboutController from "../controller/About";
import { MutationCreateAboutArgs, MutationUpdateAboutArgs, MutationUpdateMusicAndChatOptionArgs } from "@/graphgen";
import { IUserLogged } from "./Interface";
import UserInfo from "../entity/UserInfo";
import UserInfoController from "../controller/UserInfo";


export default {
    Query: {
        about: async (_: any, { id }: { id: number },{ userLogged }: any, context: any, infos: any) => {
            return await new AboutController().getAbout(id);
        }

    },
    Mutation: {
        createAbout: async (_: any, args: MutationCreateAboutArgs,{ userLogged }: IUserLogged) => {
            let msg = "user is not connected"
            if (!userLogged) {
                throw new Error(msg)
            }
            let userId = userLogged.id;
            const { animal, description, smoke, chatOptionId, musicOptionId } = args;
            let about = await new AboutController().createAbout({ animal, description,smoke, chatOptionId, musicOptionId});
            let userInfoAbout = await new UserInfoController().assignAbout({ userLogged }, about)
            console.log(about);
            return about;
        },
        
        updateAbout: async (_: any, args: MutationUpdateAboutArgs, { res }: any) => {
            const { id, animal, description, smoke } = args;
            let about = await new AboutController().updateAbout({ id, animal, description,smoke });
            return about;
        },

        updateMusicAndChatOption: async (_: any, args: MutationUpdateMusicAndChatOptionArgs, { res }: any) => {
            const { id, chatOptionId, musicOptionId } = args;
            let about = await new AboutController().updateMusicAndChatOption({ id, chatOptionId, musicOptionId });
            return about;
        }
}
}
