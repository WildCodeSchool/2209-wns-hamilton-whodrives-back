import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";

const resolvers = [ userResolver, carResolver, scalarResolvers];

export default mergeResolvers(resolvers);
