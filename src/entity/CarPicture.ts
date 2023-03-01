import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Car from "./Car";

@Entity("carPicture")
export default class CarPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Car, (car) => car.carPictures)
  cars: Car[];
}
