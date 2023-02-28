import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Badge from "../entity/Badge";
import { MutationCreateBadgeArgs, MutationDeleteBadgeArgs, MutationUpdateBadgeArgs } from "@/graphgen";


class BadgeController {
    db: Repository<Badge>;
    constructor() {
        this.db = datasource.getRepository("Badge");
    }

    async listBadges() {
        return await this.db.find();
    }

    async getBadge(id: number) {
        return await this.db.findOneBy({ id });
    }

    async addBadge({ name, description}: MutationCreateBadgeArgs) {
        const badge = await this.db.save({
            name,
            description
        });
        return badge;
    }

    async updateBadge({ id, name, description}: MutationUpdateBadgeArgs) {
        const badge = await this.db.findOne({ where: { id: +id } });
        return await this.db.save({
            ...badge,
            name,
            description
        });
    }

    async deleteBadge({ id }: MutationDeleteBadgeArgs) {
      let msg = "badge Introuvable"
      let msg2 = "error request"
        const badge = await this.db.findOne({ where: { id: +id } });
        if (badge) {
            let result = await this.db.delete(id);
            console.log(result)
            if (result?.affected != 0) {
                return { msg: "badge supprimé" }
            } else {
                return msg2
            }
            } else {
                return msg
            }

        }


}

export default BadgeController;