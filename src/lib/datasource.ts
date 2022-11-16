import {DataSource} from "typeorm";
import User from "../entity/User";

import * as path from "path";

export default new DataSource({
  type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [User],
    synchronize: true,
    logging: false,
})