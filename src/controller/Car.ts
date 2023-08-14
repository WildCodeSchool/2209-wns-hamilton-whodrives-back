import { MutationCreateCarArgs, MutationUpdateCarArgs } from "@/graphgen";
import { Repository } from "typeorm";

import Car from "../entity/Car";
import Brand from "../entity/Brand";
import datasource from "../lib/datasource";
import { IUserLogged } from "../resolvers/Interface";

class CarController {
  db: Repository<Car>;
  dbBrand: Repository<Brand>;
  constructor() {
    this.db = datasource.getRepository("Car");
    this.dbBrand = datasource.getRepository("brand");
  }

  async listCars() {
    return await this.db.find({ select: { carPictures: true } });
  }

  async getCarById(id: number) {
    return await this.db.findOneBy({ id });
  }

  async getCarsByUserId({ userId }: { userId: number }) {
    return await this.db.findOneBy({ user: { id: userId } });
  }

  async addCar(
    { seat, brandId }: MutationCreateCarArgs,
    { userLogged }: IUserLogged
  ) {
    const brand = await this.dbBrand.findOne({ where: { id: brandId } });
    let userIdLogged = userLogged.id;
    const user = { id: userIdLogged };
    let data: any = { seat, brand,  user };
    if (brand) {
      data.brand = brand;
    }
    const car = await this.db.save(data);
    return car;
  }

  async updateCar({ id, seat, brandId }: MutationUpdateCarArgs) {
    const car = await this.db.findOne({ where: { id: +id } });
    const brand = await this.dbBrand.findOne({ where: { id: brandId } });
    return await this.db.save({
      ...car,
      seat,
      brand,
    });
  }

  async deleteCar(id: number) {
    return await this.db.delete(id);
  }
}
export default CarController;
