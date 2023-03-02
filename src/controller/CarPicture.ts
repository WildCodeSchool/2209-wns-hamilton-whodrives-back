import { MutationAddPictureArgs } from "@/graphgen";
import Car from "../entity/Car";
import { Repository } from "typeorm";
import CarPicture from "src/entity/CarPicture";
import datasource from "../lib/datasource";
import { createWriteStream } from 'fs';

class CarPictureController {
    db: Repository<CarPicture>;
    dbCar: Repository<Car>;

    constructor() {
      this.db = datasource.getRepository("CarPicture");
      this.dbCar = datasource.getRepository("Car");
    }

    async addCarPicture({ carId, file }: MutationAddPictureArgs) {
      const { createReadStream, filename } = await file;
      console.log('test1')
      if (!createReadStream || !filename) {
        throw new Error('No file uploaded');
      }
      const newPicture = new CarPicture();
      newPicture.path = `uploads/${filename}`;
      const car = await this.dbCar.findOne({where: { id: +carId }});
      console.log('test2')
      if (!car) {
        throw new Error('Car not found');
      }
      newPicture.cars = [car];
      const savedPicture = await this.db.save(newPicture);
      console.log('test3')
      const uploadStream = createReadStream();
      const writeStream = createWriteStream(`uploads/${filename}`);
      uploadStream.pipe(writeStream);
      return savedPicture;
    }
   
  }
  export default CarPictureController;
