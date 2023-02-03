import { mergeResolvers } from "@graphql-tools/merge";

import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";
import userInfoResolver from "./userInfo.resolver";
import modelResolver from "./model.resolver";
import ChatOptionResolver from "./ChatOption.resolver";
import MusicOptionResolver from "./MusicOption.resolver";
import AboutResolver from "./About.resolver";
import ProfilePictureResolver from "./ProfilePicture.resolver";
const resolvers = [ userResolver, carResolver, scalarResolvers, userInfoResolver,modelResolver, ChatOptionResolver, MusicOptionResolver, AboutResolver, ProfilePictureResolver];

export default mergeResolvers(resolvers);
