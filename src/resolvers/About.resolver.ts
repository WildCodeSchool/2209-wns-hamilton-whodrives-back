import AboutController from "../controller/About";
import * as bcrypt from 'bcrypt'; 
import { create_UUID, generateToken } from "../lib/utilities";
import { MutationCreateAboutArgs, MutationUpdateAboutArgs } from "@/graphgen";

export default {
    Query: {
        about: async (_: any, { id }: { id: number },{ userLogged }: any, context: any, infos: any) => {
            return await new AboutController().getAbout(id);
        }

    },
    Mutation: {
        createAbout: async (_: any, args: MutationCreateAboutArgs, { res }: any) => {
            const { animal, description, smoke, chatOption, musicOption } = args;
            console.log(args)
            let about = await new AboutController().createAbout({ animal, description,smoke, chatOption, musicOption});
            return about;
        },
        
        updateAbout: async (_: any, args: MutationUpdateAboutArgs, { res }: any) => {
            const { id, animal, description, smoke } = args;
            let about = await new AboutController().updateAbout({ id, animal, description,smoke });
            return about;
        },
}
}
