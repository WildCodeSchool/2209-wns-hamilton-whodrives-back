import { MutationCreateCarArgs, MutationUpdateCarArgs } from "@/graphgen";
import { Repository } from "typeorm";

import Car from "../entity/Car";
import Model from "../entity/Model";
import Options from "../entity/Option";
import datasource from "../lib/datasource";
import { IUserLogged } from "../resolvers/Interface";

class CarController {
  db: Repository<Car>;
  dbModel: Repository<Model>;
  dbOptions: Repository<Options>;
  constructor() {
    this.db = datasource.getRepository("Car");
    this.dbModel = datasource.getRepository("Model");
    this.dbOptions = datasource.getRepository("Options");
  }

  async listCars() {
    return await this.db.find({ select: { carPictures: true } });
  }

  async getCar(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getCarsByUserId({ userId }: { userId: number }) {
    return await this.db.findOneBy({ user: { id: userId } });
  }

  async addCar(
    { seat, modelId, optionId }: MutationCreateCarArgs,
    { userLogged }: IUserLogged
  ) {
    const option = await this.dbOptions.findOne({ where: { id: optionId } });
    const model = await this.dbModel.findOne({ where: { id: modelId } });
    let userIdLogged = userLogged.id;
    const user = { id: userIdLogged };
    let data: any = { seat, model, option, user };
    if (model) {
      data.model = model;
    }
    if (option) {
      data.option = option;
    }
    const car = await this.db.save(data);
    return car;
  }

  async updateCar({ id, seat, modelId }: MutationUpdateCarArgs) {
    const car = await this.db.findOne({ where: { id: +id } });
    const model = await this.dbModel.findOne({ where: { id: modelId } });
    return await this.db.save({
      ...car,
      seat,
      model,
    });
  }

  async deleteCar(id: number) {
    return await this.db.delete(id);
  }
}
export default CarController;
