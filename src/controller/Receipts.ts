import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Receipts from "../entity/Receipt";
import { MutationCreateReceiptsArgs, MutationUpdateReceiptsArgs } from "@/graphgen";


class ReceiptsController {
    db: Repository<Receipts>;
    constructor() {
      this.db = datasource.getRepository("Receipts");
    }
    async listReceipts() {
        return await this.db.find();
      }
      async getReceipts(id: number) {
        return await this.db.findOneBy({ id });
      }
    async addReceipts({file_name}:MutationCreateReceiptsArgs){
        const Receipts = await this.db.save({file_name})
        return Receipts;
    }
    async UpdateReceipts({id,file_name}:MutationUpdateReceiptsArgs){
        const ReceiptID = await this.db.findOne({where:{id: +id}})
        return await this.db.save({...ReceiptID,file_name})
    }
    async deleteReceipts(id: number) {
        return await this.db.delete(id);
      }
}
export default ReceiptsController