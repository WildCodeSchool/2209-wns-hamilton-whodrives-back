import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";
import userInfoResolver from "./userInfo.resolver";
import modelResolver from "./model.resolver";
const resolvers = [ userResolver, carResolver, scalarResolvers, userInfoResolver,modelResolver];

export default mergeResolvers(resolvers);
