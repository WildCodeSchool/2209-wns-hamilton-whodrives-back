import {DataSource} from "typeorm";
import User from "../entity/User";
import * as dotenv from "dotenv";

import Car from "../entity/Car";
import Model from "../entity/Model";
import CarPicture from "../entity/CarPicture";
import Options from "../entity/Option";
import UserInfo from "../entity/UserInfo";
import ProfilPicture from "../entity/ProfilePicture";
import Badge from "../entity/Badge";
import About from "../entity/About";
import ChatOption from "../entity/ChatOption";
import MusicOption from "../entity/MusicOption";
import Roles from "../entity/Roles";
import Rating from "../entity/Rating";
import Receipt from "../entity/Receipt";
import ConfirmMail from "../entity/ConfirmMail";
import Trip from "../entity/Trip";
dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ?+process.env.DATABASE_PORT : 5432 ,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User,UserInfo, ProfilPicture, Badge, About, ChatOption, MusicOption, Trip, Roles, Rating, Receipt, ConfirmMail, Car, Model, Options, CarPicture ],
  synchronize: true,
  // logging: ["query", "error"]
})