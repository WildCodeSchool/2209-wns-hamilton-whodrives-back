import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = [ scalarResolvers];

export default mergeResolvers(resolvers);
