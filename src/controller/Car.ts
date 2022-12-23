import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Car from "../entity/Car";

class CarController {
  db: Repository<Car>;
  constructor() {
    this.db = datasource.getRepository("Car");
  }

  async listCars() {
    return await this.db.find();
  }

  async getCar(id: number) {
    return await this.db.findOneBy({ id });
  }

//   async getCarsByUserId({userId}:{userId: number}) {
//     return await this.db.find({userId})
// };

  async addCar({ seat, userId, modelId, optionId }: { seat: number, userId: number, modelId: number, optionId: number }) {
      const car = await this.db.save({
        seat, 
        userId, 
        modelId, 
        optionId
      });
      return car;
  }

  async deleteCar(id: number) {
    return await this.db.delete(id);
  }
  
}
export default CarController;