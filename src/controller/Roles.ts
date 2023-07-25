import { Repository } from "typeorm";

import Roles from "../entity/Roles";
import datasource from "../lib/datasource";

class RolesController {
  db: Repository<Roles>;
  constructor() {
    this.db = datasource.getRepository("Roles");
  }

  async listRoles() {
    return await this.db.find();
  }

  async getRole(id: number) {
    return await this.db.findOneBy({ id });
  }

  async addRole({ name }: { name: string }) {
    const role = await this.db.save({ name });
    return role;
  }

  async updateRole({ id, name }: { id: number; name: string }) {
    const rolelId = await this.db.findOne({ where: { id } });
    return await this.db.save({ ...rolelId, name });
  }

  async deleteRole(id: number) {
    return await this.db.delete(id);
  }
}

export default RolesController;
