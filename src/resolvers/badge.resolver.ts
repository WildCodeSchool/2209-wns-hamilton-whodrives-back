import { MutationCreateBadgeArgs, MutationDeleteBadgeArgs, MutationUpdateBadgeArgs } from '@/graphgen';
import BadgeController from '../controller/Badge';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
 
export default {
    Query: {
        Badges: async (_: any, {}, context: any, infos: any) => {
            return await new BadgeController().listBadges();
        },

        Badge: async (_: any, { id }: { id: number }, context: any, infos: any) => {
            return await new BadgeController().getBadge(id);
        }
    },
    Mutation: {
        createBadge: async (_: any, args: MutationCreateBadgeArgs, { res }: ExpressContext) => {
            const { name, description } = args;
            return await new BadgeController().addBadge({ name, description });
        },
        updateBadge: async (_: any, args: MutationUpdateBadgeArgs, { res }: ExpressContext) => {
            const { id, name, description } = args;
            return await new BadgeController().updateBadge({ id, name, description });
        },
        deleteBadge: async (_: any, args: MutationDeleteBadgeArgs, { res }: ExpressContext) => {
            const { id } = args;
            return await new BadgeController().deleteBadge({ id });
        }   

    }
}