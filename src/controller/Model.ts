import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Model from "../entity/Model";

class ModelController {
  db: Repository<Model>;
  constructor() {
    this.db = datasource.getRepository("Model");
  }

  async listModel() {
    return await this.db.find();
  }
  async getModel(id: number) {
    return await this.db.findOneBy({ id });
  }
  async addModel({ name }:{name :string}) {
    const model = await this.db.save({name})
    return Model;
  }
  async updateModel({id, name }:{id: number,name :string}) {
    const ModelId = await this.db.findOne({ where: { id } });
    return await this.db.save({...ModelId,name});
  }
  async deleteModel(id: number) {
    return await this.db.delete(id);
  }
}
export default ModelController;