import {DataSource} from "typeorm";
import User from "../entity/User";
import * as dotenv from "dotenv";

import * as path from "path";
import Car from "../entity/Car";
import Model from "../entity/Model";
import CarPicture from "../entity/CarPicture";
import Option from "../entity/Option";
dotenv.config();

export default new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ?+process.env.DATABASE_PORT : 5432 ,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User, Car, Model, Option, CarPicture],
  synchronize: true,
  // logging: ["query", "error"]
})