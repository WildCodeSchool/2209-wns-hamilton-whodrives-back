import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";
import userInfoResolver from "./userInfo.resolver";

const resolvers = [ userResolver, carResolver, scalarResolvers, userInfoResolver];

export default mergeResolvers(resolvers);
