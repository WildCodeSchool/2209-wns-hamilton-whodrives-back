import { MutationAddPictureArgs } from "@/graphgen";
import fs from "fs";
import { finished } from "stream/promises";
import { Repository } from "typeorm";

import Car from "../entity/Car";
import CarPicture from "../entity/CarPicture";
import datasource from "../lib/datasource";

class CarPictureController {
  db: Repository<CarPicture>;
  dbCar: Repository<Car>;

  constructor() {
    this.db = datasource.getRepository("CarPicture");
    this.dbCar = datasource.getRepository("Car");
  }

  async addCarPicture({ carId, file }: MutationAddPictureArgs) {
    const { createReadStream, filename } = await file;
    if (!createReadStream || !filename) {
      throw new Error("No file uploaded");
    }

    const stream = createReadStream();
    const tempPath = `uploads/${filename}`;
    const newFileName = `${Date.now()}-${filename}`;
    const out = require("fs").createWriteStream(tempPath);
    stream.pipe(out);
    await finished(out);

    const car = await this.dbCar.findOne({ where: { id: +carId } });
    if (!car) {
      throw new Error("Car not found");
    }

    const savedPicture = await this.db.save({
      path: newFileName,
      car,
    });

    if (savedPicture) {
      const newPath = `public/cars/${newFileName}`;
      fs.copyFile(tempPath, newPath, function (err) {
        if (err) {
          throw err;
        }
      });
      return {
        id: savedPicture.id,
        path: newFileName,
      };
    } else {
      throw new Error("Un problème est survenu au niveau de l'image.");
    }
  }
}
export default CarPictureController;
