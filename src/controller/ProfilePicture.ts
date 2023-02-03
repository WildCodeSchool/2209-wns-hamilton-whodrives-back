import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import ProfilePicture from "../entity/ProfilePicture";

class ProfilePictureController {

    // db: Repository<ProfilePicture>;

    // constructor() {
    //     this.db = datasource.getRepository("ProfilePicture");
    // }

    // singleUpload = async ({ file }: { file: any }) => {
    //     const { createReadStream, filename, mimetype, encoding } = await file;
    //     const stream = createReadStream();
    //     const url = `http://localhost:4000/uploadProfilPicture/${filename}`;
    //     const profilPicture = await this.db.save({
    //         path: url,

    //     });
    //     return profilPicture;
    // }

}

export default ProfilePictureController;