import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers as scalarResolvers } from "graphql-scalars";

import AboutResolver from "./About.resolver";
import carResolver from "./car.resolver";
import carPictureResolver from "./carPicture.resolver";
import ChatOptionResolver from "./ChatOption.resolver";
import modelResolver from "./model.resolver";
import MusicOptionResolver from "./MusicOption.resolver";
import addProfilePicture from "./profilePicture.resolver";
import rolesResolver from "./roles.resolver";
import TripResolver from "./trip.resolver";
import userResolver from "./user.resolver";
import userInfoResolver from "./userInfo.resolver";

const resolvers = [
  userResolver,
  carResolver,
  carPictureResolver,
  scalarResolvers,
  userInfoResolver,
  modelResolver,
  ChatOptionResolver,
  MusicOptionResolver,
  AboutResolver,
  rolesResolver,
  TripResolver,
  addProfilePicture,
];

export default mergeResolvers(resolvers);
