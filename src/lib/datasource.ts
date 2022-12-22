import {DataSource} from "typeorm";
import User from "../entity/User";
import * as dotenv from "dotenv";

import * as path from "path";
import Car from "../entity/Car";
import Model from "../entity/Model";
import CarPicture from "../entity/CarPicture";
import Option from "../entity/Option";
import UserInfo from "../entity/UserInfo";
import ProfilPicture from "../entity/ProfilPicture";
import Badge from "../entity/Badge";
import About from "../entity/About";
import ChatOption from "../entity/ChatOption";
import MusicOption from "../entity/MusicOption";
import Trajet from "../entity/Trajet";
import Roles from "../entity/Roles";
import Rating from "../entity/Rating";
import Receipt from "../entity/Receipt";
import ConfirmMail from "../entity/ConfirmMail";
dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ?+process.env.DATABASE_PORT : 5432 ,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User,UserInfo, ProfilPicture, Badge, About, ChatOption, MusicOption, Trajet, Roles, Rating, Receipt, ConfirmMail, Car, Model, Option, CarPicture ],
  synchronize: true,
  // logging: ["query", "error"]
})