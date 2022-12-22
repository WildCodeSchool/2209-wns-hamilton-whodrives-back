import {DataSource} from "typeorm";
import User from "../entity/User";
import * as dotenv from "dotenv";

import * as path from "path";
import UserInfo from "../entity/User-info";
import ProfilPicture from "../entity/ProfilPicture";
import Badge from "../entity/Badge";
import About from "../entity/About";
import ChatOption from "../entity/ChatOption";
import MusicOption from "../entity/MusicOption";
dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ?+process.env.DATABASE_PORT : 5432 ,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User,UserInfo, ProfilPicture, Badge, About, ChatOption, MusicOption ],
  synchronize: true,
  // logging: ["query", "error"]
})