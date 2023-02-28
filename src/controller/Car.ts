import { MutationCreateCarArgs, MutationUpdateCarArgs } from "@/graphgen";
import { Repository } from "typeorm";
import Car from "../entity/Car";
import Model from "../entity/Model";
import Options from "../entity/Option";
import datasource from "../lib/datasource";
import { IErrors } from "./Car.d";

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
    return await this.db.find();
  }

  async getCar(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getCarsByUserId({ userId }: { userId: number }) {
    return await this.db.findOneBy({ user: { id: userId } });
  }

  async addCar({ seat, modelId, optionId }: MutationCreateCarArgs) {
    const option = await this.dbOptions.findOne({ where: { id: optionId } });
    const model = await this.dbModel.findOne({ where: { id: modelId } });
    let data: any = { seat, model, option };
    if (model) {
      data.model = model;
    }
    if (option) {
      data.option = option;
    }
    const car = await this.db.save(data);
    return car;
  }

  async updateCar({ id, seat, modelId, optionId }: MutationUpdateCarArgs) {
    let errors = {} as IErrors;
    let model = null;
    let options = null;
    if (modelId) {
      model = await this.dbModel.findOneBy({ id: +modelId });
    }
    if (!model) {
      errors.model = "Model not found";
    }
    if (optionId) {
      options = await this.dbOptions.findOneBy({ id: +optionId });
    }
    if (!options) {
      errors.options = "Options not found";
    }
    if (model && options) {
      const car = await this.db.update(
        { id: +id },
        {
          seat: seat ?? undefined,
          model,
          options,
        }
      );
      return car;
    } else {
      return errors;
    }
  }

  async deleteCar(id: number) {
    return await this.db.delete(id);
  }
}
export default CarController;
