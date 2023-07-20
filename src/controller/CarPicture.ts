import { MutationAddPictureArgs } from "@/graphgen";
import Car from "../entity/Car";
import { Repository } from "typeorm";
import CarPicture from "../entity/CarPicture"; //fix d'importation
import datasource from "../lib/datasource";
import { createWriteStream } from "fs";
import { finished } from "stream/promises";
import stream from "stream";
import fs from "fs";
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

    // Invoking the `createReadStream` will return a Readable Stream.
    // See https://nodejs.org/api/stream.html#stream_readable_streams
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
    //partie à revoir pour l'assignation de cars
    const savedPicture = await this.db.save({
      // cars: [car],
      path: newFileName,
    });
    car.carPictures = [savedPicture];
    this.dbCar.save(car); //update, si un id est défini, le save fait l'update, sinon le create

    //si tout c'est bien passé, on déplace l'image du dossier uploads vers le dossier final public/cars
    if (savedPicture) {
      const newPath = `public/cars/${newFileName}`;
      fs.copyFile(tempPath, newPath, function (err) {
        if (err) throw err;
        console.log(
          `Copie du fichier ${newFileName} vers le dossier public/cars`
        );
      });
      return {
        id: savedPicture.id,
        path: newFileName,
      };
    }
  }
}
export default CarPictureController;
