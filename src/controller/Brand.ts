import { Repository } from "typeorm";

import Brand from "../entity/Brand";
import datasource from "../lib/datasource";

class BrandController {
  db: Repository<Brand>;
  constructor() {
    this.db = datasource.getRepository("Brand");
  }

  async listBrands() {
    return await this.db.find();
  }

  async getBrand(id: number) {
    return await this.db.findOneBy({ id });
  }

  async createBrand({ name }: { name: string }) {
    const Brand = await this.db.save({ name });
    return Brand;
  }

  async updateBrand({ id, name }: { id: number; name: string }) {
    const BrandId = await this.db.findOne({ where: { id } });
    return await this.db.save({ ...BrandId, name });
  }

  async deleteBrand(id: number) {
    return await this.db.delete(id);
  }
}

export default BrandController;
