import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers as scalarResolvers } from "graphql-scalars";
import userResolver from "./user.resolver";
import carResolver from "./car.resolver";
import userInfoResolver from "./userInfo.resolver";
import modelResolver from "./model.resolver";
import ChatOptionResolver from "./ChatOption.resolver";
import MusicOptionResolver from "./MusicOption.resolver";
import AboutResolver from "./About.resolver";
import badgeResolver from "./badge.resolver";
import rolesResolver from "./roles.resolver";
import ratingResolver from "./rating.resolver";
import TripResolver from "./trip.resolver";
import receiptsResolver from "./receipts.resolver";
import carPictureResolver from "./carPicture.resolver";
import addProfilePicture from "./profilePicture.resolver";

const resolvers = [
  userResolver,
  badgeResolver,
  carResolver,
  carPictureResolver,
  scalarResolvers,
  userInfoResolver,
  modelResolver,
  ChatOptionResolver,
  MusicOptionResolver,
  AboutResolver,
  rolesResolver,
  ratingResolver,
  TripResolver,
  receiptsResolver,
  addProfilePicture,
];

export default mergeResolvers(resolvers);
