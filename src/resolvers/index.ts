import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";
import userInfoResolver from "./userInfo.resolver";
import modelResolver from "./model.resolver";
import rolesResolver from "./roles.resolver";
import ratingResolver from "./rating.resolver";
import TripResolver from "./trip.resolver";
import receiptsResolver from "./receipts.resolver";
const resolvers = [ userResolver, carResolver, scalarResolvers, userInfoResolver,modelResolver,rolesResolver,ratingResolver,TripResolver,receiptsResolver];

export default mergeResolvers(resolvers);
