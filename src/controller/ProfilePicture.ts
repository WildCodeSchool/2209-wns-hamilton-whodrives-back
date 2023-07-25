import { MutationAddProfilePictureArgs } from "@/graphgen";
import fs from "fs";
import UserInfo from "src/entity/UserInfo";
import { finished } from "stream/promises";
import { Repository } from "typeorm";

import ProfilPicture from "../entity/ProfilePicture";
import datasource from "../lib/datasource";

class ProfilePictureController {
  db: Repository<ProfilPicture>;
  dbProfile: Repository<UserInfo>;

  constructor() {
    this.db = datasource.getRepository("ProfilPicture");
    this.dbProfile = datasource.getRepository("UserInfo");
  }
  async addProfilePicture({ userInfoId, file }: MutationAddProfilePictureArgs) {
    console.log("file", file);
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
    } else {
      const userInfoId = profile.id;

      const existantProfile = await this.db.findOneBy({
        userInfo: { id: userInfoId },
      });
      let data = existantProfile ?? { userInfo: { id: userInfoId } };
      const savedPicture = await this.db.save({
        ...data,
        path: newFileName,
      });
      if (savedPicture) {
        const newPath = `public/profiles/${newFileName}`;
        fs.copyFile(tempPath, newPath, function (err) {
          if (err) {
            throw err;
          }
        });

        return savedPicture;
      }
    }
  }
}
export default ProfilePictureController;
