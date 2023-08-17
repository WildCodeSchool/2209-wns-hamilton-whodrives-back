import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import Car from "./Car";

@Entity("car_picture")
export default class CarPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  path: string;

  @ManyToOne(() => Car, (car) => car.carPictures)
  car: Car;
}
