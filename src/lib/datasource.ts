import {DataSource} from "typeorm";
import User from "../entity/User";
import * as dotenv from "dotenv";

import * as path from "path";
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
  entities: [User,Trajet,Roles,Rating,Receipt,ConfirmMail],
  synchronize: true,
  // logging: ["query", "error"]
})