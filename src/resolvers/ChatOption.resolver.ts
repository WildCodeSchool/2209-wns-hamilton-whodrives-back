import ChatOptionController from "../controller/ChatOption";
import { MutationCreateChatOptionArgs, MutationUpdateChatOptionArgs } from "@/graphgen";

export default {
    Query: {
        chatOptions: async (_: any, {}, context: any, infos: any) => {
            return await new ChatOptionController().listChatOptions();
        },
        chatOption: async (_: any, { id }: { id: number }, context: any, infos: any) => {
            return await new ChatOptionController().getChatOption(id);
        }
    },
    Mutation: {
        createChatOption: async (_: any, args: MutationCreateChatOptionArgs, { res }: any) => {
            const { content } = args;
            console.log(args)
            let chatOption = await new ChatOptionController().createChatOption({ content });
            return chatOption;
        },
        updateChatOption: async (_: any, args: MutationUpdateChatOptionArgs, { res }: any) => {
            const { id, content } = args;
            return await new ChatOptionController().updateChatOption({ id, content });
        }
    }
}