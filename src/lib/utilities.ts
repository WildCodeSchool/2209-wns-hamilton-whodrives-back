import * as jwt from "jsonwebtoken";
import { IGenerateToken } from "./utilities.spec";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = `${process.env.SECRET_KEY}`;

//fonction permettant de générer un token
export function generateToken(infos: IGenerateToken) {
  let token = jwt.sign(infos, SECRET_KEY, { expiresIn: "2h" });
  return token;
}
//Fonction permettant de générer un ID unique
export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}