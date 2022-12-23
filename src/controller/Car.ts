import { Repository } from 'typeorm';
import Car from '../entity/Car';
import Model from '../entity/Model';
import Options from '../entity/Option';
import datasource from '../lib/datasource';
import { IErrors } from './Car.d';

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
    return await this.db.findOneBy({user: {id: userId}})
  }

  async addCar({ seat, modelId, optionId }: { seat: number, modelId: number, optionId: number }) {
    const car = await this.db.save({
      seat,
      modelId,
      optionId
    });
      return car;
  }

  async updateCar({ id, seat, modelId, optionId }: { id: number, seat: number, modelId: number, optionId: number }) {
    let errors = {} as IErrors;
    const model = await this.dbModel.findOneBy({ id: modelId });
    if(!model) {
      errors.model = 'Model not found';
    }
    const options = await this.dbOptions.findOneBy({ id: optionId });
    if(!options) {
      errors.options = 'Options not found';
    }
    if(model && options) {
      const car = await this.db.update(
        { id }, {
        seat,
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