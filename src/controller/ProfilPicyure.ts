import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import ProfilPicture from "../entity/ProfilPicture";


class ProfilPictureController {
    db: Repository<ProfilPicture>;
    
    constructor() {
        this.db = datasource.getRepository("ProfilPicture");
    }
    
    async listUsers() {
        return await this.db.find();
    }
    
    async getUserInfoById(id: number) {
        return await this.db.findOneBy
    }

    async creatProfilPicture({ id, url,  }: { id: number, url: string,}) {
        const profilPicture = await this.db.save({
            id,
            url,
        });
        return profilPicture;
    }



   
}