import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers as scalarResolvers } from "graphql-scalars";

import AboutResolver from "./About.resolver";
import carResolver from "./car.resolver";
import carPictureResolver from "./carPicture.resolver";
import ChatOptionResolver from "./ChatOption.resolver";
import brandResolver from "./brand.resolver";
import MusicOptionResolver from "./MusicOption.resolver";
import addProfilePicture from "./profilePicture.resolver";
import TripResolver from "./trip.resolver";
import userResolver from "./user.resolver";
import userInfoResolver from "./userInfo.resolver";

const resolvers = [
  userResolver,
  carResolver,
  carPictureResolver,
  scalarResolvers,
  userInfoResolver,
  brandResolver,
  ChatOptionResolver,
  MusicOptionResolver,
  AboutResolver,
  TripResolver,
  addProfilePicture,
];

export default mergeResolvers(resolvers);
