import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

import About from "../entity/About";
import Car from "../entity/Car";
import CarPicture from "../entity/CarPicture";
import ChatOption from "../entity/ChatOption";
import Brand from "../entity/Brand";
import MusicOption from "../entity/MusicOption";
import ProfilePicture from "../entity/ProfilePicture";
import Trip from "../entity/Trip";
import User from "../entity/User";
import UserInfo from "../entity/UserInfo";

dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [
    User,
    UserInfo,
    ProfilePicture,
    About,
    ChatOption,
    MusicOption,
    Trip,
    Car,
    Brand,
    CarPicture,
  ],
  synchronize: true,
});
