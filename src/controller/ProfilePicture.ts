import ProfilPicture from "../entity/ProfilePicture";
import { Repository } from "typeorm";
import UserInfo from "src/entity/UserInfo";
import datasource from "../lib/datasource";
import { createWriteStream } from "fs";
import { finished } from "stream/promises";
import stream from "stream";
import fs from "fs";
import { MutationAddProfilePictureArgs } from "@/graphgen";

class ProfilePictureController {
  db: Repository<ProfilPicture>;
  dbProfile: Repository<UserInfo>;

constructor() {
  this.db = datasource.getRepository("ProfilePicture");
  this.dbProfile = datasource.getRepository("UserInfo");
}
async addProfilePicture({ userInfoId, file }: MutationAddProfilePictureArgs) {
  const { createReadStream, filename } = await file;
  if (!createReadStream || !filename) {
    throw new Error("No file uploaded");
  }
  const stream = createReadStream();
  const tempPath = `uploads/${filename}`;
  const newFileName = `${Date.now()}-${filename}`;
  const out = require("fs").createWriteStream(tempPath);
  stream.pipe(out);
  await finished(out);
  const profile = await this.dbProfile.findOneBy({ id: +userInfoId });
  if (!profile) {
    throw new Error("Profile not found");
  
  }else{
    const userInfoId = profile.id;
    const savedPicture = await this.db.save({
      path: newFileName,
      userInfoId
    });
    if (savedPicture) {
      const newPath = `public/profile/${newFileName}`;
      fs.copyFile(tempPath, newPath, function (err) {
        if (err) { throw err; }
        console.log(
          `Copie du fichier ${newFileName} vers le dossier public/profile`
        );
      });
     
      return savedPicture;
    }
  }}
  }
export default ProfilePictureController;