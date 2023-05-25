import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import UserController from "../controller/User";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY as string;

//fonction permettant de générer un token
export function generateToken(email: string) {
  let token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "2h" });
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

export async function getUser(authorization: string) {
  return new Promise((resolve, reject) => {
    if (authorization) {
      let token = authorization.split(" ")[1];
      try {
        jwt.verify(token, SECRET_KEY, async (err: any, payload: any) => {
          if (payload && Object.keys(payload).length) {
            let user = await new UserController().getUserByEmail(payload.email);
            resolve(user);
          }
        });
      } catch (e: any) {
        reject(e);
      }
    } else {
      resolve(null);
    }
  });
}

export function checkRights(userLogged: any, rights?: string[]) {
  if (!userLogged) {
    throw new Error("Vous devez être connecté");
  }
}
